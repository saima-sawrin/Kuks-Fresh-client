import React, { useEffect, useState } from 'react';
import AllServices from './AllServices';

const AllCard = () => {
    const[services , setServices] = useState([]);

    useEffect(()=>{
       fetch('http://localhost:5000/allServices')
       .then(res => res.json())
       .then(data => setServices(data))
     },[])
    return (
        <div  className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 mx-10'>
        {
      services.map(service => <AllServices key={service.id} service={service}></AllServices>)
    }
        </div>
    );
};

export default AllCard;