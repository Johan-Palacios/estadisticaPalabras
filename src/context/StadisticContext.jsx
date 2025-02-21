import { createContext, useState } from 'react'
import { PropTypes } from 'prop-types'

const StadisticContext = createContext()

export const StadisticProvider = ({ children }) => {
  const [stadisticValues, setStadisticValues] = useState({})

  const updateStadistic = (newProps) => {
    setStadisticValues({ ...stadisticValues, ...newProps })
  }

  return (
    <StadisticContext.Provider value={{ stadisticValues, updateStadistic }}>
      {children}
    </StadisticContext.Provider>
  )
}

export default StadisticContext

StadisticProvider.propTypes = {
  children: PropTypes.element
}
