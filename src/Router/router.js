import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllCard from '../Component/Services/AllCard';
import Services from '../Component/Services/Services';
import Main from '../Layout/Main';
import Home from '../Page/Home/Home';

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
        }
    ]
    },
   
    {
            path:'/services/:id',
            loader:({params})=>fetch(`services.json${params.id}`),
            element: <Services></Services>
        
    }
])



export default router;