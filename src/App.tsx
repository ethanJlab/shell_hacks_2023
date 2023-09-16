import { useState } from 'react'
import StepperComponent from './components/StepperComponent'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StepperComponent />
    </>

  )
}

export default App
