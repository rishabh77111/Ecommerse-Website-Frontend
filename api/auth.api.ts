//* login

import { TLogin } from "@/types/auth.types";
import axios from "axios";

export const login=async(data:TLogin)=>{
    try {
        const response=await axios.post('http://localhost:9001/api/auth/login',data);
        console.log(response.data);
        return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        console.log(error);
        throw error?.response.data;  //backend bata send gareko reponse error
    }
}