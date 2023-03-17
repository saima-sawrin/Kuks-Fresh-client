import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyReview = ({rev, handleDelete , handleUpdate}) => {
    
    const {_id,client , item,rate,time , review}= rev;
    console.log(rev)
    const {user} = useContext(AuthContext);

    

    return (
      

         <>
         {
            user?.uid?
           
                        <tr>
                <td><button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button></td>
                <td><img src={user?.photoURL} alt="Avatar Tailwind CSS Component" /></td>
                <td>{user?.displayName}</td>
                <td>{item}</td>
                <td>{review}</td>
                <td>{rate}</td>
             
            </tr>
   
            :
            <>
            <h1 className='text-center font-bold text-3xl'>Not Included any Review Yet</h1></>
         }
         </>
    );
};

export default MyReview;