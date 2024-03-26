import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";
import axiosInstance from '../../Baseurl';


function Subscriptions() {
    const [Subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        axiosInstance
            .post("/getSubscriptions",{
                id: localStorage.getItem("creatorid")
            })
            .then((response) => {
                setSubscriptions(response.data.data);
                console.log(response);
            })
            .catch((error) => {
                console.log("Error submitting data: ", error);
            });
    }, []);

    return (
        <div>
            <h1>ppp</h1>
        </div>
    )
}

export default Subscriptions