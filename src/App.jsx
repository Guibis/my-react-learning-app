import { useState } from 'react'

export default function App() {
  const [mood, setMood] = useState("happy");

  return (
    <body style={{ backgroundColor: mood === 'Tired' ? 'gray' : 'green', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1>{mood}</h1>
      <button onClick={() => setMood("productive")}>Productive</button>
      <button onClick={() => setMood("Tired")}>Tired</button>
      <button onClick={() => setMood("Inspired")}>Inspired</button>
    </body>
  );
}
