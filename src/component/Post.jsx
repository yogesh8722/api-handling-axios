"use client"
import { deletePost, getPost } from '@/api/PostApi'
import React, { useEffect, useState } from 'react'

const Post = () => {
    const [user,setUser]=useState([])
    const getData=async()=>{
        const res=await getPost()
        setUser(res.data)
      }

      const handleDelete= async(id)=>{
       try {
        const res = await deletePost(id);
        if(res.status === 200){
            const newUpdatePost=user.filter((curPost)=>{
                return curPost.id !== id;
            });
            setUser(newUpdatePost)
        }
       } catch (error) {
        console.log(error)
       }
      }

      useEffect(()=>{
          getData()
      },[])
  return (
    <>
    <ul>
      {user && user.map((item)=>{
            const {id,body,title}=item;
            return(
            <li key={id}>
                <p style={{marginLeft:"10px"}}>title : {title}</p>
                <p style={{marginLeft:"10px"}}>body : {body}</p>
                <button style={{background:"gray",borderRadius:"4px",padding:"4px",marginLeft:"10px"}}>Edit</button>
                <button style={{background:"gray",borderRadius:"4px",padding:"4px",marginLeft:"10px"}} onClick={()=>handleDelete(id)}>Delete</button>
            </li>)
})}
        </ul>
    </>
  )
}

export default Post