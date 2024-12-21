import axios from "axios"


const instance = axios.create({
    baseURL: 'https://job-portal-server-for-recruiter-part3-flax-two.vercel.app',
    withCredentials: true,
})
export default function useAxiosSecure() {
    return instance;
}
