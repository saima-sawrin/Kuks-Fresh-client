import React, { useState } from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import ClientReview from './Reviews/ClientReview';

const Details = () => {
    
    const {service_id,_id,title,img , price , rating , description , cReview} = useLoaderData();
   console.log(img)
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
<div className="container flex flex-col w-full max-w-lg p-12 mx-auto divide-y rounded-md divide-gray-700 bg-orange-500 text-gray-100">
<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{cReview[0].client}</h4>
				<span className="text-xs dark:text-gray-400">{cReview[0].time}</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">{cReview[0].rate}</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-100">
		<p>{cReview[0].review}</p>
	</div>
</div>
<div className="flex flex-col  p-8 shadow-sm rounded-xl lg:p-12  text-gray-900">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center  my-2">Your opinion matters!</h2>
		{/* <div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>
			<div className="flex space-x-3">
				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
			</div>
		</div> */}
		<div className="flex flex-col w-full">
			<textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900 border-2"></textarea>
            {/* <input type="text"  placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900 border-2 rows-3"/> */}
			<button type="button" className="py-4 my-8 uppercase font-semibold rounded-md text-gray-100 bg-orange-500 ">Leave feedback</button>
		</div>
	</div>
</div>

</div>
     </div>
    );
};

export default Details;