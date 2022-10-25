import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer/Footer';
import Header from '../component/Shared/Header/Header';
import LeftSideNav from '../component/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div className='min-h-screen'>
            {/* <div > */}
            <div className='sticky top-0 left-0 z-40'>
                <Header />
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-10 max-w-[1366px] m-auto'>
                <div className=" md:col-span-1 lg:col-span-2  " >
                    <LeftSideNav />
                </div>
                <div className="md:col-span-2 lg:col-span-8" >
                    <Outlet />
                </div>
            </div>
            {/* </div> */}
            <Footer />
        </div>
    );
};

export default Main;