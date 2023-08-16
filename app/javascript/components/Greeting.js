import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchgreeting } from "../slice/greetingSlice";
const Greeting = () => {
    const greetings = useSelector(store => store.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchgreeting());
    }, []);

    if(greetings.isLoading){
        return <p>Greetings Loading...</p>
    }

    return (
        <div>
            <h1>Random Greetings</h1>
            <p>{greetings.greeting.text}</p>
        </div>
    );
};

export default Greeting;