import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import useProvider from '../../../Hooks/useProvider';

const RentDress = () => {
    const { register, handleSubmit, reset } = useForm();
    const [ inputError, setInputError ] = useState(false);
    const { user } = useProvider();

    // Handle Form Submit
    const onsubmit = (data) => {
        const { name, image, price, rating } = data;
        setInputError(false);
        if (name === "" || image === "" || price <= 0) {
            setInputError(true);
            return;
        }
        // Modifying data before making POST request
        data.owner = user.email;
        data.ownerName = user.displayName;
        data.price = parseInt(price);
        data.rating = parseInt(rating);

        // Make POST req to backend
        axios.post('http://localhost:9000/dresses', data)
            .then((response) => {
                if (response.data?.acknowledged) {
                    toast.success("Succesfully added your dress to our collection. Thanks for using our service", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    reset();
                }
            }).catch((err) => {
                toast.error(err, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }
    return (
        <div className='mx-2 md:mx-16 mt-4'>
            <div className="bg-green--100">
                <div className="border-t border-green--200 text-center p-20">
                    <h1 className="text-5xl font-bold text-gray-500">Rent Your Dress</h1>
                    <h1 className="text-2xl font-medium py-8">Earn by renting your dress through our service</h1>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="mb-6 flex text-left">
                            <label htmlFor="name" className="w-1/3 text-lg font-medium text-gray--900 block mb-2">A name for your Dress: </label>
                            <input  {...register("name")} type="text" id="name" className="w-2/3 bg-green--50 border border-green--300 text-gray--900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required="" />
                        </div>
                        <div className="mb-6 flex text-left">
                            <label htmlFor="image" className="w-1/3 text-lg font-medium text-gray--900 block mb-2">Dress image URL: </label>
                            <input  {...register("image")} type="text" id="image" className="w-2/3 bg-green--50 border border-green--300 text-gray--900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required="" />
                        </div>
                        <div className="mb-6 flex text-left">
                            <label htmlFor="price" className="w-1/3 text-lg font-medium text-gray--900 block mb-2">Rent amount you want: </label>
                            <input  {...register("price")} type="number" min={1} id="price" className="w-2/3 bg-green--50 border border-green--300 text-gray--900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required="" />
                        </div>
                        <div className="mb-6 flex text-left">
                            <label htmlFor="rating" className="w-1/3 text-lg font-medium text-gray--900 block mb-2">Rating you'd like to set: </label>
                            <select defaultValue={4} {...register("rating")} id="rating" className="w-2/3 bg-green--50 border border-green--300 text-gray--900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                        <p className="my-5 text-xl font-semibold">You are submitting as: <span className='text-gray-500'>{user.displayName} ({user.email})</span></p>
                        {
                            inputError && <p className="my-5 text-red-500 text-xl font-semibold">* All field must be filled before Submit</p>
                        }
                        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RentDress;