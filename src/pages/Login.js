import React from 'react';
// import './Login.css'

const WelcomeScreen = () => {
    return (


        <div className="container">
        <h1>Welcome to TaskList Pro</h1>
        <p>Enter your email address to get started</p>
        <input type="email" placeholder="name@yourcompany.com" />
        <button className="email-btn">Continue with Email</button>
        <div className="or">OR</div>
        <button className="google-btn">Continue with Google</button>
        <button className="apple-btn">Continue with Apple</button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <p>Already have an account? <a href="#">Sign In</a></p>
      </div>





        // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        //     <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        //         <h1 className="text-3xl font-bold mb-6 text-center">Welcome to TaskList Pro</h1>
        //         <div className="mb-4">
        //             <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
        //                 Enter your email address to get started
        //             </label>
        //             <input
        //                 id="email"
        //                 type="email"
        //                 className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                 placeholder="name@yourcompany.com"
        //             />
        //         </div>
        //         <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300">
        //             Continue with Email
        //         </button>
        //         <div className="my-4 text-center text-gray-500">OR</div>
        //         <button className="w-full py-2 px-4 bg-white text-gray-700 font-semibold rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-300">
        //             Continue with Google
        //         </button>
        //         <button className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md mt-2 hover:bg-gray-800 transition-colors duration-300">
        //             Continue with Apple
        //         </button>
        //         <div className="mt-6 text-center">
        //             <span className="text-gray-500">Already have an account?</span>
        //             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        //             <a className="text-blue-500 hover:text-blue-600 ml-1">
        //                 Sign In
        //             </a>
        //             {/* <button className="text-blue-500 hover:text-blue-600 ml-1">
        //                 Sign In
        //             </button> */}
        //         </div>
        //     </div>
        // </div>
    );
};

export default WelcomeScreen;