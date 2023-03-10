import MenuListItems from "../MenuListItems/MenuListItems";
import style from "./style.module.css";

export default function MenuList({ difficulty, onItemClick }) {

    const difficultÃ© = ["Bas", "Medium", "Haut", "Insane"];

    return (
        <div className={style.container}>
            {
                difficultÃ©.map((diff) => (
                    <MenuListItems
                        onItemClick={onItemClick}
                        difficulty={diff}
                        isSelected={difficulty === diff}
                    />
                ))
            }
        </div>
    );
}