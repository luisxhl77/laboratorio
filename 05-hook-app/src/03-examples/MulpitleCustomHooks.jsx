import { LoadingQuote } from "../componenets/LoadingQuote";
import { Quote } from "../componenets/Quote";
import { useFetch, useCounter } from "../hooks";

export const MulpitleCustomHooks = () => {

    const {counter,increment,decrement,reset,} = useCounter(1)

    const { data, isLoading, hasError} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    
    const { author, quote } = !!data && data[0]; //si la data tiene un valor entonces toma los datos de la posicion 0
   
   
    return (
        <>
            <h1>BreakingBad Qoutes</h1>
            <hr />

            {
                (isLoading) ? (
                    <LoadingQuote/>  // mostrar pestaña de carga
                ) : (
                    <Quote quote={quote} author={author}/> //mostrar busqueda
                )
            }


            <button className="btn btn-primary" onClick={() =>increment(1)} disabled={isLoading}>next quote</button>
            <button className="btn btn-primary" onClick={() =>decrement(1)} disabled={isLoading}>back quote</button>
            <button className="btn btn-primary" onClick={reset} disabled={isLoading}>reset quote</button>

        </>
    )
}
