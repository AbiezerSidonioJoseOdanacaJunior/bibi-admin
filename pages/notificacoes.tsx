import Layout from "../components/template/Layout";
import useAppData from "../data/hook/UseAppData";

export default function Notificacoes() {
    const dados = useAppData()

    return(
        <Layout titulo="Notificações!" subtitulo="Aqui você irá receber as notificações">
           
            <h3>Conteúdo notificações!!!</h3>
            <h3>{dados.nome}</h3>
        </Layout>
    )
}