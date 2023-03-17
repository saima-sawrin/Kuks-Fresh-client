import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import ClientRevs from './ClientRevs';

const ClientReview = ({serviceDetails}) => {
    const[reviews , setReviews] = useState([]);
   
    const { user } = useContext(AuthContext);
    useEffect(()=>{
       fetch('https://kuks-fresh-server-side.vercel.app/allReview')
       .then(res => res.json())
       .then(data => setReviews(data))
     },[user?.email])

    return (
  
<div className="container flex flex-col w-full max-w-lg p-12 mx-auto divide-y rounded-md divide-gray-700 border-orange-2 text-gray-800">

{
	reviews.map(rev => <ClientRevs key={rev._id}rev={rev}></ClientRevs>)
}
{/* {
	reviews.filter(rev => rev.item === serviceDetails.title)
} */}




</div>
    );
};

export default ClientReview;