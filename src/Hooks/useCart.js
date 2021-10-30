import { useState } from "react";
import useProvider from "./useProvider";

const useCart = () => {
    const [cart, setCart] = useState([]);
    const { user } = useProvider();


    return {

    };
};

export default useCart;