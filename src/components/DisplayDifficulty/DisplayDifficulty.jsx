import style from "./style.module.css"

function DisplayDifficulty(props) {
    return (
        <div className={style.container}>
            {props.difficulty ?  `Jeu en Difficulté : ${props.difficulty}` : "Aucune difficulté selectionné"}
        </div>
    )
}

export default DisplayDifficulty