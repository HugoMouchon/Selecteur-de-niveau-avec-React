import { useState } from "react";
import style from "./style.module.css"

export default function MenuListItems({ onItemClick, difficulty, isSelected }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onClick={() => onItemClick(difficulty)}
            style={{
                backgroundColor: isHovered ? "#944B01" : "#eff0ef",
                color: isHovered ? "#fff" : "#944B01",
            }}
            className={style.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            Difficulté en : {difficulty}
        </div>
    );
}

