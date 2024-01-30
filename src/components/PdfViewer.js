import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from './Spinner';

function PdfViewer() {
  const navigate = useNavigate()
  useEffect(() => {
    const checkLogin = () => {
      if (!localStorage.getItem("auth_token")) {
        navigate("/login");
      }
    };
    checkLogin();
  });
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true)
    axios.post("/api/post/getPostById",{id},{
      headers: {
        Authorization: "auth " + localStorage.getItem("auth_token"),
      }
    })
    .then((res)=>{
      const {data} = res;
      setLoading(false);
      const link = data.post.link;
     const  newLink = link.replace("view","preview")
    
     axios.post("/api/post/postView",{
      id:id
     },{
      headers:{
        Authorization:"auth "+localStorage.getItem("auth_token")
      }
     })
     .then((res)=>{
      console.log(res);
     })
     .catch((err)=>{
      console.log(err);
     })
      // console.log(newLink)
      setLink(newLink);
      // console.log(data.post.link)
    })
    .catch((err)=>{
      alert(err)
      setLoading(false);
    })
  },[id])
  return (
    <>
    {loading ? <Spinner /> : ""}
  
    <iframe src={link}></iframe>
    
  
    
    </>
  )
}

export default PdfViewer