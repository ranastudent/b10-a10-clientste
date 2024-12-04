import React from 'react';
import Nabvar from '../components/Nabvar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayouts = () => {
      return (
            <div className='w-10/12 mx-auto mt-5 pt-10'>
                  <Nabvar></Nabvar>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default MainLayouts;