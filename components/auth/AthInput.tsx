interface AuthInputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    naoRenderizar?: boolean
    tipo?: 'text' | 'email' | 'password'
    valoMudou: (novoValor: any) => void
}

export default function AutInput(props: AuthInputProps) {
    return props.naoRenderizar ? null : (
        <div className="flex flex-col">
            <label htmlFor="">{props.label}</label>
            <input type={props.tipo ?? 'text'}
            value={props.valor}
            onChange={e => props.valoMudou?.(e.target.value)}
            required={props.obrigatorio}
             />
        </div>
    )
}