import style from "./style.module.css"

function DisplayDifficulty(props) {
    return (
        <div className={style.container}>
            {props.difficulty ?  `Jeu en DifficultÃ© : ${props.difficulty}` : "Aucune difficultÃ© selectionnÃ©"}
        </div>
    )
}

export default DisplayDifficulty