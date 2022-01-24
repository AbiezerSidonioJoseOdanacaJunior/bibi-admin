import { User } from "firebase";
import Cookies from 'js-cookie'
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";
import route from 'next/router'


interface AuthContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>
    lougout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})


 async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}

function gerenciarCookie(logado: boolean) {
    if(logado) {
        Cookies.set('bibi-admin-auth', 'logado', {
            expires: 7
        })
    } else {
        Cookies.remove('bibi-admin-auth')
    }
}


export function AuthProvider(props) {
    const [ carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>(null)

    


    async function configurarSessao(usuarioFirebase) {
        if(usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase) 
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            configurarSessao(resp.user)
            route.push('/')
        } finally {
            setCarregando(false)
        }
    }

    async function lougout() {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('bibi-admin-auth')) {
            const cancelar =  firebase.auth().onIdTokenChanged(configurarSessao)
              return () => cancelar()
        }
    }, [])

    return (
        <AuthContext.Provider value={{usuario, loginGoogle, lougout}}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext