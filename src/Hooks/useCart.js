import axios from "axios";
import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {
    const { user } = useFirebase();
    const userID = user.uid;
    const [ cart, setCart ] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9000/cart/${userID}`)
            .then((response) => {
                if (response.data.length > 0) {
                    setCart(response.data);
                }
            })
    }, [ userID ])

    useEffect(() => {
        if (userID) {
            const data = { userID, cart }
            axios.put('http://localhost:9000/cart', data)
                .then((response) => {
                    // do nothing cuz yes XD
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, [ cart ])

    return {
        cart,
        setCart
    };
};

export default useCart;