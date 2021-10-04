import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS } from '../src/reducers/todoType';


async function fetchUserFromAPI() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        console.log(data.results[0]);
        return { status: 1, content: data.results[0] }
    } catch (e) {
        console.log(e);
        return { status: 0, content: e.message }
    }
}
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {

    const result = yield call(fetchUserFromAPI);
    if(result.status===1){
        yield put({ type: FETCH_USERS_SUCCESS, user: result.content });
    }else{
        yield put({ type: FETCH_USERS_FAILURE, message: result.content });
    }

}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeEvery(FETCH_USERS, fetchUser);
}

export default mySaga;