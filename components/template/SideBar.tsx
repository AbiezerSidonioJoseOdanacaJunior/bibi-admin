import { IconBell, IconHome, IconSetting } from "../icons/Index";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

interface SideBarProps {

}

export default function SideBar() {
    return (
        <aside>
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-800
            h-20 w-20
            `}>
               <Logo />  
            </div>
           <ul>
               <MenuItem url="/" texto="Início" icone={IconHome}/>
               <MenuItem url="/configuracoes" texto="Configurações" icone={IconSetting}/>
               <MenuItem url="/notificacoes" texto="Notificação" icone={IconBell}/>
           </ul>
        </aside>
    )
}