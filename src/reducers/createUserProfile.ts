// const initialState: number = 0;
import { CREATE_USER_PROFILE } from '../actions/types';

const createUserProfileReducer = (state: any = {}, action: any) => {
    
    switch(action.type) {
        case CREATE_USER_PROFILE:
            const { profile } = action.payload;
            return profile;
        default: 
            return state;
    }
}

export default createUserProfileReducer;