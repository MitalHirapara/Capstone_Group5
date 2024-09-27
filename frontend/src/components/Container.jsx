import React from 'react'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";

import Navbar from './Navbar'
import Footer from './Footer'

export default function Container({children}) {

    const location = useLocation();

    useEffect(() => {
      window.HSStaticMethods.autoInit();
    }, [location.pathname]);

  return (
    <div>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}
