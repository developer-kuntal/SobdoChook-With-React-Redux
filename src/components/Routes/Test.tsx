import './css/Test.css';
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import DrawSobdoChhokSomadhan from '../SobdoChhok/DrawSobdoChhokSomadhan';

const LIST_SOBDO_CHHOK = gql`
    query getSobdoChhokByLimitAndOffset($offset: Int, $limit: Int){
        sobdoChhok(offset:$offset,limit:$limit){
        _id
    }
}
`;

const PAGE_SIZE = 0;

const Test = () => {

    const [page,setPage] = useState(0);
    const { data, loading, error } = useQuery(LIST_SOBDO_CHHOK, {
        variables: {
            offset: page * PAGE_SIZE,
            limit: PAGE_SIZE
        },
        fetchPolicy: "no-cache"
    });
    // const { _id } = data?.sobdoChhok[page];
    // console.log(_id);
    console.log(data?.sobdoChhok?.map((item: any) => {
        console.log("ID: ",item._id)
    }));

    return (
        <div>
            <div className='sobdochhok-usqa'>
                <br/>
                <div className='side-by-side'>
                    <div className='list'>
                        <ul>Item1</ul>
                    </div>
                </div>
                <br/>
                <div className='sobdochhok-fill-up'>
                    <DrawSobdoChhokSomadhan/>
                </div>
                <div className='up-and-down'>
                    <ul>Item2</ul>
                </div>
                <br/>
            </div>
            <button disabled={!page} onClick={() => setPage(prev => prev-1)}>Previous</button>
            <span>Page {page+1}</span>
            <button onClick={() => setPage(prev => prev+1)}>Next</button>
            <br/><br/><br/><br/>
        </div>
    )
}

export default Test