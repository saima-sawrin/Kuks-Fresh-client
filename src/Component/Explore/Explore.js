import React from 'react';

const Explore = () => {
    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-5 lg:max-w-xl sm:text-center">
          <h2 className="inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider text-orange-500 uppercase rounded-full bg-teal-accent-400">
           Explore More
          </h2>
       
        </div>
        <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-28 h-28 mb-2 rounded-full shadow"
              src="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/86e4415a-e5e8-4a24-97c9-8532d2566bff.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold uppercase">Comfort Food</p>
             
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-28 h-28 mb-2 rounded-full shadow"
              src="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/16124fa2-3e44-4620-9791-0603483996ca.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold uppercase">Quick and Easy</p>
             
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-28 h-28 mb-2 rounded-full shadow"
              src="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/d1a1cce4-fff7-4e33-849a-0fc1ebd32df1.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold uppercase">Community Picks</p>
              
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-28 h-28 mb-2 rounded-full shadow"
              src="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/94222592-5c99-4250-a9f6-5e8094ff1611.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold uppercase">International Eats</p>
              
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-28 h-28 mb-2 rounded-full shadow"
              src="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/2403943c-4248-481a-adfb-4a1f8ffc0242.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold uppercase">Bake</p>
              
            </div>
          </div>
         
        </div>
      </div>
    );
  };

export default Explore;


