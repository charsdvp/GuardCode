import { useState } from 'react'
// Nos ayudara a obtener el estado de los inputs
export const useFormInputs = (initialForms = {}) => {
  const [stateForm, setStateForm] = useState(initialForms)

  const handleClick = ({ target }) => {
    setStateForm({
      ...stateForm,
      // Modificaremos la propiedad seleccionada y su valor booleano
      [target.name]: target.checked
    })
  }
  // regresamos todos los estados y exponemos una funcion handleClick
  return {
    ...stateForm,
    handleClick
  }
}
