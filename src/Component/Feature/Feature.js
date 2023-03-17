import React from 'react';
import img1 from '../../Asset/7.PNG';
import img2 from '../../Asset/8.PNG';
import img3 from '../../Asset/9.PNG';
import chef from '../../Asset/chef.jpg';
import burger from '../../Asset/burger.jpg';
import rest from '../../Asset/rest.jpg';


const Feature = () => {

            return (
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Our Feature
                    </p>
                  </div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                          width="52"
                          height="24"
                        />
                      </svg>
                      <span className="relative text-rose-500">Healthy & Improves</span>
                    </span>{' '}
                   Your Mood
                  </h2>
                  
                </div>
                <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
                 
                
                 
                
                    <div className="flex flex-col h-full">
                      <img
                        src={img1}
                        className="object-cover w-full h-48"
                        alt=""
                      />
                      <div className="flex-grow border border-t-0 rounded-b">
                       
                           <img
                        src={rest}
                        className="object-cover w-full h-48"
                        alt=""
                      />
                      </div>
                    </div>
                    <div className="flex flex-col h-full">
                      <img
                         src={img2}
                        className="object-cover w-full h-48"
                        alt=""
                      />
                      <div className="flex-grow border border-t-0 rounded-b">
                       
                           <img
                        src={chef}
                        className="object-cover w-full h-48"
                        alt=""
                      />
                      </div>
                    </div>
                    <div className="flex flex-col h-full">
                      <img
                        src={img3}
                        className="object-cover w-full h-48"
                        alt=""
                      />
                      <div className="flex-grow border border-t-0 rounded-b">
                       
                           <img
                        src={burger}
                        className="object-cover w-full h-48"
                        alt=""
                      />
                      </div>
                    </div>
                
                  
                </div>
               
              </div>
            );
          };

export default Feature;