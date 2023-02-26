import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Asset/Kuks FresH.png';
import hero from '../../Asset/Hero.png';
import { AuthContext } from '../../context/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user , LogOut} = useContext(AuthContext);
	// console.log(user)

	const handleLogOut =()=>{
		LogOut()
		.then(()=>{})
		.catch(error => console.error(error))
	  }
    return (
       
                    <div className='text-orange-500 py-6'>
                        {/* Navbar Started */}
                          <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-orange-500 ">
                        <div className="relative flex items-center justify-between nav text-orange-500">
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                          >
                           
                             <img src={logo} alt="" className='w-24' />
               
                            
                          </a>
                          <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                              <Link
                                to="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                           Home
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/services"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                              Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="/blog"
                                aria-label="Product pricing"
                                title="blog"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                             Blog
                              </a>
                            </li>
                            <>
            {
              user?.uid ?
              <div className="items-center flex-shrink-0 hidden lg:flex "> 
                  <button><Link className='mr-3 font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400' to='/addServices'>Add Services</Link></button>
                  <button><Link className='mr-3 font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400' to='/myReview'>My Review</Link></button>
				  <button className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400" onClick={handleLogOut}>Log out</button>
				  
              </div>
              :
              <div  className="items-center flex-shrink-0 hidden lg:flex text-white">
                 <Link to='/login'><button className="self-center font-medium px-8 py-3 rounded bg-orange-500 ">Sign in</button></Link>
                  <Link className='text-decoration-none font-medium mx-3' to='/signup'><button className="self-center px-8 py-3  rounded bg-orange-500 dark:text-gray-900">Sign up</button></Link>
              </div>
          }
		  <div div className="items-center flex-shrink-0 hidden lg:flex">
		  {user?.photoURL?
		                
						<img src={user.photoURL} alt="" title= {user.displayName} className="w-10 mx-auto rounded-full dark:bg-gray-500 aspect-square" />

				   
						  : <FaUser></FaUser>
					  }</div>
          </>
                            {/* <li>
                              <a
                                href="/login"
                                aria-label="Login"
                                title="Login"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                               Login
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-orange-500 text-white bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none "
                                aria-label="Sign up"
                                title="Sign up"
                              >
                                Sign up
                              </a>
                            </li> */}
                          </ul>
                          <div className="lg:hidden ">
                            <button
                              aria-label="Open Menu"
                              title="Open Menu"
                              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline focus:bg-deep-purple-50"
                              onClick={() => setIsMenuOpen(true)}
                            >
                              <svg className="w-5 " viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                              </svg>
                            </button>
                            {isMenuOpen && (
                              <div className=" absolute pl-5 top-0 right-0 w-4/7">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                  <div className="flex items-center justify-between mb-4">
                                    <div>
                                      <a
                                        href="/"
                                        aria-label="Company"
                                        title="Company"
                                        className="inline-flex items-center"
                                      >
                                      
                                        <img src={logo} alt="" className='w-24' />
                                       
                                      </a>
                                    </div>
                                    <div>
                                      <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="  lg:flex p-2 -mt-2  transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                          <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <nav>
                                    <ul className="space-y-4">
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Home
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/services"
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                         Services
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/blog"
                                          aria-label="Product pricing"
                                          title="Product pricing"
                                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Blog
                                        </a>
                                      </li>
                                      
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="login"
                                          title="login"
                                          className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Login
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/"
                                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide   transition duration-200 rounded shadow-md bg-deep-purple-accent-400 bg-orange-500 text-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                          aria-label="Sign up"
                                          title="Sign up"
                                        >
                                          Sign up
                                        </a>
                                      </li>
                                    </ul>
                                  </nav>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

       
        </div>
    );
};

export default Nav;