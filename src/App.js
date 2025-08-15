import { useState } from "react";
import Songs from "./components/SongItem"; // adjust path if needed

export default function App() {
  const [songTitle, setSongTitle] = useState("Shape of You");

  return (
    <div>
      <Songs title={songTitle} />
      <button onClick={() => setSongTitle("Blinding Lights")}>
        Change Song
      </button>
    </div>
  );
}
