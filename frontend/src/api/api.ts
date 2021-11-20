import axios from "axios";
import { axiosConfigGet, axiosConfigPost } from "./config";

export const get = async (url: string) => {
  try {
    const { data } = await axios.get(url, axiosConfigGet);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const post = async (url: string, body: any) => {
  try {
    const {data} = await axios.post(url, body, axiosConfigPost);
    return data;
  } catch (error: any) {
    if(error.response?.data) {
      alert(error.response.data);
    }
  }
};