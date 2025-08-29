import { showInfo } from "@/components/ui/toast";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const registerUserApi = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/register`,
      userData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const loginUserApi = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/login`,
      userData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
 
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logoutUserApi = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/logout`,
      {},
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const changePasswordApi = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/change-password`,
      userData,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateAccountApi = async (data) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/users/update-account`,
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateAvatarApi = async (file) => {
  try {
   
    const formData = new FormData();
    formData.append("avatar", file);
    const response = await axios.patch(
      `${BASE_URL}/users/update-avatar`,
      formData,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
      
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateCoverImageApi = async (file) => {
  try {
    const formData = new FormData();
    formData.append("coverImage", file);
    const response = await axios.patch(
      `${BASE_URL}/users/update-coverImage`,
      formData,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCurrentUserApi = async()=>{
  try{
    const response = await axios.get(
      `${BASE_URL}/users/current-user`,
      {withCredentials:true}
    )
    return response.data;
  }
  catch(error){
    throw error;
  }

}

export {
  registerUserApi,
  loginUserApi,
  updateAccountApi,
  updateAvatarApi,
  updateCoverImageApi,
  logoutUserApi,
  changePasswordApi,
  getCurrentUserApi
};
