import useAppData from "../../data/hook/UseAppData";
import ButtonToggle from "./ButtonToggle";
import SideBar from "./SideBar";
import Title from "./Title";

interface TopProps {
    titulo: string
    subtitulo: string
}

export default function TopBar(props: TopProps) {
    const {tema, alternarTema} = useAppData()

    return (
        <div className={`flex`}>
            <Title titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-grow justify-end`}>
                <ButtonToggle tema={tema} alternarTema={alternarTema} />
            </div>
        </div>
    )
}