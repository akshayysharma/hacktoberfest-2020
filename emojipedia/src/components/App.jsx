import React from "react";
import emojipedia from "../emojipedia.js";
import Entry from "./Entry.jsx";

function Item(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Item)}</dl>
      <footer>Naman Agarwal © 2020</footer>
    </div>
  );
}

export default App;
