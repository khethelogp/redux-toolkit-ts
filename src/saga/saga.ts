import { takeEvery, takeLatest } from 'redux-saga/effects';
import { handleGetUser } from './handlers/user';
import { getUser } from '../redux/userSlice';

export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetUser);
}
