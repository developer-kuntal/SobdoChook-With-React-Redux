// const initialState: number = 0;
import { CURRENT_LOCATION_PATH } from '../actions/types';

const currentURIPathReducer = (state: string = '/', action: any) => {
    switch(action.type) {
        case CURRENT_LOCATION_PATH:
            const { uri } = action.payload;
            return uri;
        default: 
            return state;
    }
}

export default currentURIPathReducer;