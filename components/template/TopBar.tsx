import SideBar from "./SideBar";
import Title from "./Title";

interface TopProps {
    titulo: string
    subtitulo: string
}

export default function TopBar(props: TopProps) {
    return (
        <div>
            <Title titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}