import MenuListItems from "../MenuListItems/MenuListItems";
import style from "./style.module.css";

export default function MenuList({ difficulty, onItemClick }) {
    return (
        <div className={style.container}>
            <MenuListItems onItemClick={onItemClick} difficulty="Bas" isSelected={difficulty == "Bas"} />
            <MenuListItems onItemClick={onItemClick} difficulty="Medium" isSelected={difficulty == "Medium"} />
            <MenuListItems onItemClick={onItemClick} difficulty="Haut" isSelected={difficulty == "Haut"}/>
            <MenuListItems onItemClick={onItemClick} difficulty="Insane" isSelected={difficulty == "Insane"}/>
        </div>
    );
}