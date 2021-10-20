import axios from "axios";


const BASE_API_URL =
    window.document.location.protocol +
    "//" +
    window.document.location.host +
    "/api";

export const NewsAPI = {
    getAllNews: () => {
       return axios.get(`${BASE_API_URL}/news`)
    },
    getOneNews: (id) => {
       return axios.get(`${BASE_API_URL}/news/${id}/edit`)
    },
    addNews: (fData) => {
       return axios.post(`${BASE_API_URL}/news`, fData)
    },
    updateNews: (news, id) => {
       return axios.put(`${BASE_API_URL}/news/${id}`, news)
    },
    deletedNews: (id) => {
       return axios.delete(`${BASE_API_URL}/news/${id}`)
    },
};
export const EventAPI = {
    getAllEvent: () => {
       return axios.get(`${BASE_API_URL}/events`)
    },
    getOneEvent: (id) => {
       return axios.get(`${BASE_API_URL}/events/${id}/edit`)
    },
    addEvent: (fData) => {
       return axios.post(`${BASE_API_URL}/events`, fData)
    },
    updateEvent: (eventFile, id) => {
       return axios.put(`${BASE_API_URL}/events/${id}`, eventFile)
    },
    deletedEvent: (id) => {
       return axios.delete(`${BASE_API_URL}/events/${id}`)
    },
};

