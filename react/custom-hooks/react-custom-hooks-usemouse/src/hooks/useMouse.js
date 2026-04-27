import { useState } from "react";
import { useEffect } from "react";

export default function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    });
  }, []);

  return [position.x, position.y];
}
