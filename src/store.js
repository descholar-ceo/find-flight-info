import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers';

/** FUNCTIONS TO MAKE OUR STATE PERSIST SO IT WILL NOT GET LOST ON REFRESH */
const saveToLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
};

const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem('state');
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
};

const initialState = loadFromLocalStorage();
const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)),
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
