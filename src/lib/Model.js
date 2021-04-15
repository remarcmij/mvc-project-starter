import Observable from './Observable.js';

function Model(initialState) {
  let state = { ...initialState };

  const observable = Observable();

  return {
    subscribe(listener) {
      observable.subscribe(listener);
    },
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
      observable.notify(state);
    },
  };
}

export default Model;
