import React, { useState } from "react";
import "./styles.css";
import emojiDictionary from "./emojiDictionary";

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function changeInputHandler(e) {
    var meaning;

    meaning = emojiDictionary[e.target.value];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in the database, Will add soon";
    }
    if (e.target.value === "") {
      meaning = "";
    }
    setEmojiMeaning(meaning);
  }

  const emojiArray = Object.keys(emojiDictionary);

  function emojiClickHandler(item) {
    setEmojiMeaning(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <h2>Enter emoji in the searchbox to know it's meaning.</h2>

      <input onChange={changeInputHandler} />
      <h3>{emojiMeaning}</h3>

      <h5>Or click on below emojis to know their meaning...</h5>
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
    </div>
  );
}
