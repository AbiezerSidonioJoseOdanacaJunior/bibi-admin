import { IconBell, IconHome, IconSetting } from "../icons/Index";
import MenuItem from "./MenuItem";

interface SideBarProps {

}

export default function SideBar() {
    return (
        <aside>
           <ul>
               <MenuItem url="/" texto="Início" icone={IconHome}/>
               <MenuItem url="/config" texto="Configurações" icone={IconSetting}/>
               <MenuItem url="/bell" texto="Notificação" icone={IconBell}/>
           </ul>
        </aside>
    )
}