import { createStore } from 'redux';

const INITIAL_STATE = {
  isVisible: false
};

function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { ...state, isVisible: !state.isVisble };
    default:
      return state;
  }
}

const store = createStore(modal);

export default store;