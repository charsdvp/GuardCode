import { FormInputs } from './components/FormInputs'

function App () {
  return (
    <div className="container">
      <div className="container-content">
        <h1 className='container-title'>Generador de Contraseñas</h1>
        <p className='container-description'>Crea rápidamente contraseñas robustas y protege tus cuentas en línea. ¡Mantén tus datos seguros con GuardCode!</p>
      </div>
      <FormInputs />
      <footer className='footer'>
        <span>&copy; Error420</span>
        <ul className='footer-list'>
          <li className='footer-list-item'>
            <a href="https://www.facebook.com/profile.php?id=100087881793975" className='list-item-link' target='_blank' rel='noreferrer'>Facebook</a>
          </li>
          <li className='footer-list-item'>
            <a href="https://twitter.com/charsdvp" className='list-item-link' target='_blank' rel='noreferrer'>Twitter</a>
          </li>
          <li className='footer-list-item'>
            <a href="https://github.com/charsdvp/GuardCode" className='list-item-link' target='_blank' rel='noreferrer'>Github</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App
