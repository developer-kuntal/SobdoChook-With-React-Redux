import { 
    INCREMENT, 
    DRAW_MAP, 
    CELL_NUMBER_MAP,
    CREATE_DATA_MAP,
    SOMADHAN_CHHOKK,
    CURRENT_LOCATION_PATH,
    CREATE_USER_PROFILE
} from './types';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const drawmap = (i: number = -1, j: number= -1, value: number= -1) => {
    return {
        type: DRAW_MAP,
        payload: {
            i,
            j,
            value
        }
    }
}

export const drawCellNumberMap = (i: number = -1, j: number= -1, value: string= "") => {
    return {
        type: CELL_NUMBER_MAP,
        payload: {
            i,
            j,
            value
        }
    }
}

export const createDataMap = (i: number = -1, j: number = -1, value: string =  "") => {
    return {
        type: CREATE_DATA_MAP,
        payload: {
            i,
            j,
            value
        }
    }
}

export const somadhanDataMap = ( somadhanData: string[][] =  new Array([]) ) => {
    return {
        type: SOMADHAN_CHHOKK,
        payload: {
            somadhanData
        }
    }
}

export const setcurrentURIPath = (uri: string) => {
    return {
        type: CURRENT_LOCATION_PATH,
        payload: {
            uri
        }
    }
}

export const createUserProfile = (profile: any) => {
    
    return {
        type: CREATE_USER_PROFILE,
        payload: {
            profile
        }
    }
}