import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("white");

  const changeColor = () => {
    const colors = ["#ffadad", "#caffbf", "#9bf6ff", "#ffd6a5", "#bdb2ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px",
        transition: "0.5s",
      }}
    >
      <h1>🎨 Color Changer App</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;