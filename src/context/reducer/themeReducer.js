
import { TOGGLE_THEME } from '../actionType';
import  ThemeAction  from '../theme.action';


export const themeReducer = (state, action) =>{
    switch (action.type) {
        case TOGGLE_THEME:
            return{
                ...state,
                theme: ThemeAction
            }
        default : state;
    }
}
