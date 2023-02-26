import React, { useContext, useState } from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ClientReview from './Reviews/ClientReview';

const Details = () => {
	const {user}= useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const {service_id,_id,title,img , price , rating , description } = serviceDetails;
    const handleReviewBtn = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = user?.email || 'unregistered';
        const review = form.review.value;

        const reviews = {
            name: name,
            email,
            img ,
            review,

        }
	}
    return (
     <div className='grid lg:grid-cols-2'>
  <div className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 mx-28">
  
  <div>
    
      <PhotoProvider>
<PhotoView src={img}>
<figure><img src={img} alt="food" className='object-cover w-full mb-4  sm:h-56 dark:bg-gray-500 rounded-md' /></figure>
</PhotoView>
</PhotoProvider>
      <h2 className="mb-1 text-xl font-semibold">{title}</h2>
   
      <p>{description}</p>
  </div>
  <div className="flex flex-wrap justify-between">
      <div className="space-x-2">
          
          <button type="button" className="flex items-center p-1 space-x-1.5">
       
              <FaDollarSign className='w-4 h-4'></FaDollarSign>
              <span>Price:{price}</span>
          </button>
      </div>
      <div className="flex space-x-2 text-sm dark:text-gray-400">
          
          <button type="button" className="flex items-center p-1 space-x-1.5">
         
              <FaStar className='w-8 text-orange-600'></FaStar>
              
              <span>{rating}</span>
          </button>

      </div>

  </div>
  
</div>
{/* review */}
<div >
<div className="container flex flex-col w-full max-w-lg p-12 mx-auto divide-y rounded-md divide-gray-700 border-orange-2 text-gray-800">
<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{serviceDetails?.cReview?.client}</h4>
				<span className="text-xs dark:text-gray-400">{serviceDetails?.cReview?.time}</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">{serviceDetails?.cReview?.rate}</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-100">
		<p>{serviceDetails?.cReview?.review }</p>
	</div>
</div>
<div className="flex flex-col  p-8 shadow-sm rounded-xl lg:p-12  text-gray-900">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center  my-2">Your opinion matters!</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>
			
		</div>
		<form onSubmit={handleReviewBtn}>
                <div className='grid grid-cols-1 gap-4'>
                    <input name='name' type="text" placeholder="name" className="input input-bordered w-full " required />
                    <input name='email' type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full " required />
                    <input name='img' type="text" placeholder="photoURL" defaultValue={user?.photoURL} className="input input-bordered w-full " required />

                </div>
                <textarea name='feedback' className="textarea mt-2 textarea-bordered h-24 w-full" placeholder="your review"></textarea>
                <input className='btn bg-orange-500 border-0' type="submit" value="Leave Feedback" />
            </form>
	</div>
</div>




</div>
     </div>
    );
};

export default Details;