import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const course = useLoaderData();



    return (
        <div className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8   ">
            <div className="p-8 rounded shadow-xl sm:p-16 bg-slate-600 text-white rounded-lg text-center">
                <div className="flex items-center justify-between bg-slate-500 p-4 mb-4 rounded text-base font-bold text-4xl text-yellow-300">
                    <p>{course.name}</p>
                    <img className='hover:text-green-600 hover:bg-slate-600 hover:rounded-full' src="https://img.icons8.com/ios-glyphs/30/000000/downloads.png" />
                </div>
                <div className="flex flex-col lg:flex-row ">
                    <div className=" lg:mb-0 lg:w-1/2 lg:pr-5 m-auto lg:mt-8">
                        <img className='w-[300px] h-[169px] ' src={course?.img} alt="" />
                    </div>
                    <div className="lg:w-1/2 py-4">

                        <p className="mb-4 text-base text-justify">
                            {course?.details}
                        </p>
                    </div>
                </div>
                <Link to={`/course/${course.category}`} className="text-center m-auto bg-pink-600 px-4 py-2 rounded-md inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                    More In This Category.
                </Link>
            </div>
        </div>
    );
};

export default CourseDetails;