import './css/SobdoCellWithRedux.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { drawmap, drawCellNumberMap } from '../../actions';

function SobdoCellWithRedux(props: any) {
    
    const { id, i, j } = props;
    const [disabledState, setdisabledState] = useState(true);
    const [numberingState, setnumberingState] = useState(false);
    const [boxState, setboxState] = useState(false);
    const [cellNumber, setcellNumber] = useState("")
    // sobdo[7][7] = 1+1;
    // const drawMap = useSelector((state: RootStateOrAny) => state.drawMap);
    // const cellNumberMap = useSelector((state: RootStateOrAny) => state.cellNumberMap);
  // const counter = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch();

    useEffect(() => {
        // boxState ? drawMap[i][j] = 2 : (disabledState ? drawMap[i][j] = 1 : drawMap[i][j] = 0);
        boxState ? dispatch(drawmap(i,j,2)) : (disabledState ? dispatch(drawmap(i,j,1)) : dispatch(drawmap(i,j,0)));
        numberingState || boxState ? dispatch(drawCellNumberMap(i, j, cellNumber.trim())) : dispatch(drawCellNumberMap(i, j, "")) && setcellNumber("");
        // numberingState && setcellNumber("");
        // console.log(disabledState);
        // console.table(drawMap);
        // console.log(numberingState);
        // console.table(cellNumberMap);
    },[boxState, i, j, disabledState, numberingState, cellNumber, dispatch]); //,[boxState, drawMap, i, j, disabledState, numberingState, cellNumberMap, cellNumber]

    return(
        <div className='items item1'>
          <div className='sideLine'>
            {numberingState ? <input value={cellNumber} onChange={(e)=>setcellNumber(e.target.value)} 
              className='items numbering-inputBox' placeholder=''></input> : 
            ( boxState ? <input value={cellNumber} onChange={(e)=>setcellNumber(e.target.value)} 
              className='items box-inputBox' placeholder=''>
            </input> : disabledState ? <input value="" onChange={(e)=>e.target.value} 
              className='items inputBox' placeholder=''></input> : 
              <input value="" onChange={(e)=>e.target.value} disabled 
              className='items disable-inputBox' placeholder=''></input>)}
            <div className='items dm-item1'>
              {!numberingState && !boxState ? <input onChange={(e)=>setdisabledState(!e.target.checked)} 
                id={'A'+id.toString()} className='checkBox' type='checkbox'/> :
                <input onChange={(e)=>setdisabledState(!e.target.checked)} 
                id={'A'+id.toString()} disabled type='checkbox'/>}
              <label htmlFor={'A'+id.toString()}>D</label>
            </div>
            <div className='items dm-item2'>
            { disabledState && !numberingState ? <input value={cellNumber} onChange={(e)=>setboxState(e.target.checked)}
              id={'B'+id.toString()} className='checkBox' type='checkbox'/> :
              <input id={'B'+id.toString()} disabled type='checkbox'/> }
              <label htmlFor={'B'+id.toString()}>B</label>
            </div>
            <div className='items dm-item3'>
              { disabledState && !boxState ? <input onChange={(e)=>setnumberingState(e.target.checked)} 
                  id={'C'+id.toString()} className='checkBox' type='checkbox'/> :
                <input id={'C'+id.toString()} disabled type='checkbox'/> }
              <label htmlFor={'C'+id.toString()}>N</label>
            </div>
          </div>
      </div>
    );
}

export default SobdoCellWithRedux;