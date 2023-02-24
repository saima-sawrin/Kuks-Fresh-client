import React from 'react';
import hero from '../../Asset/Hero.png';

const Hero = () => {

        return (
            <div className=" relative mx-10">
            <img
              src={hero}
              className=" absolute inset-0 object-cover w-full h-full rounded-md "
              alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-0">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                  <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none  ">
                      Find Healthy  And <br/>
                     Favourite Foods
                     <br />
                      <span className="text-teal-accent-400">Near You</span>
                    </h2>
                    <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                      quae.
                    </p>
                    <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              See All Services
            </a>
            
          </div>
                  </div>
  
                
                       
                </div>
              </div>
            </div>
          </div>
        );
      };

export default Hero;