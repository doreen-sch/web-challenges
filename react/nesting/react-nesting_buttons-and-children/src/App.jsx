import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>text 1</Button>
      <Button>text 2</Button>
      <Button>text 3</Button>
      <Button>text 4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
