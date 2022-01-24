import { useState } from "react";
import AutInput from "../components/auth/AthInput";
import { IconWarnig } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {

const {cadastrar, login, loginGoogle} = useAuth()    

const [erro, setErro] = useState()    
const [modo, setModo] = useState<'login' | 'cadastrar'>('login')    
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

function exibirErro(msg, tempoEmSegundo = 5) {
    setErro(msg)
    setTimeout(() => setErro(null), tempoEmSegundo * 1000)
}

async function submeter() {
    try {
        if(modo === 'login') {
          await login(email, senha)
            
        }else{
           await cadastrar(email, senha)
        }
    } catch(e) {
        exibirErro(e?.message ?? 'Erro de Usuario!')
    }
}

    return (
        <div className="flex h-screen items-center justify-center">
            <div className=" hidden md:block md:w-1/2 lg:w-2/3">
                <img src="https://source.unsplash.com/random"
                 alt="Imagem da tela de autenticação"
                 className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`
                text-3xl font-bold mb-5
                `}>
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na Plataforma!'}
                </h1>

                {erro ? (
                    <div className={` flex items-center
                        bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg
                    `}>
                        {IconWarnig()}
                        <span className="ml-3" >{erro}</span>
                    </div>
                ) : false}

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

                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>  
                Entrar com Google
                </button>
                {modo === 'login' ? (
                    <p className="mt-8"> 
                        Novo por aqui?
                        <a onClick={() => setModo('cadastrar')}className={`
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `} > Crie sua Conta Gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8"> 
                       Já faz parte da minha Comunidade?
                        <a onClick={() => setModo('login')}className={`
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `} > Entre com suas Credênciais!</a>
                    </p>
                )}
            </div>
        </div>
    )
}