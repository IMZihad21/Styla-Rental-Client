import React from 'react';
import useProvider from '../../../Hooks/useProvider';

const UserInfo = () => {
    const { user, logOut } = useProvider();
    return (
        <div className="border-t border-gray-200 text-center pt-8 md:p-20">
            <div className='w-52 mx-auto'>
                <img className='w-full rounded-full' src={user.photoURL} alt="ProfilePhoto" />
            </div>
            <h1 className="text-5xl mt-5 font-semibold text-purple-400">Welcome, <span className='font-bold'>{user.displayName}</span></h1>
            <p className='text-xl pt-5'>Your Email is: <span className='text-xl font-bold'>{user.email}</span></p>
            <button onClick={logOut} className="group relative w-full flex justify-center py-4 px-8 mt-10 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                Sign Out
            </button>
        </div>
    );
};

export default UserInfo;