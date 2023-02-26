import React from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({service}) => {
    const {service_id,_id,title,img , price , rating , description} = service;
    return (
        <div className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 ">
  
        <div>
            {/* <img src={img} alt="" className="object-cover w-full mb-4  sm:h-56 dark:bg-gray-500 rounded-md " /> */}
            <PhotoProvider>
      <PhotoView src={img}>
      <figure><img src={img} alt="foods"className="object-cover w-full mb-4  sm:h-56 dark:bg-gray-500 rounded-md " /></figure>
      </PhotoView>
    </PhotoProvider>
            <h2 className="mb-1 text-xl font-semibold">{title}</h2>
         
            <p>{
                  description.length > 100? <>{description.slice(0,100)+ '.......'}<Link to={`/service/${service_id}`}><b className='text-sm dark:text-gray-400'>Read more</b></Link></> :
                   description}</p>
        </div>
        <div className="flex flex-wrap justify-between">
            <div className="space-x-2">
                
                <button type="button" className="flex items-center p-1 space-x-1.5">
             
                    <FaDollarSign className='w-4 h-4'></FaDollarSign>
                    <span>{price}</span>
                </button>
            </div>
            <div className="flex space-x-2 text-sm dark:text-gray-400">
                
                <button type="button" className="flex items-center p-1 space-x-1.5">
               
                    <FaStar className='w-8'></FaStar>
                    
                    <span>{rating}</span>
                </button>

            </div>
   
        </div>
        <div className='bg-orange-500 text-white text-center py-3 rounded-md '>
      
       <Link to={`/services/${_id}`}><button className="bg-orange-500 ">See Details</button></Link>
        </div>
    </div>
    );
};

export default Service;