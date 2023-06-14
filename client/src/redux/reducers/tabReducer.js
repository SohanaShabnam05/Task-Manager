import * as actionTypes from '../action/type';


export const tabReducer = (state = actionTypes.ALL_TASKS, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_TAB:
            return action.selected
        default: 
            return state;
    }
}