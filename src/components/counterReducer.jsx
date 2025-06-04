const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + 1}
        
        case 'decrement':
            return {...state, count: state.count - 1}
        
        case 'addTen':
            return {...state, count: state.count + 10}

        case 'minusTen':
            return {...state, count: state.count - 10}
        
        case 'custom':
            return {...state, count: state.count + action.payload}
        
        case 'reset':
            return {...state, count: 0}

        default:
            return state;
    }
}

export default reducer;