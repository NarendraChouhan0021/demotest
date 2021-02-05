import t from '../Action/Action';
const defaultState = {
    dishList: []
}


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case t.ADD_DISH:
            return {
                ...state,
                dishList: action.payload
            };

        default:
            return state;
    }
}

export default reducer;