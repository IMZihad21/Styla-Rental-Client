import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useProvider from '../../../Hooks/useProvider';

const Login = () => {
    const { signInUsingGoogle } = useProvider();
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || "/"
    const handleLogin = () => {
        signInUsingGoogle()
            .then(tmp => {
                history.push(redirect)
            })
    };
    return (
        <div className="border-t border-gray-200 text-center pt-8 md:p-20">
            <h1 className="text-5xl font-bold text-purple-400">One-click Login</h1>
            <button onClick={handleLogin} className="group relative w-full flex justify-center py-4 px-8 mt-10 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <i className="text-2xl my-auto pr-3 fab fa-google"></i>
                </span>
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;