import './css/SobdoChook.css';
import React, { useEffect, useState } from 'react';
// import SobdoCellTest from './SobdoCellTest';
import SobdoCellWithRedux from './SobdoCellWithRedux';
import DrawSobdoChhok from './DrawSobdoChhok';
import { useSelector } from 'react-redux';
import { gql, useMutation, useQuery } from '@apollo/client';
// import { useMutation } from '@apollo/react-hooks';

const DRAW_SOBD_CHHOK = gql`
mutation createSobdoChhok($sobdochhokcellType: [[Int]], 
  $sobdochhokcellNumber: [[String]],$sobdochhokcellData: [[String]]){
  drawSobdoChhok(sobdochhokInput: {
    sobdochhokcelltype: $sobdochhokcellType,
    sobdochhokcellnumber: $sobdochhokcellNumber,
    sobdochhokcelldata: $sobdochhokcellData
  }) {
    sobdochhokcellType
    sobdochhokcellNumber
    sobdochhokcellData
  }
}`;

const UPDATE_SOBDO_CHHOK_DATA = gql`
mutation updateSobdoChhok($id: ID!, $sobdochhokcellData: [[String]]) {
  updateSobdoChhokData(sobdochhokInputData:{
    _id: $id,
    sobdochhokcelldata:$sobdochhokcellData
  }){
    _id
    sobdochhokcellType
    sobdochhokcellNumber
    sobdochhokcellData
  }  
}`;

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

function SobdoChhok() {

  const [ isPreview, setisPreview ] = useState(false);
  const [ isTodays, setisTodays ] = useState(false);
  const [ isPublished, setisPublished ] = useState(false);

  const sobdochhokcellType = useSelector((state: any) => state.drawMap);
  const sobdochhokcellNumber = useSelector((state: any) => state.cellNumberMap);
  const sobdochhokcellData = useSelector((state: any) => state.dataMap);

  
  // Initialize multidimetional array..
  // const drawMap: number[][] = new Array(15).fill(1).map(() => new Array(15).fill(1));
  // const cellNumberMap: string[][] = new Array(15).fill("").map(() => new Array(15).fill(""));
  const cellList: any[] = [];
  console.log("CT: ",sobdochhokcellType," CN: ",sobdochhokcellNumber," CD: ",sobdochhokcellData);
  //   sobdo[7][7] = 1;
  //   console.table(sobdo);
  // const ct: number[][] = [[0,0,0],[0,1,2,3],[9,8,7,6,5,4,]];
  // const cn: string[][] = [['B','I','R','D'],['E','Y','E']];
  // const cd: string[][] = [['T','E','S','T',' ','D','A','T','A'],[''],['','L']];
  const [updateSobdoChhok] = useMutation(UPDATE_SOBDO_CHHOK_DATA);
  const [createSobdoChhok] = useMutation(DRAW_SOBD_CHHOK);
  const { loading, error, data } = useQuery(TODAYS_SOBDO_CHHOK);

  if(!loading && !error) {
      console.log("SB Data: ", sobdochhokcellData);
  }

  const _id: any = data?.todayssobdoChook?._id;
  //  const _id = "62555d4f1d7444236cf1e031";
  console.log(data, _id);
  useEffect(() => {
    isPreview && !isPublished && createSobdoChhok({
      variables: {
          sobdochhokcellType,
          sobdochhokcellNumber,
          sobdochhokcellData: []
      },
      refetchQueries: [{
        query: TODAYS_SOBDO_CHHOK
      }]
    });
  
    isPublished && updateSobdoChhok({
      variables: {
        id: _id,
        sobdochhokcellData
      }
    });
    console.log("Preview/Publish Effect...");
  },[isPreview, isPublished]);

  // useEffect(()=>{
  //   console.log("Preview Effect...");
  // },[ isPreview ]);

  // useEffect(() => {
  //   console.log("Publish Effect...");
  // },[isPublished]);

  return (
    <div>
    <div className="SobdoChhok">
      
      { (() => {
          let i: number = 0;
          for (let index = 0; index < 225; index++) {
              if(index !== 0 && index%15 === 0) {
                i++;
              }
              
              // const cell = <SobdoCellTest key={index} id={index} drawMap={drawMap}
              //               cellNumberMap={cellNumberMap} i={i} j={index%15}/>;

              const cell = <SobdoCellWithRedux key={index} id={index} i={i} j={index%15}/>;

              cellList.push(cell);
          }
          return cellList;
        })()
      }
      <div>
        <button type='button' onClick={() => setisPreview((prevState) => !prevState)}>Preview</button>
        <button type='button' onClick={() => setisPublished(true)}>Publish</button>
        {/* <button type='button' onClick={() => setisTodays((prevState) => !prevState)}>Today's Chhok</button> */}
        {/* <button type='button' onClick={() => setisSubmit(true)}>  Submit</button> */}
      </div>
    </div>

    {/* <SobdoCellTest id="1" sobdo={sobdo}/> */}
    {/* <SobdoCellTest/>
      <SobdoCellTest/> */}
    
    <br />
    <br />
    <br /><br />
    <div>
     { isPreview && <DrawSobdoChhok/>}
    </div>
    <br />
    <br />
    </div>
  );
}

export default SobdoChhok;
