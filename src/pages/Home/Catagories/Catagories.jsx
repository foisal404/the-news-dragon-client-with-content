import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Catagories = () => {
    // const {id}=useParams();
    const loader=useLoaderData();
    return (
        <div>
            {/* <h2>{id}</h2> */}
            {/* <h2>{loader.length}</h2> */}
            <h3>Dragon News Home</h3>
            {
                loader.map(load=><NewsCart key={load._id} data={load}></NewsCart>)
            }
        </div>
    );
};

export default Catagories;