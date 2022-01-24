import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import useAuth from '../../data/hook/useAuth'

export default function ForceAuth(pros) {

    const { usuario, carregando } = useAuth()

    function renderizarConteudo() {

        return (
            <>
            <Head>
                <script 
                    dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie?.includes("bibi-admin-auth")) {
                            window.location.href = "/autenticacao"
                        }
                        `
                    }}
                />
            </Head>
                {pros.children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `} >
                <img
                    src='loading.gif'
                    />
            </div>
        )
    }

    if(!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        router.push('/autenticacao')
        return null
    }
}
