import React, { useContext } from 'react'
import { HobbyContext } from '../HobbyProvider'

const HobbyInput = () => {
  const [state, dispatch] = useContext(HobbyContext)

  return (
    <div>
      <input
        value={state.name}
        onChange={(e) => dispatch({ type: 'SET', payload: e.currentTarget.value })}
      />
      <button onClick={() => dispatch({ type: 'ADD'})}>Add</button>
    </div>
  )
}

export default HobbyInput