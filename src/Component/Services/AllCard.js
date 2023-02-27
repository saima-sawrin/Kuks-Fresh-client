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
    <div>
        <h2 className='text-4xl font-bold text-orange-500 text-center uppercase '>WHAT WE'RE CRAVING</h2>
        <div  className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 mx-10'>
         
        {
      services.map(allService => <AllServices key={allService._id} service={allService}></AllServices>)
    }
        </div>
    </div>
    );
};

export default AllCard;