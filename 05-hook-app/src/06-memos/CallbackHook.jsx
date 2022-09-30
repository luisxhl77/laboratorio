import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // con argumentos
    const incrementFather = useCallback((value) => {
        setCounter( (c) => c + value );
    },[],)

    // sin argumentos
    // const incrementFather = useCallback(() => {
    //     setCounter( (value) => value + 1 );
    // },[],)
    

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
    <>

        <h1>usecallback Hook: { counter }</h1>
        <hr />
        
        <ShowIncrement increment = {incrementFather}/>
    </>
  )
}
