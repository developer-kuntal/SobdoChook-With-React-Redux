import './css/DrawSobdoChhokSomadhan.css';
import React, { useEffect } from 'react';
import DrawSobdoChhokSomadhanCell from './DrawSobdoChhokSomadhanCell';
// import { RootStateOrAny, useSelector } from 'react-redux';

function DrawSobdoChhokSomadhan() {
  
  
  //   const ber: string = "5";
  // Initialize multidimetional array..
  // const drawMap: number[][] = new Array(15).fill(1).map(() => new Array(15).fill(1));
  // const dataMap: string[][] = new Array(15).fill("").map(() => new Array(15).fill(""));
  const cellList: any[] = [];
  //   sobdo[7][7] = 1;
  //   console.table(sobdo);
  useEffect(()=>{
    // console.table(drawMap);
    // console.table(cellNumberMap);
    // console.table(dataMap);
  });

  
  return (
    <div className="DrawSobdoChhokSomadhan">
      
      { (() => {
          let i: number = 0;
          for (let index = 0; index < 225; index++) {
              if(index !== 0 && index%15 === 0) {
                i++;
              }
              const cell = <DrawSobdoChhokSomadhanCell key={index} id={index} i={i} j={index%15}/>;
              cellList.push(cell);
          }
          return cellList;
        })()
      }

    </div>
  );
}

export default DrawSobdoChhokSomadhan;
