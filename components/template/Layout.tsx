import useAppData from "../../data/hook/UseAppData";
import Content from "./Content";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const {tema} = useAppData()
    return (
        <div className={`${tema} flex h-screen w-screen`}>
            <SideBar />
            <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
            <TopBar  titulo={props.titulo} subtitulo={props.subtitulo} />
            <Content>
                {props.children}
            </Content>
            </div>
        </div>
    )
}