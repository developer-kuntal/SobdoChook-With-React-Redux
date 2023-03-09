import { DRAW_MAP } from '../actions/types';

const initialState: number[][] = new Array(15).fill(1).map(() => new Array(15).fill(1));
// const drawMap: number[][] = new Array(15).fill(1).map(() => new Array(15).fill(1));

const drawMapReducer = (state: any = initialState, action: any) => {
    switch(action.type) {
        case DRAW_MAP:
            const {i, j, value} = action.payload;
            state[i][j] = value;
            return state;
        default: 
            return initialState;
        // return initialState;
    }
}

export default drawMapReducer;