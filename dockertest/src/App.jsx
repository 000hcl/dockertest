import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>number is {count}</h1>
      <button onClick={()=>setCount(count+1)}>add</button>
      <button onClick={()=>setCount(count-1)}>subtract</button>
      <button onClick={()=>setCount(0)}>reset to 0</button>

      <h2>version 2</h2>
    </>
  )
}

export default App
