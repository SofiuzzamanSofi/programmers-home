
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextAuth/AuthState';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();


const SignInUp = () => {

    const { error, createNewUser, signInLogIn, signInPopUp } = useContext(AuthContext);
    const error2 = error.replace('(', "");
    const error3 = error2.replace(')', "");
    const error4 = error3.replace(/Firebase: Error/gi, "Error: ");

    const location = useLocation();
    const navigate = useNavigate();




    const handleFromSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form?.name?.value || " ";
        const photo = form?.photo?.value || " ";
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);

        if (location.pathname === "/signin") {

            signInLogIn(email, password);
        }
        else (
            createNewUser(name, photo, email, password)
        );
    }
    // console.log(signIn);


    const handlePopUpGoogle = () => {
        signInPopUp(googleProvider);
    }
    const handlePopUpFacebook = () => {
        signInPopUp(facebookProvider);
    }
    const handlePopUpGithub = () => {
        signInPopUp(githubProvider);
    }




    return (
        <div className='min-h-screen  pt-[5%] 2xl:py-[8%]'>
            <div className="text-center m-auto p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">




                <form onSubmit={handleFromSubmit} className="space-y-6 text-left" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">

                        {
                            location.pathname === "/signin" ? "Sign in to our platform" : "Sign Up to your platform"
                        }
                    </h5>

                    {/* 1no, works done */}
                    {
                        location.pathname === "/signin" ?
                            ""
                            :
                            <>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pls Inter Your Full Name</label>
                                    <input type="text" name="name" id="name" placeholder="Full Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pls Inter Photo URL</label>
                                    <input type="text" name="photo" id="photo" placeholder="//https://example.com/etc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                            </>
                    }
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        <p className='text-xs text-red-700'>{error4}</p>
                    </div>


                    {/* 2no, works done */}
                    {
                        location.pathname === "/signin" ?
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <Link to="" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forget Password?</Link>
                            </div>
                            : ""
                    }
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                        {/* 3no, works done  */}
                        {location.pathname === "/signin" ? "Sign In to your account" : "Sign Up to Create New Account"}
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">

                        {/* 4no, works done */}
                        {
                            location.pathname === "/signin" ?
                                <>Not registered? <Link to="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link></>
                                :
                                <>Already Have a Account? <Link to="/signin" className="text-blue-700 hover:underline dark:text-blue-500">Pls Login</Link></>
                        }
                    </div>
                </form>




                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4 ">
                    <button onClick={handlePopUpGoogle} aria-label="Log in with Google" className="p-3 rounded-sm hover:text-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                    <button onClick={handlePopUpFacebook} aria-label="Log in with Twitter" className="p-3 rounded-sm hover:text-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" className="w-7 h-7 fill-current">
                            <path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"></path></svg>
                    </button>
                    <button onClick={handlePopUpGithub} aria-label="Log in with GitHub" className="p-3 rounded-sm hover:text-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                    </button>
                </div>



            </div>

        </div>
    );
};

export default SignInUp;
