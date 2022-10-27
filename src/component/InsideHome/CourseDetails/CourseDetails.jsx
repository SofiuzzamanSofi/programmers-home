import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const course = useLoaderData();

    const handleDownLoadPdf = (event) => {
        html2canvas(document.querySelector("#htmltopdf")).then(canvas => {
            document.body.appendChild(canvas);  // if you want see your screenshot in body.
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4', false);
            pdf.addImage(imgData, 'PNG', 0, 0, 600, 0, undefined, false);
            pdf.save("download.pdf");
        });
    }


    return (
        <div className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" id='htmltopdf'>
            <div className="p-8 rounded shadow-xl sm:p-16 bg-slate-600 text-white rounded-lg text-center">
                <div className="flex items-center justify-between bg-slate-500 p-4 mb-4 rounded text-base font-bold text-4xl text-yellow-300">
                    <p>{course.name}</p>
                    <img title='download pdf format' onClick={handleDownLoadPdf} className='hover:cursor-pointer hover:bg-slate-50 hover:rounded-full' src="https://img.icons8.com/ios-glyphs/30/000000/downloads.png" />
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
                <div className=''>
                    <button className="px-2 py-2 my-2 sm:m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700 hover:bg-cyan-700"><Link to={`/course/${course.category}`}>More In This Category.</Link></button>
                    <button className="px-4 py-2 my-2 sm:m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700 hover:bg-cyan-400"><Link to={`/checkout/${course.id}`}>Get premium access.</Link></button>


                </div>
            </div>
        </div>
    );
};

export default CourseDetails;