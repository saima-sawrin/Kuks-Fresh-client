import React from 'react';

const Cook = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/54/08/Guds7V0TTXClsP9bRv24_0S9A0744.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl uppercase">HOW TO COOK PERFECT PORK TENDERLOIN</h3>
                    <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                    <p>Pork tenderloin is a foolproof way to feed a crowd family-style. Roasting this tender cut of meat in the oven with a handful of herbs and spices creates the perfect show-stopping centerpiece for your table.</p>
                </div>
            </a>
         
        </div>
    </section>
    );
};

export default Cook;