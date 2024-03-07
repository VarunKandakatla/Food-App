import React from 'react';
import Error from './components/Error';
import ReactDOM from 'react-dom/client';
// import {Banner} from './components/Header';
import { Header } from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet /*for children */ } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import { RestaurantMenu } from './components/RestaurantMenu';
import { useParams } from 'react-router-dom';
const App = () =>{
    // console.log(Body.useState);
    return (
    <div>
        <Header/>
        {/* <Banner/> */}
        {/* <Body/> */}
        <Outlet/>
        <Footer/>
    </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/aboutus',
                element:<><AboutUs/></>,
                
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            }
        ]
        
    },
    
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render((<App/>));
root.render(<RouterProvider router={appRouter} />)