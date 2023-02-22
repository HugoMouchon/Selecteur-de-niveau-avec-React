import { useState } from "react";
import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty"
import MenuList from "./components/MenuList/MenuList";
import style from "./style.module.css";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  function updateDifficulty(difficulty) {
    setCurrentDifficulty(difficulty)
  }

  return (
    <div>
      <h1 className={style.title}>Selection du niveau de difficulté</h1>
      <div className={style.workspace}>
        <MenuList
          onItemClick={updateDifficulty}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}