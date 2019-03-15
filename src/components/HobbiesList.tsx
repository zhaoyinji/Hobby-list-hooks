import React, { Dispatch } from 'react'
import { ActionType } from '../HobbyReducer'

type Props = {
  hobbies: string[],
  dispatch: Dispatch<ActionType>
}

const HobbiesList: React.FC<Props> = ({ hobbies, dispatch }) =>
  <ul>
    {hobbies.map(hobby => (
      <li key={hobby}>
        {hobby}
        <button onClick={() => dispatch({ type: 'DELETE', payload: hobby})}>Delete</button>
      </li>
    ))}
  </ul>

export default HobbiesList