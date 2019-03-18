import React, { useContext } from 'react'
import { HobbyContext } from '../HobbyProvider'

const HobbiesList = () => {
  const [state, dispatch] = useContext(HobbyContext)
  return (
    <ul>
      {state.hobbies.map(hobby => (
        <li key={hobby}>
          {hobby}
          <button onClick={() => dispatch({ type: 'DELETE', payload: hobby})}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default HobbiesList