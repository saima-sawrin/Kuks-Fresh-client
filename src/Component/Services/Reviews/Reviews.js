import React, { useEffect, useState } from 'react';
import Details from '../Details';
import MyReview from './MyReview';

const Reviews = () => {
    const[reviews , setReviews] = useState([]);
   
    
    useEffect(()=>{
       fetch('http://localhost:5000/allReview')
       .then(res => res.json())
       .then(data => setReviews(data))
     },[])

     const handleDelete = (event) =>{

     }
    return (
        <div>
        <h1 className='text-xl'>my reviews</h1>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Picture</th>
                        <th>Client Name</th>
                        <th>FeedBack</th>
                        <th>Rating</th>
                        <th>Edit</th>
                    
                    </tr>
                </thead>
                <tbody>
                 
 {
   reviews.map(rev => <MyReview key={rev._id} rev={rev}></MyReview>)
 }


                </tbody>

            </table>
        </div>
        
    </div>
    );
};

export default Reviews;