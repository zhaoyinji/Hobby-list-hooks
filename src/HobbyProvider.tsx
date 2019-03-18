import React, { createContext, useReducer, Context, Dispatch, ExoticComponent } from 'react'
import HobbyReducer, { initialState, State, ActionType } from './HobbyReducer'

type ContextProps = [State, Dispatch<ActionType>]

export const HobbyContext: Context<ContextProps> = createContext({} as ContextProps)

const HobbyProvider: React.FC<any> = ({ children }) => {
  const contextValue = useReducer(HobbyReducer, initialState)
  return (
    <HobbyContext.Provider value={contextValue}>
      {children}
    </HobbyContext.Provider>
  );
}

export default HobbyProvider