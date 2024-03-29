import React, { useContext, useState } from 'react';
import img from '../../Asset/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';


import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';


const SignUp = () => {

    const {createUser } = useContext(AuthContext);
    const[error , setError] = useState('');
    const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || '/';
   
    
     const handleSubmit = event => {
         event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const email = form.email.value;
         const password = form.password.value;
         console.log(name, email, password);
        
         createUser(email, password)
         .then( result => {
             const user = result.user;
             toast.success('Successfully Registered ');
            //  console.log(user);
             form.reset();
             setError('');
             navigate(from, {replace: true});
            
             
         })
         .catch( e => {
             alert(e)
             setError(e.message)
 
         });
         
         
     }
   
 
   
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-rose-500 border-0" type="submit" value="Sign Up" />
                    </div>
                    <p className='text-center'>Already have an account? <Link className='text-rose-500 font-bold' to="/login">Login</Link> </p>
                     <p className='text-red-500'>{error}</p>
                </form>
               
            </div>
        </div>
    </div>
);
};


export default SignUp;