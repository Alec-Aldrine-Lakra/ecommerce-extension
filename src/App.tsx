import "./App.css";
import { useState } from "react";
function App() {
  const [color, setColor] = useState<string>();
  const onClick = async () => {
    const [tab] = await chrome.tabs.query({ active: true });
    if (tab) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id as number },
        args: [color],
        func: (color) => {
          document.body.style.backgroundColor = color ?? "red";
        },
      });
    }
  };

  return (
    <>
      <div>
        <h1>My Extension {color}</h1>
      </div>
      <div className="card">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.currentTarget.value)}
        />
        <button onClick={onClick}>Click Me</button>
      </div>
    </>
  );
}

export default App;
