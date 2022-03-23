import axios from "axios"


const http = axios.create({
  browserBaseURL: "http://app:8080",
});


export default http