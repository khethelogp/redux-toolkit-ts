import { call, put } from 'redux-saga/effects';
import { ResponseGenerator } from '../../models';
import { setUser } from '../../redux/userSlice';
import { requestGetUser } from '../requests/user';

export function* handleGetUser() {
  try {
    const response: ResponseGenerator = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser({ ...data }));
    // yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
