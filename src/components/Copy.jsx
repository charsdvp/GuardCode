import PropTypes from 'prop-types'
const setClipboard = (text) => {
  // Especifica el tipo de dato del contenido que se va a copiar (en este caso, texto plano).
  const type = 'text/plain'
  // Crea un nuevo objeto Blob que contiene el texto a copiar, con el tipo de datos especificado.
  const blob = new Blob([text], { type })
  // Crea un array de objetos ClipboardItem, cada uno con un tipo y el correspondiente Blob de datos.
  const data = [new ClipboardItem({ [type]: blob })]
  // Intenta escribir los datos en el portapapeles usando la API de Clipboard.
  navigator.clipboard.write(data)
    .then(() => {
      /* success */
      console.log('Copiado')
    },
    () => {
      /* failure */
      console.log('error')
    })
}
export const Copy = ({ password }) => {
  const handleClick = () => {
    setClipboard(password)
  }
  return (
    <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke='currentColor' fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
  )
}

Copy.propTypes = {
  password: PropTypes.string
}
