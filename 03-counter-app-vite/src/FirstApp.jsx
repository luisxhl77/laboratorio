
const titulo = "VIAJE AL CENTRO DE LA TIERRA";
const numeros = [1,2,3,4,5,6,7,8,9]
const objeto = {
  nombre: "luis",
  edad: 23,
}

const {nombre, edad} = objeto;
const saludo = () => {
  return ("hola a todos");
}

export const FirstApp = () => {
  return (
    <>
      <h1>{titulo}</h1>
      <h2>{numeros}</h2>
      <h3>{JSON.stringify( objeto )}</h3>
      <h4>{nombre + " " + edad}</h4>
      <h5>{saludo()}</h5>
    </>
  )
}

