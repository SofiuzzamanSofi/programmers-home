import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer/Footer';
import Header from '../component/Shared/Header/Header';
import LeftSideNav from '../component/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <div className='min-h-screen'>
                <div>
                    <Header />
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-10 max-w-[1366px] m-auto'>
                    <div className="border md:col-span-1 lg:col-span-2" >
                        <LeftSideNav />
                    </div>
                    <div className="border md:col-span-2 lg:col-span-8" >
                        <Outlet />
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;