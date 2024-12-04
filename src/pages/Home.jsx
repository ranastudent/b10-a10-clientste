import React from 'react';
import Header from '../components/Header';
import HomeNavbar from '../components/HomeNavbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
      return (
            <div>
                 
                <Header></Header>
                <HomeNavbar></HomeNavbar>
                <Outlet></Outlet> 
            </div>
      );
};

export default Home;