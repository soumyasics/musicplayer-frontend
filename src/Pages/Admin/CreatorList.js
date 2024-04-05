import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import Table from 'react-bootstrap/Table';
import axiosInstance from '../../Baseurl';
import { useNavigate } from 'react-router-dom';

function CreatorList({ url }) {
    const [creatorlist, setCreatorList] = useState([])
 
    const navigate=useNavigate()
    useEffect(() => {
        axiosInstance
            .post("/viewCreators")
            .then((response) => {
                setCreatorList(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error submitting data: ", error);
            });


    }, []);
    useEffect(() => {
        if (localStorage.getItem("admin") == null) {
          navigate("/adminlogin");
        } 
      }, []);
    
    return (
        <div className='row adminbg mt-5 pt-5'>
            <div className='col-1 mt-5 py-5 px-4'><AdminSidebar /></div>
            <div className='col-10'>< div style={{
                margin: "8px", padding: "14px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>profile</th>
                            <th> Name</th>
                            <th> Mobile</th>
                            <th>Email ID</th>
                            <th> DOB</th>
                            <th> Gender</th>
                            <th> country
                            </th> <th> City</th>

                        </tr>
                    </thead>
                    {
                        creatorlist.map((item, index) => (
                            <tbody>
                                <tr>
                                    <td>{<div className="circular-img">
                                        <img
                                            src={url + item.image.filename}
                                            alt="img"
                                            className="profileimg"
                                        ></img>
                                    </div>
                                    }</td>
                                    <td>{item.firstname}{item.lastname}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.email}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.country}</td>
                                    <td>{item.city}</td>

                                </tr>
                            </tbody>
                        ))
                    }

                </Table>
            </div></div>
        </div>
    )
}

export default CreatorList