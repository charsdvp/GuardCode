import PropTypes from 'prop-types'
import { randomChars } from '../helpers/randomChars'

export const BtnRotate = ({ setPassword, boxChars, rangeBar }) => {
  const handleClick = () => {
    const password = randomChars(boxChars, rangeBar)
    setPassword(password)
  }
  return (
    <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className="icon-rotate icon icon-tabler icon-tabler-rotate-clockwise" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" /></svg>
  )
}
BtnRotate.propTypes = {
  setPassword: PropTypes.func,
  boxChars: PropTypes.object,
  rangeBar: PropTypes.any
}
