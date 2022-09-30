import { memo } from "react"
//momerize
export const Small = memo(({ value }) => {

  console.log('me volvi a dibujar :(') //-> solo se vuelve a dibujar si es modificado el componente 
  
  return (
    <small>{ value }</small>
  )
})