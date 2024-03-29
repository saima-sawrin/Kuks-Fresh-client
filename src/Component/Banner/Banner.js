import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';
import hero from '../../Asset/Hero.png';

const Banner = () => {
    return (
        <div className='bg-rose-500 mx-10 banner'>
         
            <div className="p-6 py-12 bg-rose-500 text-gray-100">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
			  <br className='sm:hidden' />	21% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! </span>
				
			</div>
			<Link to='/services'  className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Order Now</Link>
		</div>
	</div>
</div>
        </div>
    );
};

export default Banner;