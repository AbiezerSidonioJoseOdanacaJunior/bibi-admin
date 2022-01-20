import Content from "./Content";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <SideBar />
            <TopBar  titulo={props.titulo} subtitulo={props.subtitulo} />
            <Content>
                {props.children}
            </Content>
        </div>
    )
}