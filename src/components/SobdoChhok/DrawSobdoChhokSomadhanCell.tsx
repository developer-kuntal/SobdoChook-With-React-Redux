import './css/DrawSobdoChhokSomadhanCell.css';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { somadhanDataMap } from '../../actions';
import { gql, useQuery } from '@apollo/client';

const TODAYS_SOBDO_CHHOK = gql`
query {
	todayssobdoChook{
        _id
        sobdochhokcellType
        sobdochhokcellNumber
        sobdochhokcellData
	}
}
`;

function DrawSobdoChhokSomadhanCell(props: any) {
    
    let drawMap: number[][] = useMemo(()=>new Array([]),[]);
    let cellNumberMap: string[][] = useMemo(()=>new Array([]),[]);
    let dataMap: string[][] = useMemo(()=>new Array([]),[]);
    // const dataMap = useSelector((state: RootStateOrAny) => state.dataMap);
    const dispatch = useDispatch();

    const { loading, error,  data } = useQuery(TODAYS_SOBDO_CHHOK);

    // !loading && console.log("Data: ",sobdochhokcellType, sobdochhokcellNumber);
    if( !error && !loading ) {
        const { sobdochhokcellType, sobdochhokcellNumber, sobdochhokcellData } = data.todayssobdoChook;
        // console.log("Data: ",data,sobdochhokcellType, sobdochhokcellNumber);
        drawMap = sobdochhokcellType;
        cellNumberMap = sobdochhokcellNumber;
        dataMap = sobdochhokcellData;
        // console.log("Data: ",drawMap,cellNumberMap);
        dispatch(somadhanDataMap(dataMap));
    } else {
        drawMap = new Array(15).fill(1).map(() => new Array(15).fill(1));
        cellNumberMap = new Array(15).fill("").map(() => new Array(15).fill(""));
    }

    const somadhanMap = useSelector((state: any) => state.somadhanMap);
    const { id, i, j } = props;
    const [disabledState, setdisabledState] = useState(false);
    const [normalState, setnormalState] = useState(false);
    const [boxState, setboxState] = useState(false);
    const [cellNumber, setcellNumber] = useState("")
    // const [cellValue, setcellValue] = useState("");
    const isEmpty = somadhanMap[i][j] === undefined || somadhanMap[i][j] === '';
    // console.log(i,j,isEmpty, somadhanMap[i][j]);
    // console.table("DataMap: ",somadhanMap);

    useEffect(() => {
        drawMap[i][j] === 0 && setdisabledState(true);
        drawMap[i][j] === 1 && setnormalState(true);
        drawMap[i][j] === 2 && setboxState(true);
        setcellNumber(cellNumberMap[i][j]);
    },[i, j, drawMap, cellNumberMap, dispatch]);

    return(
        <div className='items item3'>
          <div className='sideLine3'>
          { normalState && (<input value={ !isEmpty ? somadhanMap[i][j] : "" } 
              disabled onChange={(e)=>e.target.value} id={'J'+id.toString()} className='items inputBox3' 
              placeholder={ !isEmpty ? somadhanMap[i][j] : cellNumber}></input>) }
          { disabledState && (<input value="" 
              disabled onChange={(e)=>e.target.value} id={'J'+id.toString()} className='items disable-inputBox3' 
              placeholder=""></input>)}
          { boxState && (<input value={ !isEmpty ? somadhanMap[i][j] : ""} 
              disabled onChange={(e)=>e.target.value} id={'J'+id.toString()} className='items box-inputBox3' 
              placeholder={ !isEmpty ? somadhanMap[i][j] : cellNumber }></input>)}
          </div>
      </div>
    );
}

export default DrawSobdoChhokSomadhanCell;