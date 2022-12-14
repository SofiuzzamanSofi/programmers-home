import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../InsideHome/Courses/Courses';


const Language = () => {
    const courses = useLoaderData();

    return (
        <div>
            <Courses courses={courses} />
        </div>
    );
};

export default Language;