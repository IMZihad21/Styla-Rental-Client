import axios from "axios";
import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {
    const { user } = useFirebase();
    const userID = user.uid;
    const [ cart, setCart ] = useState([]);
    const [ order, setOrder ] = useState([]);
    useEffect(() => {
        axios.get(`https://styla-rental.herokuapp.com/cart/${userID}`)
            .then((response) => {
                const { cart, order } = response.data;
                if (cart) {
                    setCart(response.data.cart);
                }
                else {
                    setCart([])
                }
                if (order) {
                    setOrder(response.data.order);
                }
                else {
                    setOrder([]);
                }
            })
    }, [ user ])

    useEffect(() => {
        if (userID) {
            const data = { userID, cart, order }
            axios.put('https://styla-rental.herokuapp.com/cart', data)
                .then((response) => {
                    // do nothing cuz yes XD
                })
        }
    }, [ cart, order ])

    return {
        cart,
        order,
        setCart,
        setOrder
    };
};

export default useCart;