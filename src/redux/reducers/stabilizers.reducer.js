function stabilizersReducer(state = [], action) {
    if (action.type === 'SET_STABILIZERS') {
        return action.payload;
    }

    return state;
}

export default stabilizersReducer;