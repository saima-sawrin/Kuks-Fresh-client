import React from 'react';
import { Link } from 'react-router-dom';
import contact from '../../Asset/contact.svg';
const Contact = () => {
    return (
    //     <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-rose-500">
    //     <div className="flex flex-col justify-between">
    //         <div className="space-y-2">
    //             <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
    //             <div className="">Ask a Question</div>
    //         </div>
    //         <img src={contact} alt="" className="p-6 h-52 md:h-64 " />
    //     </div>
    //     <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
    //         <div>
    //             <label for="name" className="text-sm">Full name</label>
    //             <input id="name" type="text" placeholder="" className="w-full p-3 rounded border-2" />
    //         </div>
    //         <div>
    //             <label for="email" className="text-sm">Email</label>
    //             <input id="email" type="email" className="w-full p-3 rounded border-2" />
    //         </div>
    //         <div>
    //             <label for="message" className="text-sm">Message</label>
    //             <textarea id="message" rows="3" className="w-full p-3 rounded border-2"></textarea>
    //         </div>
    //         <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-rose-500 text-gray-900">Send Message</button>
    //     </form>
    // </div>
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
    {/* <a href=''  className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Contact Us</a> */}
    <button type="button" className="px-8 py-3 mt-2 font-semibold border rounded dark:border-gray-100 dark:text-gray-100  border">	  <a className="email-link " href="mailto:saimasawrin123@gmail.com" rel="" target="_blank">Contact  Us</a></button>

</div>
</div>
</div>
</div>
    );
};

export default Contact;