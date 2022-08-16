
import { TOGGLE_THEME } from '../actionType';

export const themeReducer = (state, action) =>{
    switch (action.type) {
        case TOGGLE_THEME:
            return{
                ...state,
                theme: action.payload
            }
        default : 
        return state;
    }
}
