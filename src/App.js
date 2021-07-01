import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
    const [color, setColor] = useState('')
    const [error,setError]=useState(false)
    const [list,setList]=useState(new Values('#f15025').all(10))

  let handleSubmit = (e)=>{
     e.preventDefault()
    try {
    let colors = new Values(color).all(10)
    setList(colors)
  
    } catch (error) {
      setError(true)
    }
  }
  return <>
  <section className="container">
    <h3>color generator</h3>
    <form  onSubmit={handleSubmit}>
      <input type="text" 
        name="color" 
        value={color}
        placeholder="#f15025" 
        onChange={(e)=>setColor(e.target.value)}
         // className={`${error? 'error':null}`}
         className={`${error&&'error'}`}
        />
      <button type="submit" className='btn'>submit</button>
    </form>
    
  </section>
  <section className='colors'>
  {list.map((color,index)=>{
     console.log(color);
     return <SingleColor key={index}  index={index} {...color}/>
  })}
  </section>
  </>
}

export default App
