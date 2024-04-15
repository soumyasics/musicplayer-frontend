import React, { useState, useEffect } from 'react'
import axiosInstance from '../../Baseurl';
import { useNavigate } from 'react-router-dom';

function ListenerMusics({ url }) {

  const [allMusic, setAllMusic] = useState([])
const navigate=useNavigate()
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
  useEffect(() => {
    if (localStorage.getItem("listenerid") == null) {
      navigate("/");
    } 
  }, []);
  
  useEffect(() => {
    viewAllMusic()

  }, []);

  return (
    <div className='container'>
      <div className="podcast_list_main">
        <div class="container ">
          <h5 className="text-dark mt- pt-5">Musics</h5>
          <div class="row row-cols-1 row-cols-md-4 g-4 mt-3">
            {allMusic.length > 0 ? (
              allMusic.map((a) => (
                <div className="card col-3" id="podcastlist_card">
                  <div class="podcastlist_card_img" style={{ height: "290" }}
                  >
                    <img
                      src={url + a.coverimage.filename}
                      class="card-img-top"
                      style={{ height: "290" }}
                      id="adminclub"
                      alt="..."
                    />
                  </div>
                  <div class="podcastlist_card_content">
                    <h4 class="card-title mt-3 mb-2t">{a.MusicTitle}</h4>
                    <h6 class="card-text col">{a.directorname}</h6>
                    <h6 class="card-text" style={{ height: "100px" }}>{a.filmoralbum}</h6>
                    <div className="audiodisplay">
                      <audio controls className="w-100">
                        <source src={a.audio ? url + a.audio.filename : ''} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>

                </div>
              )
              )) : (
              <div className="text-sucess">
                <h4 className="text-success text-center">No Music Found</h4>
              </div>
            )}
          </div>
        </div>
      </div>    </div>
  )
}

export default ListenerMusics