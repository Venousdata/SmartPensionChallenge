import axios from "axios";
import { axiosConfigGet } from "./config";

export const get = async (url: string) => {
  try {
    const { data } = await axios.get(url, axiosConfigGet);
    return data;
  } catch (error) {
    console.log(error);
  }
};
