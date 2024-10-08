import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://e-commerce-server-eight-fawn.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;