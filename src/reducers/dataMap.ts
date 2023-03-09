import { CREATE_DATA_MAP } from '../actions/types';

const initialState: string[][] = new Array(15).fill("").map(() => new Array(15).fill(""));
// const drawMap: number[][] = new Array(15).fill(1).map(() => new Array(15).fill(1));

const dataMapReducer = (state: any = initialState, action: any) => {
    switch(action.type) {
        case CREATE_DATA_MAP:
            const {i, j, value} = action.payload;
            state[i][j] = value;
            return state;
        default: 
            return initialState;
        // return initialState;
    }
}

export default dataMapReducer;