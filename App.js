import React,{useState} from 'react'
import "./styles.css"

const App = ()=>{

  let [score, setScore] = useState(0)



  return(
    <div>
      <h1 className="h1">Counter Web Applicaion</h1>
      <h2>The Value of score is</h2>
      <h1>{score}</h1>
      <div className="btn">
      <button onClick={()=>{(score<25) ? setScore(score+1) : ""}}>Increment</button>
      <button onClick={()=>{(score>0) ? setScore(score-1) : "" }}>Decrement</button>
      <button onClick={()=>{setScore(0)}}>Reset</button>
      </div>
    </div>
  )
}

export default App