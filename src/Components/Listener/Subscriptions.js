import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Baseurl';
import Table from 'react-bootstrap/Table';

function Subscriptions({ url }) {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        axiosInstance
            .post("/getSubscriptions", {
                id: localStorage.getItem("creatorid")
            })
            .then((response) => {
                setSubscriptions(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log("Error submitting data: ", error);
            });
    }, []);

    return (
        <div className='container'>
            <h3 className='m-2'>Subscribers</h3>
            <div className='p-3 m-5' style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}>
                <Table striped="columns" >
                    <thead >
                        <tr>
                            <th>
                                Podcast Name
                            </th>
                            <th>Listener</th>
                            <th>listener Name</th>
                            <th>Email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {subscriptions.length ? (subscriptions.map((item) => (

                        <tbody>
                            <tr>
                                <th className=' fs-5'>{item.podcastid.podcastname}</th>
                                <td>         
                                    <img style={{ width: "52px", height: "52px" }}
                                    src={url + item.listenerid.image.filename}
                                    alt="img"
                                    className="listenerprofileimg"
                                ></img>
                                </td>
                                <td>{item.listenerid.firstname} {item.listenerid.lastname}</td>
                                <td>{item.listenerid.email}</td>

                                <td>{item.podcastid.price}</td>
                            </tr>
                        </tbody>

                    ))):<h4>no subscribers present</h4>}

                </Table>
            </div>
        </div>

    )
}

export default Subscriptions