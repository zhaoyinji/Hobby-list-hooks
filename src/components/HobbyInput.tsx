import React, { Dispatch } from 'react'
import { ActionType } from '../HobbyReducer'

type Props = {
  name: string
  dispatch: Dispatch<ActionType>
}

const HobbyInput: React.FC<Props> = ({ name, dispatch }) =>
  <div>
    <input
      value={name}
      onChange={(e) => dispatch({ type: 'SET', payload: e.currentTarget.value })}
    />
    <button onClick={() => dispatch({ type: 'ADD'})}>Add</button>
  </div>

export default HobbyInput