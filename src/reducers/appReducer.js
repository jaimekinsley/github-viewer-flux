export const initialState = {
  user: null,
  repos: []
};

export default function reducer(state, action) {
  switch(action.type){
    case 'SET_USERNAME':
      return { ...state, username: action.payload };

    case 'SET_USER_RESPONSE':
      return { ...state, user: action.payload };

    case 'SET_REPOS':
      return { ...state, repos: action.payload };

    default:
      return state;
  }
}
