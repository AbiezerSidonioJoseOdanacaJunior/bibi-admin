import { IconBell, IconHome, IconLogout, IconSetting } from "../icons/index";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

interface SideBarProps {

}

export default function SideBar() {
    return (
        <aside className="flex flex-col 
        bg-gray-200 text-gray-700
        dark:bg-gray-900 ">
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-800
            h-20 w-20
            `}>
               <Logo />  
            </div>
           <ul className={`flex-grow`}>
               <MenuItem url="/" texto="Início" icone={IconHome}/>
               <MenuItem url="/configuracoes" texto="Configurações" icone={IconSetting}/>
               <MenuItem url="/notificacoes" texto="Notificação" icone={IconBell}/>
           </ul>
           <ul className={``}>
               <MenuItem texto="Sair" icone={IconLogout}
                onClick={() =>console.log('lougout')
                }
                className={`text-red-600 dark:text-red-400
                hover:bg-red-400 hover:text-white
                dark:hover:text-white
                `}
               />
           </ul>
        </aside>
    )
}