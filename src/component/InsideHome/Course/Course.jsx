import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Course = ({ course }) => {
    console.log(course);



    return (
        <div className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8   ">
            <div className="p-8 rounded shadow-xl sm:p-16 bg-slate-600 text-white rounded-lg">
                <div className="flex flex-col lg:flex-row ">
                    <div className=" lg:mb-0 lg:w-1/2 lg:pr-5">
                        <img className='w-[300px] h-[169px] ' src={course?.img} alt="" />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="mb-4 text-base" title={course?.details}>
                            {course?.details.length > 250 ? course?.details.slice(0, 250) + ('...') : course?.details}
                        </p>
                        <NavLink to={`/course/category/${course.id}`} className=" bg-pink-600 px-4 py-2 rounded-md inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                            See Details
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;