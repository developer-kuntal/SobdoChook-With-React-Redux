import './SobdoChhok.css';
import React, { useEffect } from 'react';

function SobdoChhok() {
//   const ber: string = "5";
// Initialize multidimetional array..
  const sobdo: number[][] = new Array(15).fill(0).map(() => new Array(15).fill(0));
  // sobdo.append(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
  sobdo[7][7] = 1;
  useEffect(()=>{
    console.table(sobdo);
  });

  return (
    <div className="SobdoChhok">
      
      {/* <div className='items item1'>0%0</div>
      <div className='items item1'>0%1</div>
      <div className='items item1'>0%2</div>
      <div className='items item1'>0%3</div>
      <div className='items item1'>0%4</div>
      <div className='items item1'>0%5</div>
      <div className='items item1'>0%6</div>
      <div className='items item1'>0%7</div>
      <div className='items item1'>0%8</div>
      <div className='items item1'>0%9</div>
      <div className='items item1'>0%10</div>
      <div className='items item1'>0%11</div>
      <div className='items item1'>0%12</div>
      <div className='items item1'>0%13</div>
      <div className='items item1'>0%14</div> */}
      {/* <div className='items item1'>
         
         <div className='sideLine'>
            <input className='items inputBox' placeholder='অক্ষর'>

            </input>
            <div className='items dm-item1'>A</div>
            <div className='items dm-item2'>B</div>
            <div className='items dm-item3'>C</div>
          </div>
          
          
      </div>
      <div className='items item1'>
        <div className='sideLine'>
        <input className='items inputBox' placeholder=''>

        </input>
            <div className='items dm-item1'>A</div>
            <div className='items dm-item2'>B</div>
            <div className='items dm-item3'>C</div>
        </div>
      </div> */}
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check1' className='checkBox' type='checkbox'/>
              <label htmlFor="check1">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check2' className='checkBox' type='checkbox'/>
              <label htmlFor="check2">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check3' className='checkBox' type='checkbox'/>
              <label htmlFor="check3">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check4' className='checkBox' type='checkbox'/>
              <label htmlFor="check4">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check5' className='checkBox' type='checkbox'/>
              <label htmlFor="check5">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check6' className='checkBox' type='checkbox'/>
              <label htmlFor="check6">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check7' className='checkBox' type='checkbox'/>
              <label htmlFor="check7">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check8' className='checkBox' type='checkbox'/>
              <label htmlFor="check8">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check9' className='checkBox' type='checkbox'/>
              <label htmlFor="check9">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check10' className='checkBox' type='checkbox'/>
              <label htmlFor="check10">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check11' className='checkBox' type='checkbox'/>
              <label htmlFor="check11">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check12' className='checkBox' type='checkbox'/>
              <label htmlFor="check12">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check13' className='checkBox' type='checkbox'/>
              <label htmlFor="check13">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check14' className='checkBox' type='checkbox'/>
              <label htmlFor="check14">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check15' className='checkBox' type='checkbox'/>
              <label htmlFor="check15">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check16' className='checkBox' type='checkbox'/>
              <label htmlFor="check16">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check17' className='checkBox' type='checkbox'/>
              <label htmlFor="check17">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check18' className='checkBox' type='checkbox'/>
              <label htmlFor="check18">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check19' className='checkBox' type='checkbox'/>
              <label htmlFor="check19">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check20' className='checkBox' type='checkbox'/>
              <label htmlFor="check20">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check21' className='checkBox' type='checkbox'/>
              <label htmlFor="check21">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check22' className='checkBox' type='checkbox'/>
              <label htmlFor="check22">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check23' className='checkBox' type='checkbox'/>
              <label htmlFor="check23">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check24' className='checkBox' type='checkbox'/>
              <label htmlFor="check24">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check25' className='checkBox' type='checkbox'/>
              <label htmlFor="check25">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check26' className='checkBox' type='checkbox'/>
              <label htmlFor="check26">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check27' className='checkBox' type='checkbox'/>
              <label htmlFor="check27">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check28' className='checkBox' type='checkbox'/>
              <label htmlFor="check28">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check29' className='checkBox' type='checkbox'/>
              <label htmlFor="check29">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check30' className='checkBox' type='checkbox'/>
              <label htmlFor="check30">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check31' className='checkBox' type='checkbox'/>
              <label htmlFor="check31">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check32' className='checkBox' type='checkbox'/>
              <label htmlFor="check32">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check33' className='checkBox' type='checkbox'/>
              <label htmlFor="check33">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check34' className='checkBox' type='checkbox'/>
              <label htmlFor="check34">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check35' className='checkBox' type='checkbox'/>
              <label htmlFor="check35">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check36' className='checkBox' type='checkbox'/>
              <label htmlFor="check36">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check37' className='checkBox' type='checkbox'/>
              <label htmlFor="check37">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check38' className='checkBox' type='checkbox'/>
              <label htmlFor="check38">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check39' className='checkBox' type='checkbox'/>
              <label htmlFor="check39">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check40' className='checkBox' type='checkbox'/>
              <label htmlFor="check40">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check41' className='checkBox' type='checkbox'/>
              <label htmlFor="check41">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check42' className='checkBox' type='checkbox'/>
              <label htmlFor="check42">C</label>
            </div>
          </div>
      </div>
      <div className='items item1'>
          <div className='sideLine'>
            <input className='items inputBox' placeholder=''>

            </input>
            <div className='items dm-item1'>
              <input id='check43' className='checkBox' type='checkbox'/>
              <label htmlFor="check43">A</label>
            </div>
            <div className='items dm-item2'>
              <input id='check44' className='checkBox' type='checkbox'/>
              <label htmlFor="check44">B</label>
            </div>
            <div className='items dm-item3'>
              <input id='check45' className='checkBox' type='checkbox'/>
              <label htmlFor="check45">C</label>
            </div>
          </div>
      </div>
    </div>
  );
}

export default SobdoChhok;
