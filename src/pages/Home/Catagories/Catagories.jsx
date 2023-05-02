import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Catagories = () => {
    const {id}=useParams();
    const loader=useLoaderData();

    const [nam,setNam]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/categories`)
        .then(res=>res.json())
        .then(data=>setNam(data))
    },[])
    console.log(nam);
    const categoryName=nam?.find(fi=>fi.id===id)
    console.log(categoryName);
    return (
        <div>
            {/* <h2>{id}</h2> */}
            {/* <h2>{loader.length}</h2> */}
            <h3>{categoryName?.name?categoryName.name:"Dragon News Home"}</h3>

            {
                loader.map(load=><NewsCart key={load._id} data={load}></NewsCart>)
            }
        </div>
    );
};

export default Catagories;