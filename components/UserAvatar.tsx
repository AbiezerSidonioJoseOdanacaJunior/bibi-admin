import Link from "next/link"
import useAuth from "../data/hook/useAuth"

interface UserAvatarProps {
    classNmae?: string
}

export default function UserAvatar(props: UserAvatarProps)  {
    const {usuario} = useAuth()
    return (
        <Link href="/perfil">
            <img src={usuario?.imagemUrl ?? '/images/avatar.svg' } alt="Avatar do Usuário" 
            className={`h-10 w-10 rounded-full cursor-pointer
                ${props.classNmae}
            `} />
        </Link>
    )
}