// const initialState: number = 0;
import { INCREMENT } from '../actions/types';

const counterReducer = (state: number = 0, action: any) => {
    switch(action.type) {
        case INCREMENT:
            return state+1;
        case 'DECREMENT':
            return state-1;
        default: 
            return state;
    }
}

export default counterReducer;