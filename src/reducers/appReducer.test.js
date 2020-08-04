import reducer from './appReducer';

describe('app reducer', () => {
  it('sets a username with the SET_USERNAME action type', () => {
    const state = {
      username: null
    };

    const action = {
      type: 'SET_USERNAME',
      payload: 'jaimekinsley'
    };

    const newState = reducer(state, action);

    expect(newState.username).toEqual('jaimekinsley');
  });
});
