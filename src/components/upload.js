import React from 'react';
import { useEffect } from 'react';
import './upload.css';
import axios from "axios"
import {Routes, Route,useNavigate} from 'react-router-dom'





const Upload=()=>{
    
    const navigate = useNavigate();
 
 const upload =  () => {
        axios.post("http://localhost:5000/upload")
        .then((response) => console.log(response.data));
        }

  const stop=()=>{
    navigate('/logout')
  }      

    return(
        <div>
       <button onClick={upload} >upload file</button>
       <br/>
       <button onClick={stop}>logOut</button>
        </div>
    )
}

export default Upload;