// src/content/contentScript.tsx
import { FC } from "react";
import { createRoot } from "react-dom/client";

// eslint-disable-next-line react-refresh/only-export-components
const MyContentUI: FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0.5rem",
        right: "0.5rem",
        zIndex: 999999,
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "1rem",
        fontSize: "16px",
      }}
    >
      <h3>Hello from a React Content Script!</h3>
    </div>
  );
};

(function injectUI() {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(<MyContentUI />);
})();
