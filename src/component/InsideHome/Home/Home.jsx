import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Home = () => {

    const allCourses = useLoaderData();


    return (
        <div>
            <div className='text-center text-5xl font-bold py-5 text-yellow-300'>
                <p >Well come to Programmers Home.</p>
            </div>
            <div>
                {
                    allCourses.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Home;