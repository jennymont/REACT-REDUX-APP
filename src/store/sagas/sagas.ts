import {all} from 'redux-saga/effects';

import {saga as User} from './user.saga';

export default function* RootSaga() {
  yield all([
    User(),
  ]);
}
