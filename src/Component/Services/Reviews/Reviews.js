import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Details from '../Details';
import MyReview from './MyReview';

const Reviews = () => {
    const[reviews , setReviews] = useState([]);
   
    const { user } = useContext(AuthContext);
    useEffect(()=>{
       fetch('https://kuks-fresh-server-side.vercel.app/allReview')
       .then(res => res.json())
       .then(data => setReviews(data))
     },[user?.email])
   
     const handleDelete = id => {
        const proceed = window.confirm('Are you sure ,you want to cancel this review')
        if (proceed) {
            fetch(`https://kuks-fresh-server-side.vercel.app/allReview/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = reviews.filter(re => re._id !== id)
                        setReviews(remaining)
                    }
                })
        }
       
} 

    return (
        <div>
        {/* <h1 className='text-xl'>my reviews:{reviews.length}</h1> */}
        <div className="overflow-x-auto ">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Picture</th>
                        <th>Client Name</th>
                        <th>Item</th>
                        <th>FeedBack</th>
                        <th>Rating</th>
                        
                    
                    </tr>
                </thead>
                <tbody>
                 
 {
   reviews.map(rev => <MyReview key={rev._id} rev={rev}  handleDelete={handleDelete} ></MyReview>)
 }


                </tbody>

            </table>
        </div>
       
    </div>
    );
};

export default Reviews;