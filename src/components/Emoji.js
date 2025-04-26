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
}

