import "./App.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const fetchImages = async () => {
    const query = value.trim();

    if (!query) return;

    const response = await fetch(
      `https://api.unsplash.com/search/photos?client_id=XyKFcO9p5hqti23wVGCosztbknzkqZoI6SAeAkD0BT8&query=${encodeURIComponent(query)}&orientation=squarish`
    );

    const data = await response.json();
    console.log(data);
    setResults(data.results || []);
  };

  return (
    <div className="App">
      <div className="myDiv">
        <span>Search </span>

        <input
          style={{ width: "60%" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={fetchImages}>Search</button>
      </div>

      <div className="gallery">
        {results.map((item) => (
          <img
            className="item"
            key={item.id}
            src={item.urls.regular}
            alt={item.alt_description || "Unsplash image"}
          />
        ))}
      </div>
    </div>
  );
}

export default App;