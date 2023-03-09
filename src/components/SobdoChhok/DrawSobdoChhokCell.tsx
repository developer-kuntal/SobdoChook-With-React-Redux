import './css/DrawSobdoChhokCell.css';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDataMap, somadhanDataMap } from '../../actions';
// import { gql, useQuery } from '@apollo/client';

// const TODAYS_SOBDO_CHHOK = gql`
// query {
// 	todayssobdoChook{
//         _id
//         sobdochhokcellType
//         sobdochhokcellNumber
//         sobdochhokcellData
// 	}
// }
// `;

function DrawSobdoChhokCell(props: any) {
    
    // let drawMap: number[][] = useMemo(()=>new Array([]),[]);
    // let cellNumberMap: string[][] = useMemo(()=>new Array([]),[]);

    const drawMap = useSelector((state: any) => state.drawMap);
    const cellNumberMap = useSelector((state: any) => state.cellNumberMap);
    const dispatch = useDispatch();

    // const { loading, error,  data } = useQuery(TODAYS_SOBDO_CHHOK);

    // !loading && console.log("Data: ",sobdochhokcellType, sobdochhokcellNumber);
    // if( !error && !loading ) {
    //     const { sobdochhokcellType, sobdochhokcellNumber } = data.todayssobdoChook;
    //     console.log("Data: ",sobdochhokcellType, sobdochhokcellNumber);
    //     drawMap = sobdochhokcellType;
    //     cellNumberMap = sobdochhokcellNumber;
    //     // console.log("Data test: ",drawMap,cellNumberMap);
    //     // dispatch(somadhanDataMap(dataMap));
    // } else {
    //     drawMap = new Array(15).fill(1).map(() => new Array(15).fill(1));
    //     cellNumberMap = new Array(15).fill("").map(() => new Array(15).fill(""));
    // }

    const { id, i, j } = props;
    const [disabledState, setdisabledState] = useState(false);
    const [normalState, setnormalState] = useState(false);
    const [boxState, setboxState] = useState(false);
    const [cellNumber, setcellNumber] = useState("")
    const [cellValue, setcellValue] = useState("");

    useEffect(() => {
        drawMap[i][j] === 0 && setdisabledState(true);
        drawMap[i][j] === 1 && setnormalState(true);
        drawMap[i][j] === 2 && setboxState(true);
        setcellNumber(cellNumberMap[i][j]);
        dispatch(createDataMap(i, j, cellValue.trim()));
        // console.table(dataMap);
    },[i, j, drawMap, cellNumberMap, cellValue, dispatch]);

    return(
        <div className='items item2'>
          <div className='sideLine2'>
          { normalState && (<input value={cellValue} onChange={(e)=>setcellValue(e.target.value)} 
              id={'I'+id.toString()} className='items inputBox2' placeholder={cellNumber}></input>) }
          { disabledState && (<input value={cellValue} disabled onChange={(e)=>e.target.value} 
              id={'I'+id.toString()} className='items disable-inputBox2' placeholder=""></input>)}
          { boxState && (<input value={cellValue} onChange={(e)=>setcellValue(e.target.value)} 
              id={'I'+id.toString()} className='items box-inputBox2' placeholder={cellNumber}></input>)}
          </div>
      </div>
    );
}

export default DrawSobdoChhokCell;