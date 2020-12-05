import { combineReducers } from 'redux';

const INITIAL_STATE = {
    score: 250
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_POINTS':
            state.score += action.payload;
            return { score: state.score };
        default:
            return state
    }
};

export default combineReducers({
    reducer: reducer,
});
