function casesReducer(state = [], action) {
    if (action.type === 'SET_CASES') {
        return action.payload;
    }

    return state;
}

export default casesReducer;




