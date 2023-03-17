import React from 'react';
import { Link } from 'react-router-dom';

const State = () => {
    return (
        <div className='bg-rose-500 mx-6 banner rounded-lg'>
         
            <div className="p-6 py-4 bg-rose-500 text-gray-100 rounded-md">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			{/* <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
			  <br className='sm:hidden' />	21% Off
			</h2> */}
            <div className="flex flex-col justify-center m-8 text-center ">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full  border-zinc-300" src="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/16124fa2-3e44-4620-9791-0603483996ca.jpg" />
		
			</div>


			<div className="space-x-2 text-center py-2 lg:py-0">
				<h2  className="text-center text-2xl tracking-tighter font-bold">We Have 25 years Experience , Give better Quality Result </h2>
                <p>It is a long established fact that a reader will be distracted by the readable content</p>
				
			</div>
			<Link to='/services'  className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Contact Us</Link>
		</div>
	</div>
</div>
        </div>
    );
};

export default State;