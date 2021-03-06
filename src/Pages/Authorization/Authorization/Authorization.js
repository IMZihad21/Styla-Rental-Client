import React from 'react';
import useProvider from '../../../Hooks/useProvider';
import Login from '../Login/Login';
import UserInfo from '../UserInfo/UserInfo';

const Authorization = () => {
    const { user } = useProvider();
    return (
        <div className="bg-gray-100 mx-2 md:mx-16 mt-4">
            <div className="w-9/12 m-auto py-5 md:py-16 flex items-center justify-center">
                <div className="bg-blue-100 shadow overflow-hidden sm:rounded-lg pb-8">
                    {
                        user.uid ? <UserInfo /> : <Login />
                    }
                </div>
            </div>
        </div>
    );
};

export default Authorization;