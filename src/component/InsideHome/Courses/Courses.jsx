import React from 'react';
import { useLocation } from 'react-router-dom';
import Course from '../Course/Course';



const Courses = ({ courses }) => {

    const location = useLocation();

    return (

        <div>
            <div>
                <nav aria-label="breadcrumb" className="w-full p-4 dark:bg-gray-600 dark:text-gray-100">
                    <ol className="flex h-8 space-x-2 dark:text-gray-100">
                        <li className="flex items-center">
                            <a rel="noopener noreferrer" href="#" title="Back to homepage" className="flex items-center hover:underline">Home</a>
                        </li>
                        <li className="flex items-center"> {location.pathname}
                        </li>
                    </ol>
                </nav>
            </div>
            <div>
                {
                    courses.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;