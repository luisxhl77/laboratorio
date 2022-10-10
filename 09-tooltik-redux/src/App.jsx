import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './store/slices/counter/counterSlice';

function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
      </div>
      <h1> { counter} </h1>
      <div className="card">
        <button type='button' onClick={ () => { dispatch( increment() ) }}>
          increment
        </button>
        <button type='button' onClick={ () => { dispatch( decrement() ) }}>
          decrement
        </button>
        <button type='button' onClick={ () => { dispatch( incrementByAmount(2) ) }}>
        increment By 2
        </button>
        <button type='button' onClick={ () => { dispatch( reset() ) }}>
          reset
        </button>
      </div>
    </div>
  )
}

export default App
