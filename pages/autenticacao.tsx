import { useState } from "react";
import AutInput from "../components/auth/AthInput";

export default function Autenticacao() {
const [modo, setModo] = useState<'login' | 'cadastrar'>('login')    
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

function submeter() {
    if(modo === 'login') {
        console.log('login')
    }else{
        console.log('cadastrar')
    }
}

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="w-1/2">
                <h1 className={`
                text-xl font-bold mb-5
                `}>
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na Plataforma!'}
                </h1>
                <AutInput 
                label="Email"
                valor={email}
                tipo="email"
                valoMudou={setEmail}
                obrigatorio
                />
                <AutInput 
                label="Senha"
                tipo="password"
                valor={senha}
                valoMudou={setSenha}
                obrigatorio
                />
                <button onClick={submeter} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>  
                    {modo === 'login' ? 'Login' : 'Cadastrar'}
                </button>
                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={submeter} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>  
                Entrar com Google
                </button>
            </div>
        </div>
    )
}