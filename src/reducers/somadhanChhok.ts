import { SOMADHAN_CHHOKK } from '../actions/types';

const initialState: string[][] = new Array(15).fill("").map(() => new Array(15).fill(""));
// const drawMap: number[][] = new Array(15).fill(1).map(() => new Array(15).fill(1));
// const initialState: string[][] = new Array([]);

const somadhanMapReducer = (state: any = initialState, action: any) => {
    switch(action.type) {
        case SOMADHAN_CHHOKK:
            const { somadhanData } = action.payload;
            state = somadhanData;
            return state;
        default: 
            return initialState;
        // return initialState;
    }
}

export default somadhanMapReducer;