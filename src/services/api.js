import axios from 'axios';


const API_URI="https://hireharbor-backend.onrender.com";

export const saveData=async(data)=>{
    try {
        const response = await axios.post(`${API_URI}/save`, data);
        return response.data;
    } catch (error) {
        console.error("Error while fecthing the API:",error.message);
        return error.response.data;
    }
}

export const getData=async()=>{
    try {
        const response=await axios.get(`${API_URI}/get`);
        return response.data;
    } catch (error) {
        console.error("Error while getting the API Data:",error.message);
    }
}
