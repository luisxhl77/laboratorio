import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({quote, author}) => {

  const pRef = useRef();
  const [boxzise, setBoxZise] = useState({ width:0, height:0});

  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect();
    setBoxZise({width, height})

  }, [quote])

  return (
    <>
      <blockquote className="blockquote - text-end"
        style={{display: 'flex'}}>
        <p ref={pRef} className="mb-1"> {quote} </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>WIDTH: {boxzise.width} HEIGHT: {boxzise.height}</code>
      <hr />
    </>
  )
}
