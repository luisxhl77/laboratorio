import { useState } from "react"

export const CounterApp = () => {
    const [counter, setCounter] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 30,
    });
    const {counter1, counter2, counter3,} = counter;
  return (
    <>
      <h1>COUNTER1:{counter1}</h1>
      <h1>COUNTER2:{counter2}</h1>
      <h1>COUNTER3:{counter3}</h1>
      <hr />
      
      <button onClick={ () => setCounter({
        ...counter,
        counter1: counter1 + 1,
      })
      }>+1</button>
      <button onClick={ () => setCounter({
        ...counter,
        counter3: counter3 - 1
      })}>-1</button>
    </>
  )
}
