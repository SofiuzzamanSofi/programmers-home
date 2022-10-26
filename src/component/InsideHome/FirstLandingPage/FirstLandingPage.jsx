import React from 'react';
import { Link } from 'react-router-dom';

const FirstLandingPage = () => {
    return (
        // <section className="dark:bg-gray-800 dark:text-gray-100">
        <section className=" dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl ">World No'1
                    <span className="dark:text-violet-400"> Programming </span> Platform
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg">Wellcome to Programmers Home . Here you find the world one of the best courses platform to full fill your desire. so ,, dot't think much.. take a tour .....</p>
                <div className="flex flex-wrap justify-center">
                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"><Link to='/home'>Get started</Link></button>
                    <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700"><Link to='/blog'>Learn more</Link></button>
                </div>
            </div>
        </section>
    );
};

export default FirstLandingPage;