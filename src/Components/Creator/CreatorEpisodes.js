import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../Baseurl';
import { useParams } from 'react-router-dom';


function CreatorEpisodes() {
    const navigate = useNavigate();
    const [podcast, setPodcast] = useState([]);
    const [podcastId, setPodcastId] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        console.log(id)
        axiosInstance
            .post("/getPodcastByPodcastId",{
                id: id.split(',')[0]
            })
            .then((response) => {
                setPodcast(response.data.data);
                console.log(response);
            })
            .catch((error) => {
                console.log("Error submitting data: ", error);
            });

            axiosInstance
            .post("/getEpisodedOfPodcast",{
                id: id.split(',')[0]
            })
            .then((response) => {
                console.log('episode', response.data.data);
                setEpisodes(response.data.data);
            })
            .catch((error) => {
                console.log("Error submitting data: ", error);
            });
    }, []);

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'> <Card className='row' style={{
                    width: "100%", height: "200px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                }}>
                    <Card className='col-2' style={{
                        width: "18rem", height: "100px", margin: "8px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}></Card>
                    <div className='col-4'>cgfhghj</div>
                </Card></div>
                <div className='col-6 '>
                    <div className='col-2 p-2' style={{
                        width: "100%", height: "fit-content", margin: "8px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}>
                        <Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card><Card className='col-2 m-3 mt-3' style={{
                            width: "95%", height: "100px", padding: "8px",
                        }}></Card>

                    </div></div>
            </div>
        </div>
    )
}

export default CreatorEpisodes