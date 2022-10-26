import React from 'react';

const AboutBlog = () => {



    return (
        <div className='text-center  text-white py-8 '>
            <div className='my-8'>
                <h1 className='lg:text-6xl md:text-5xl text-2xl text-yellow-400'>Hay Buddy, Wanna Check Me.. Here are some questions and ans.</h1>
            </div>
            <div className='my-4 py-4 bg-slate-700 rounded-lg'>
                <h1 className='text-xl my-2 px-8 text-yellow-300'>What is cors?</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >
                            CORS is a node.js package for providing a <span className='fond-bold'> Connect/Express </span> middleware that can be used to enable <span className='fond-bold'>CORS</span>  with various options.  This module supports validating the origin dynamically using a function provided to the origin option. This function will be passed a string that is the origin (or undefined if the request has no origin), and a callback with the signature callback(error, origin).
                        </p>
                        <p >
                            The origin argument to the callback can be any value allowed for the origin option of the middleware, except a function. See the configuration options section for more information on all the possible value types.
                        </p>
                    </div>
                </div>
            </div>
            <div className='my-4 py-4 bg-slate-700 rounded-lg'>
                <h1 className='text-xl my-2 px-8 text-yellow-300'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >
                            Firebase Authentication provides <span className='fond-bold'> backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</span>
                        </p>
                        <p >
                            Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
                        </p>
                        <div className='text-center m-auto'>
                            <div>
                                <p className='text-lg py-3'>Others options of Authentications </p>
                                <ol class="list-disc hover:list-none text-left">
                                    <li>Password-based authentication</li>
                                    <li>Multi-factor authentication</li>
                                    <li>Certificate-based authentication</li>
                                    <li>Biometric authentication</li>
                                    <li>Facial recognition</li>
                                    <li>Fingerprint scanners</li>
                                    <li>Speaker Recognition</li>
                                    <li>Eye scanners</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-4 py-4 bg-slate-700 rounded-lg'>
                <h1 className='text-xl my-2 px-8 text-yellow-300'>How does the private route work?</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </p>
                    </div>
                </div>
            </div>
            <div className='my-4 py-4 bg-slate-700 rounded-lg'>
                <h1 className='text-xl my-2 px-8 text-yellow-300'>What is Node? How does Node work?</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >
                            Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.
                        </p>
                        <p className='py-3'>
                            Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                        <p >
                            Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default AboutBlog;