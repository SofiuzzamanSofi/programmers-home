import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../InsideHome/Courses/Courses';

const CategoryWise = () => {

    const courses = useLoaderData();

    return (
        <div>
            <Courses courses={courses} />
        </div>
    );
};

export default CategoryWise;