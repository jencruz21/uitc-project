import axios from "axios";
import authHeader from "./authHeader";

export const fetchConcerns = () => {
    return axios.get("http://localhost:3005/concerns", {headers: authHeader()});
}

export const fetchConcern = (id) => {
    return axios.get(`http://localhost:3005/concern/${id}`, {headers: authHeader()});
}

export const emailConcern = (to, from, subject, text) => {
    const date = new Date().toLocaleString();
    return axios.post("http://localhost:3005/send", {data: {
        to: to,
        from: from,
        subject: subject,
        text: text,
        created_at: date
    }});
}