import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { getUserById, getUsers } from '../../utils/api';
import {
    changeLoading,
    setUserDetails,
    setUsersList,
    UserActionTypes,
    UserData,
} from '../reducers/user.reducers';

function* fetchUsers() {
  try {
    yield put(changeLoading(true));
    const response: AxiosResponse<any> = yield call(getUsers);
    
    yield put(setUsersList(response)); 
  } catch (error: any) {
    alert('Ocorreu um erro inesperado, tente novamente mais tarde')
  } finally {
    yield put(changeLoading(false));
  }
}

function* fetchUserById(action: { type: string; userId: number }) {
  try {
    yield put(changeLoading(true));
    const response: AxiosResponse<UserData> = yield call(getUserById, action.userId);

    yield put(setUserDetails(response));
  } catch (error: any) {
    alert('Ocorreu um erro inesperado, tente novamente mais tarde')
     window.location.href = '/'
  } finally {
    yield put(changeLoading(false));
  }
}

export function* saga() {
  yield takeLatest(UserActionTypes.FETCH_USERS_REQUEST, fetchUsers);
  yield takeLatest(UserActionTypes.FETCH_USER_BY_ID_REQUEST, fetchUserById);

}
