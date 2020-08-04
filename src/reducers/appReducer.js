export const initialState = {
  user: null
};

export default function reducer(state, action) {
  switch(action.type){
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
