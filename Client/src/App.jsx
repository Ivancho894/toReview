import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Tarea from './pages/Tarea'
import TareaEdit from './pages/TareaEdit'
import TareaCreate from './pages/TareaCreate'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/tarea/:id" element={<Tarea />} />
        <Route path="/tarea/:id/edit" element={<TareaEdit />} />
        <Route path="/tarea/create" element={<TareaCreate />} />

      </Routes>   
    </div>
  )
}

export default App
