import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setcoords] = useState({x: 0, y: 0});

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            //const coords = ;
            //console.log(coords);
            setcoords({x, y});
        }

        window.addEventListener('mousemove', onMouseMove)
        
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }

    }, [])
    
    const {x, y} = coords;
  
    return (
        <>
            <h3>usuario ya existe</h3>
            <h3>x {x} y {y}</h3>
            <h3>{JSON.stringify(coords)}</h3>

        </>
    )
}
