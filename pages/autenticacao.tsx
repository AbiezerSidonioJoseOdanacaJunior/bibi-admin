import { useState } from "react";
import AutInput from "../components/auth/AthInput";

export default function Autenticacao() {
const [modo, setModo] = useState<'login' | 'cadastrar'>('login')    
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

    return (
        <div>
            <h1>Autentição</h1>
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
        </div>
    )
}