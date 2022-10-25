import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './LeftSideNav.css'




const LeftSideNav = () => {


    const [categories, setCategories] = useState([]);



    useEffect(() => {
        const categoryFuction = async () => {
            const res = await fetch('https://programmers-home-server-sofiuzzamansofi.vercel.app/category');
            const data = await res.json();
            setCategories(data);
        }
        const cllFunctionsss = categoryFuction();
    }, [])




    return (
        <ul className=" bg-base-100  pt-10 pb-1 pl-4 md:pr-1 pr-4 sticky top-[88px]">
            <p className='text-2xl bg-slate-900 p-4 rounded hover:text-amber-300'>Category</p>
            {
                categories.map(category => <li key={category.category} className="bg-slate-600 p-4 my-4  rounded hover:bg-amber-300 hover:text-black hover:cursor-pointer">
                    <NavLink to={`/course/${category.category}`} >{category.name}</NavLink>
                </li>)
            }
        </ul >
    );
};

export default LeftSideNav;