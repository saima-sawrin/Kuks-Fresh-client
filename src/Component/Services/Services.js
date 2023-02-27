import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AllServices from './AllServices';
import Service from './Service';
const Services = () => {
    const[services , setServices] = useState([]);

    useEffect(()=>{
       fetch('http://localhost:5000/services')
       .then(res => res.json())
       .then(data => setServices(data))
     },[])
	
  
    return (
        <div id='services' className="container flex flex-col justify-center p-4 mx-auto ">
  

<h2 className='text-4xl font-bold text-orange-500 text-center uppercase '>Top Recipes</h2>
<div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 mx-10'>
 {
   services.map(service => <Service key={service._id} service={service}></Service>)
 }
</div>
<div  className='bg-orange-500 flex justify-center mt-6 rounded-md lg:mx-48 '>
     <Link to='/services'><button className=" text-white  text-lg text-center border-0  my-3  bg-orange-500 ">View All</button></Link>
     </div>

 </div>
);
};


export default Services;