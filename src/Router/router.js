import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Component/Blog/Blog';
import AddServices from '../Component/Services/AddServices/AddServices';
import AllCard from '../Component/Services/AllCard';
import Details from '../Component/Services/Details';
import Main from '../Layout/Main';
import Home from '../Page/Home/Home';
import Login from '../Page/Login/Login';
import SignUp from '../Page/SignUp/SignUp';


const router = createBrowserRouter ([
    {
        path:'/',
        element: <Main></Main>,
        children:[{
            path:'/',
            element: <Home></Home>

        },
        {
            path:'/services',
            element: <AllCard></AllCard>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path:'/addServices',
            loader:()=> fetch(`http://localhost:5000/allServices`),
            element: <AddServices></AddServices>
        },
          
    {
        path:'/services/:id',
        loader:({params})=>fetch(`http://localhost:5000/allServices/${params.id}`),
        element: <Details></Details>
    
   }
    ]
    }
 
])



export default router;