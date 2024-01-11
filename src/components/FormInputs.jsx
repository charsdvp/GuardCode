import { useEffect, useState } from 'react'
import { useFormInputs } from '../hooks/useFormInputs'
import { randomChars } from '../helpers/randomChars'
import { Copy } from './Copy'
import { BtnRotate } from './BtnRotate'

export const FormInputs = () => {
  const [rangeBar, setRangeBar] = useState(0)
  const [password, setPassword] = useState('Selecciona una opción')
  // Desestructuramos los valores devueltos
  const { mayusculas, minusculas, caracteres, numeros, handleClick } = useFormInputs({
    mayusculas: false,
    minusculas: false,
    caracteres: false,
    numeros: false
  })
  // Creamos un objeto donde guardaremos los valores booleanos de vueltos por nuestro hook useFormInputs
  const boxChars = {
    mayusculas,
    minusculas,
    caracteres,
    numeros
  }
  // Actualizamos la longitud de la barra
  const handleActiveRange = (e) => setRangeBar(e.target.value)
  // Este efecto se ejecutara cada que cambie la longitud de la barra y alguna opcion del formulario
  useEffect(() => {
    if (!mayusculas && !minusculas && !caracteres && !numeros) return
    // Le pasamos los valores de vueltos por nuestro hook useFormInputs y la longitud de la barra
    setPassword(randomChars(boxChars, rangeBar))
  }, [rangeBar, mayusculas, minusculas, caracteres, numeros])

  return (
    <>
    <div className="container-inputs">
        <div className="content">
          <input type="text" disabled className='input-disabled' value={password} />
          <Copy password={password} />
          <BtnRotate setPassword={setPassword} boxChars={boxChars} rangeBar={rangeBar}/>
        </div>
        <div className="content">
          <input type="range" name="range" id="range" value={rangeBar} onInput={(e) => handleActiveRange(e)} min={0} max={100} />
          <span>{rangeBar}</span>
        </div>
      </div>
    <form className='container-form'>
        <div className="container-form-labels">
          <label htmlFor="mayusculas">Mayúsculas</label>
          <label htmlFor="minusculas">Minúsculas</label>
          <label htmlFor="caracteres">Caracteres</label>
          <label htmlFor="numeros">Números</label>
        </div>
        <div className="container-form-inputs">
          <input onClick={(e) => handleClick(e)} type="checkbox" name="mayusculas" id="mayusculas" value={mayusculas} />
          <input onClick={(e) => handleClick(e)} type="checkbox" name="minusculas" id="minusculas" value={minusculas} />
          <input onClick={(e) => handleClick(e)} type="checkbox" name="caracteres" id="caracteres" value={caracteres} />
          <input onClick={(e) => handleClick(e)} type="checkbox" name="numeros" id="numeros" value={numeros} />
        </div>
      </form>
      </>
  )
}
