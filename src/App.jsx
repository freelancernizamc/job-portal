import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#F9F9FF]">
      <Header></Header>
      <div className='md:min-h-[calc(100vh-141px)]'>
        <Outlet />

      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
