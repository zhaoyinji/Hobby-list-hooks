import React, { useReducer } from 'react'
import HobbyInput from './components/HobbyInput'
import HobbiesList from './components/HobbiesList'
import HobbyProvider from './HobbyProvider'

const App = () =>
  <div>
    <HobbyProvider>
      <HobbyInput />
      <HobbiesList />
    </HobbyProvider>
  </div>

export default App
