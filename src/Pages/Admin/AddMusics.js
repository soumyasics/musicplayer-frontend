import React, { useState, useEffect } from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import { PiMusicNotesPlusFill } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axiosInstance from '../../Baseurl';
function AddMusics({ url }) {

    const [allMusic, setAllMusic] = useState([])

    // console.log(url);
    const viewAllMusic = () => {
        axiosInstance
            .post("/viewallmusic")
            .then((response) => {
                setAllMusic(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error submitting data: ", error);
            });

    }
    const navigate=useNavigate()

    useEffect(() => {
        viewAllMusic()

    }, []);
    useEffect(() => {
        if (localStorage.getItem("admin") == null) {
          navigate("/adminlogin");
        } 
      }, []);
    

    const RemoveAmusic = (musicid) => {
        console.log(musicid);
        axiosInstance.post("/removeamusic/" + musicid).then((response) => {
            alert(response.data.msg);
            viewAllMusic()
        })
            .catch((error) => {
                console.error("Error submitting data: ", error);
                alert(error)
            });

    }
    return (
        <div className='row mt-5 pt-5 adminbg'>
            <div className='col-1 mt-5 py-5 px-4'><AdminSidebar /></div>
            <div className='col-10 text-center'>
                < div style={{
                    margin: "8px", padding: "14px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}>
                    <Link to="/addmusicsform" className='text-center'><button className='btn btn-light text-center fs-4 '><PiMusicNotesPlusFill /> Add Music</button>
                    </Link>
                    <div className='mt-5'>
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>Music Title</th>
                                    <th>Director Name</th>
                                    <th> film/album</th>
                                    <th> Songs</th>
                                    <th> Action</th>
                                </tr>
                            </thead>
                            {allMusic ? (
                                allMusic.map((item, index) => (
                                    <tbody>
                                        <tr>
                                            <td>{item.MusicTitle}</td>
                                            <td>{item.directorname}</td>
                                            <td>{item.filmoralbum}</td>
                                            <td> <audio controls className="w-100">
                                                <source src={item.audio ? item.audio ? url + item.audio.filename : '' : ""} type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio></td>
                                            <td><button onClick={() => RemoveAmusic(item._id)} className='episodebtn'>Remove</button></td>
                                        </tr>
                                    </tbody>
                                ))) : (<div>No Music Avalable now, Please add music</div>)
                            }

                        </Table>
                    </div>
                </div>
            </div>
        </div>)
}

export default AddMusics