export const randomChars = (boxChars, rangeBar) => {
  let password = ''
  // Creamos un objeto donde la propiedad sera el tipo de caracter y como valor sera un string con todos los caracteres disponibles de esa propiedad
  const charsObject = {
    numeros: '0123456789',
    minusculas: 'abcdefghijklmnopqrstuvwxyz',
    mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    caracteres: '!@#$%^&*()-_+=[]{};:<>?,./'
  }
  // Recorremos el objeto que recibimos con los valores booleanos ejemplo { minusculas: true, mayusculas: false }
  for (const char in boxChars) {
    // Aqui validamos , si en el objeto que recibimos como parametro en la propiedad [char] en este caso la primer propiedad sera minusculas de nuestro objeto con valores booleanos (objeto que recibimos como parametro)
    if (boxChars[char] === true) {
      // De ser cierta esta condicion iremos sumando ahora las cadenas de string que tenemos como valor en nuestro objeto "charsObject" -> Solo se sumaran las que tengan un valor booleano true
      password += charsObject[char]
    }
  }
  let passwordFull = ''
  // Repetiremos el ciclo dependiendo de la longitud de la barra
  for (let i = 0; i < rangeBar; i++) {
    // Crearemos numeros aleatorios que nos serviran como indices
    const numRandom = Math.floor(Math.random() * password.length)
    // A nuestro string lo convertimos en array
    const charsPass = password.split('')
    // Agregamos cada caracter del arreglo "charsPass" en el indice "numRandom"
    passwordFull += charsPass[numRandom]
  }
  // Regresamos la contrasena final
  return passwordFull
}
