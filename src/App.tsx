import React, { useReducer } from 'react'
import HobbyReducer, { initialState, State } from './HobbyReducer'
import HobbyInput from './components/HobbyInput'
import HobbiesList from './components/HobbiesList'

const App = () => {
  const [state, dispatch] = useReducer(HobbyReducer, initialState)

  return (
    <div>
      <HobbyInput
        name={state.name}
        dispatch={dispatch}
      />
      <HobbiesList
        hobbies={state.hobbies}
        dispatch={dispatch}
      />
    </div>
  )

}

export default App
