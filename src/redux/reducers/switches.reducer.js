function switchesReducer(state = [], action) {
    if (action.type === 'SET_SWITCHES') {
        return action.payload;
    }

    return state;
}

export default switchesReducer;