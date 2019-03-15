export type ActionType = {
  type: 'SET' | 'ADD' | 'DELETE' | 'RESET',
  payload?: string
}

export type State = {
  name: string,
  hobbies: string[]
}

export const initialState: State = {
  name: '',
  hobbies: []
}

const reducer: React.Reducer<State, ActionType> = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState
    case 'SET':
      return {
        ...state,
        name: action.payload!
      }
    case 'ADD':
      return {
        name: '',
        hobbies: Array.from(new Set(state.hobbies.concat(state.name)))
      }
    case 'DELETE':
      return {
        ...state,
        hobbies: state.hobbies.filter(h => h !== action.payload)
      }
    default:
      return state
  }
}

export default reducer