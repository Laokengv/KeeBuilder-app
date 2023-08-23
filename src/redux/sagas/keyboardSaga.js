import { put, takeEvery } from 'redux-saga/effects';


function* fetchAllCases() {
    try {
        const response = yield fetch('/api/cases');
        if(!response.ok) {
            throw new Error("Network response was not OK");
        }
        const cases = yield response.json();
        yield put({ type: 'SET_CASES', payload: cases });
    } catch {
        console.log('get cases error');
    }
}

function* fetchAllKeycaps() {
    try {
        const response = yield fetch('/api/keycaps');
        if(!response.ok) {
            throw new Error("Network response was not OK");
        }
        const keycaps = yield response.json();
        yield put({ type: 'SET_KEYCAPS', payload: keycaps });
    } catch {
        console.log('get cases error');
    }
}

function* fetchAllStabilizers() {
    try {
        const response = yield fetch('/api/stabilizers');
        if(!response.ok) {
            throw new Error("Network response was not OK");
        }
        const stabilizers = yield response.json();
        yield put({ type: 'SET_Stabilizers', payload: stabilizers });
    } catch {
        console.log('get cases error');
    }
}

function* fetchAllSwitches() {
    try {
        const response = yield fetch('/api/switches');
        if(!response.ok) {
            throw new Error("Network response was not OK");
        }
        const switches = yield response.json();
        yield put({ type: 'SET_SWITCHES', payload: switches });
    } catch {
        console.log('get cases error');
    }
}

function* keyboardSaga() {
    yield takeEvery('FETCH_CASES', fetchAllCases);
    yield takeEvery('FETCH_KEYCAPS', fetchAllKeycaps);
    yield takeEvery('FETCH_STABILIZERS', fetchAllStabilizers);
    yield takeEvery('FETCH_SWITCHES', fetchAllSwitches);
}

export default keyboardSaga;