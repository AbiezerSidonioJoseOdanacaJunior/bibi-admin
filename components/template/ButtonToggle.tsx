import { IconSun } from "../icons";

interface BotaoAlternar {
    tema: string
    alternarTema: () => void
}

export default function ButtonToggle(props: BotaoAlternar) {
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={``} >
            <div className={``}>
                {IconSun}
            </div>
            <div className={``} >
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div>
            
        </div>
    )
       
}