import { useState } from "react";
import "./Emoji.css";

const emojiList = [
  { emoji: "😀", name: "grinning" },
  { emoji: "😂", name: "joy" },
  { emoji: "😍", name: "heart eyes" },
  { emoji: "😎", name: "sunglasses" },
  { emoji: "😢", name: "crying" },
  { emoji: "👍", name: "thumbs up" },
  { emoji: "🔥", name: "fire" },
  { emoji: "❤️", name: "heart" },
  { emoji: "🎉", name: "party" },
];

function EmojiSearch() {
  const [search, setSearch] = useState("");

  const filteredEmojis = emojiList.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="emoji-container">
      <h1>Emoji Search 🔎</h1>
      <input
        type="text"
        placeholder="Search for an emoji..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="emoji-list">
        {filteredEmojis.map((e, index) => (
          <div key={index} className="emoji-item">
            <span className="emoji">{e.emoji}</span>
            <span className="emoji-name">{e.name}</span>
          </div>
        ))}
        {filteredEmojis.length === 0 && <p>No emojis found 😢</p>}
      </div>
    </div>
  );
}

export default EmojiSearch()