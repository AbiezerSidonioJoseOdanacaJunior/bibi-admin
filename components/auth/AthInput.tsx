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
        <div className="flex flex-col mt-4">
            <label htmlFor="">{props.label}</label>
            <input className={`
                px-4 py-3 rounded-3
                bg-gray-200 mt-2 border  focus:border-blue-500 
                focus:bg-white 
                focus:outline-none
            `}
            type={props.tipo ?? 'text'}
            value={props.valor}
            onChange={e => props.valoMudou?.(e.target.value)}
            required={props.obrigatorio}
             />
        </div>
    )
}