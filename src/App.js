import React, { useState } from "react";
import "./styles.css";
import emojiDictionary from "./emojiDictionary";

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");
  const [currentType, setCurrentType] = useState("smiley");

  let currentEmojiSet = emojiDictionary[currentType];

  function changeInputHandler(e) {
    var meaning;

    meaning = currentEmojiSet[e.target.value];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in the database, Will add soon";
    }
    if (e.target.value === "") {
      meaning = "";
    }
    setEmojiMeaning(meaning);
  }

  const emojiArray = Object.keys(currentEmojiSet);

  function emojiClickHandler(item) {
    setEmojiMeaning(currentEmojiSet[item]);
  }

  const emojiTypesArray = Object.keys(emojiDictionary);

  function changeTypeHandler(type) {
    setCurrentType(type);
    setEmojiMeaning("");
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="main-heading">Emoji Dictionary</h1>
        <h2 className="sub-heading">
          Enter emoji in the searchbox to know it's meaning.
        </h2>

        <input className="input-emoji" onChange={changeInputHandler} />
        <h3 className="emoji-meaning">" {emojiMeaning} "</h3>

        <h5 className="info">
          Or click on below emojis to know their meaning...
        </h5>
        <br />
        {emojiArray.map((item) => {
          return (
            <span
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              onClick={() => emojiClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
        <br />
        <br />
        {emojiTypesArray.map((type) => {
          return (
            <button onClick={() => changeTypeHandler(type)}>{type}</button>
          );
        })}
      </div>
    </div>
  );
}
