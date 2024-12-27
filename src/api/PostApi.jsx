import axios from "axios";

const apiPost=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
});

export const getPost=()=>{
    return apiPost.get("/posts");
};

export const deletePost=(id)=>{
    return apiPost.delete(`/posts/${id}`);
};