import {
    lazy,
    Suspense
  } from 'react'
  import * as React from "react";
  import { createRoot } from "react-dom/client";
  import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
    Navigate,
    BrowserRouter
  } from "react-router-dom";
  

  import { ContactRegister } from '../pages/ContactRegister'

import { ContactHome } from '../pages/ContactHome';

  

  export function GuestRoutes () {
    // const router = createBrowserRouter([
    //     {
    //       path: "/",
    //       element: (<ContactRegister/>)
    //     },
    //     {
    //       path: "about",
    //       element: <div>About</div>,
    //     },
    //   ]);
      
    return (
        // createRoot(document.getElementById("root")).render(
        //     <RouterProvider router={router} />
        //   )
             <Routes>
      <Route path="/" >

        <Route path='/' element={ (
          <Suspense >
            <ContactHome />
          </Suspense>
        ) } />
    <Route path='/cadastro' element={ (
          <Suspense >
            <ContactRegister />
          </Suspense>
        ) } />
       
      </Route>

      <Route path="*" element={ <Navigate to="/" replace /> } />
    </Routes>
           
    )
  }
  