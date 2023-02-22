import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import style from "./style.module.css"

export default function MenuListItems({onItemClick, difficulty, isSelected}) {
    const [isHovered, setIsHovered] = useState(false);

    function getBackgroundColor () {
        if (isHovered) {
            return "#a5e9ff";
        }else if(isSelected) {
            return "#26baea";
        }else{
            return "#eff0ef"; 
        }
    }
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
