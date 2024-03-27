import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import Table from 'react-bootstrap/Table';
import axiosInstance from '../../Baseurl';


function PodcastList() {

    const [podcastlist, setPodcastList] = useState([]);

    useEffect(() => {
        axiosInstance
            .post("/getAllPodcast")
            .then((response) => {
                setPodcastList(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error submitting data: ", error);
            });


    }, []);


  return (
    <div className='row mt-5 pt-5'>
    <div className='col-1 mt-5 py-5 px-4'><AdminSidebar /></div>
    <div className='col-10'>< div style={{
        margin: "8px", padding: "14px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }}>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>podcast name</th>
                    <th>creatorname</th>
                    <th> Mobile</th>
                    <th>Email ID</th>
                    <th> DOB</th>
                    <th> Gender</th>
                    <th> country
                    </th> <th> City</th>

                </tr>
            </thead>
            {
                podcastlist.map((item, index) => (
                    <tbody>
                        <tr>
                            <td>{ }</td>
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

export default PodcastList