import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'
import UserAvatar from './UserAvatar'
import StatusBadge from './StatusBadge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <div className="cardUsers">
          <div className="cardUser">
            <MyButton label="Katherine Johnson" color="red" />
            <UserAvatar ImageURL="https://i.imgur.com/MK3eW3As.jpg" size={100} />
            <StatusBadge status="offline" />
          </div>
          <div className="cardUser">
            <MyButton label="Alan L. Hart" color="green" />
            <UserAvatar ImageURL="https://i.imgur.com/QIrZWGIs.jpg" size={100} />
            <StatusBadge status="online" />
          </div>
          <div className="cardUser">
            <MyButton label="Hedy Lamarr" color="orange" />
            <UserAvatar ImageURL="https://i.imgur.com/yXOvdOSs.jpg" size={100} />
            <StatusBadge status="away" />
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
