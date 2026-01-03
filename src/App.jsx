import { useState, useEffect } from 'react'
import WelcomePage from './pages/welcomepage'
import UserPage from './pages/userPage'
import Button from './components/button'
import Specialbtn from './components/specialbtn'
import Counter from './components/counter'
import Clock from './components/clock'

import './App.css'

function App() {

  const [notLoggedIn, setNotLoggedIn]=useState(true)

  

  function show() {
    setNotLoggedIn(false)
  }
  function hide() {
    setNotLoggedIn(true)
  }

  useEffect(() => {
    
    const friends = setInterval(() => {
      
      setCount(prev => prev +1)
    }, 6000)
    return () => clearInterval(friends)
  }, [])

  const [count, setCount]=useState(8)
  
  const increment = () => {
          setCount(count + 1)
      }
  const decrement = () => {
          setCount(count -1)
      }
  

  return (
    <>
      
      {notLoggedIn ? <WelcomePage show={show}/> : <UserPage hide={hide}/>}
      {/* <div>
        <h1>React is live</h1>
        <Button Click={show} value={'Show'}/>
        <Button Click={hide} value={'Hide'}/>
      </div>
      <Specialbtn show={show} hide={hide}/>
      <Counter increment={increment} decrement={decrement} count={count}/>
      {count > 10 ? <WelcomePage/> : <p style={{fontSize:'16px', color:'black'}}>Keep adding to reach 10</p>}
      <Clock/> */}
    </>
  )
}

export default App
