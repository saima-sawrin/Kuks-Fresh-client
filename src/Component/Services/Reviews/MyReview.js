import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyReview = ({rev, handleDelete}) => {
    
    const {_id,client , rate,time , review}= rev;
    console.log(rev)
    const {user} = useContext(AuthContext);

    return (
      
         
            <tr>
                <td><button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button></td>
                <td><img src={user?.photoURL} alt="Avatar Tailwind CSS Component" /></td>
                <td>{user?.displayName}</td>
                <td>{review}</td>
             <td>{rate}</td>
                <td><button className="btn btn-ghost btn-xs">Edit</button></td>
            </tr>

 
              

    );
};

export default MyReview;