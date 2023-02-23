import MenuListItems from "../MenuListItems/MenuListItems";
import style from "./style.module.css";

export default function MenuList({ difficulty, onItemClick }) {

    const difficulté = ["Bas", "Medium", "Haut", "Insane"];

    return (
        <div className={style.container}>
            {
                difficulté.map((diff) => (
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