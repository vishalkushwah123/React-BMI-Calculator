import { useMemo } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [weight, setWeight] = useState(80)
  const [height, setHeight] = useState(180)

  function onWeightChange(e) {
    setWeight(e.target.value)
  }

  function onHeightChange(e) {
    setHeight(e.target.value)
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1)

  }, [weight, height])
  return (
    <main className='container'>
      <div className="box">
        <h1>BMI CALCULATOR</h1>
        <div className='input-section'>
          <p className='slider-output'>Weight : {weight} kg</p>
          <input className='input-slider' onChange={onWeightChange} type="range" step='1' min='40' max='200' />
          <p className='slider-output '>Height: {height} cm</p>
          <input type="range" onChange={onHeightChange} min='140' max='220' className='input-slider' />
        </div>
        <div className="output-section">
          <p>Your BMI is</p>
          <p className='output'>{output}</p>
        </div>
      </div>
    </main>
  )
}

export default App
