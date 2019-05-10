const initialState = {
  inOrOut: 'in',
  page: ''
};

const TOGGLE_INOROUT = 'TOGGLE_INOROUT'

function reducer(state= initialState, action){
    
  switch(action.type){ 
    case TOGGLE_INOROUT :
      return Object.assign({}, state, {inOrOut: action.payload.inOrOut, page: action.payload.page})
    default:
      return state
  }
}

export function toggleInOrOut(inOrOut, page){
  return {
    type: TOGGLE_INOROUT,
    payload: {inOrOut, page}
  }
}

export default reducer