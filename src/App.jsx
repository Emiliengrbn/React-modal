import './App.css'
import {Modal} from '../lib/main'
import { useState } from 'react'

function App() {
  const [active, setActive] = useState(false)
  
  const handleSubmit = () => {
    setActive(true)
  }

  const close = () => {
    setActive(false)
}
  return (
    <>
        <button type="submit" onClick={handleSubmit}>Save</button>
        {active && 
          <Modal onClose={close} modalText="Employee created!"/>
        }
    </>
  )
}

export default App
