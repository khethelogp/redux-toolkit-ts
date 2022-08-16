import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../saga/saga';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

//! Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
//! Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
