function getKeycapsReducer(state = [], action) {
    if (action.type === 'SET_KEYCAPS') {
        return action.payload;
    }

    return state;
}

export default getKeycapsReducer;