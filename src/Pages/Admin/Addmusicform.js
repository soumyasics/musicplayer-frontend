import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Baseurl';
function Addmusicform() {
  const [music, setMusic] = useState({
    MusicTitle: "",
    directorname: "",
    filmoralbum: "",
    coverimage: "",
    audio: ""
  });
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    for (let key in music) {
      if (key != "image" && key != "audio") {
        data.append(key, music[key]);
      }
    }
// console.log(data,"data2");
    // data.append('listenername', localStorage.getItem("listenername"));
    data.append('files', music.image);
    data.append('files', music.audio);
    data.append('listenerid', localStorage.getItem('listenerid'));

    console.log(music);
    console.log(data.get('files'), "data");
    console.log(data,"data3");
    axiosInstance
      .post("/addamusic", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response, "y");
        alert(response.data.msg);
        navigate(`/addmusics`)
      })
      .catch((error) => {
        console.error("Error submitting data: ", error);
      });

    // console.log(music,"musicd");
    // axiosInstance
    //   .post("/addamusic", music, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response, "y");
    //     alert(response.data.msg);
    //     navigate(`/addmusics`)
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting data: ", error);
    //     alert("can't created")
    //   });

  }
  const handleCancel = () => {
    alert("nothing is added")
    navigate(`/addmusics`)
  }
  const handleInputChnage = (e) => {
    setMusic({
      ...music,
      [e.target.name]:
        (e.target.name === "image" || e.target.name === "audio")
          ? e.target.files
            ? e.target.files[0]
            : null
          : e.target.value,
    });


  }
  useEffect(() => {
    if (localStorage.getItem("admin") == null) {
      navigate("/adminlogin");
    } 
  }, []);
  return (
    <div>
      <div className="podcast_upload">
        <div className="container">
          <h5 className="text-center mb-5">Add Music</h5>
          <div className="row">
            <div className="col">
              <label className="Creator_Name_label text-light" for="">
                Music Title
              </label>
              <input
                type="text"
                placeholder='MusicTitle'
                class="form-control text-light"
                id="Creator_Name"
                name="MusicTitle"
                onChange={handleInputChnage}
                required
              ></input>
              <label className="Creator_Name_label" for="">
                Director Name
              </label>
              <input
                required
                type="text"
                class="form-control text-light"
                id="Creator_Name"
                placeholder="directorname"
                name="directorname"
                onChange={handleInputChnage}
              ></input>
              <label className="Creator_Name_label" for="">
                Film / Album
              </label>
              <input
                id="Creator_Name"
                type="text"
                class="form-control text-light"
                placeholder="film/album"
                name="filmoralbum"
                onChange={handleInputChnage}
                required
              ></input>

            </div>
            <div className="col">

            <label className="Creator_Name_label" for="">
              Cover Image
            </label>
            <input
               type="file"
               class="form-control"
               id="coverimg"
               placeholder=""
               name="image" 
               onChange={handleInputChnage}
               required
            ></input>
              <label className="Creator_Name_label" for="">
                Music Audio MP3
              </label>
              <input
                type="file"
                class="form-control text-light"
                id="audiofile"
                name="audio" 
                onChange={handleInputChnage}
                required
              ></input>
            </div>
          </div>
          <button className="btn btn-light ms-3 px-5 mt-5" onClick={handleSubmit}>Upload</button>
          <button className="btn btn-secondary ms-3 px-5 mt-5" onClick={handleCancel}>Cancel</button>

        </div>
      </div>
    </div>
  )
}

export default Addmusicform

