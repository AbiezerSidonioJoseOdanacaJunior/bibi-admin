import Image from 'next/image'
import router from 'next/router'
import useAuth from '../../data/hook/useAuth'

export default function ForceAuth(pros) {

    const { usuario, carregando } = useAuth()

    function renderizarConteudo() {

        return (
            <>
                {pros.children}
            </>
        )
    }

    function renderizarCarregando(props) {
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
