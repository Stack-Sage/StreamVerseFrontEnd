import React from 'react'
import { TakesContext } from '@/context/hotTakeContext';
import {
   getAllTakesApi,
   getUserTakesApi,
   updateHotTakeApi,
   deleteHotTakeApi,
   rateMidTakeApi,
   rateCapTakeApi,
   rateFactsTakeApi,
   createHotTakeApi } from '@/services/hotTake.service';
import { showSuccess } from '../ui/toast';

import { useContext } from 'react';

   const handleTakes = () => {
  const { takes, setTakes, userTakes, setUserTakes } = useContext(TakesContext);

  const fetchAllTakes = async () => {
   try {

      const response = await getAllTakesApi();
      console.log(response.data ,'takes');
      setTakes(response.data);
      return response.data;
   } catch (error) {
      console.error(error);
   }
  }

  const fetchUserTakes = async (userId) => {
    try {
      const response = await getUserTakesApi(userId);
      console.log(response.data, 'user takes');
      setUserTakes(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const updateHotTake = async (takeId, content) => {
    try {
      const response = await updateHotTakeApi(takeId, content);
      console.log(response.data, 'updated take');
      fetchAllTakes();
   showSuccess("Hot take updated successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
   const deleteHotTake = async (takeId) => {
      try {
        const response = await deleteHotTakeApi(takeId);
        console.log(response.data, 'deleted take');
        fetchAllTakes();
        showSuccess("Hot take deleted successfully!");
        return response.data;
      } catch (error) {
        console.error(error);
      }
  }

  const rateMidTake = async (takeId) => {
    try {
      const response = await rateMidTakeApi(takeId);
      console.log(response.data, 'rated mid take');
      fetchAllTakes();  
      showSuccess("Hot take rated mid !!");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
   const rateCapTake = async (takeId) => {
    try {
      const response = await rateCapTakeApi(takeId);
      console.log(response.data, 'rated cap take');
      fetchAllTakes();
      showSuccess("Hot take rated Cap !");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const rateFactsTake = async (takeId) => {
    try {
      const response = await rateFactsTakeApi(takeId);
      console.log(response.data, 'rated facts take');
      fetchAllTakes();
      showSuccess("Hot take rated Facts !!!");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

   const createHotTake = async (content) => {
      try {
         const response = await createHotTakeApi(content);
         console.log(response.data, 'created take');
         setTakes((prevTakes) => [response.data, ...prevTakes]);
         showSuccess("Hot take created successfully!");
         return response.data;
      } catch (error) {
         console.error(error);
      }
   }

  return {
      fetchAllTakes,
      fetchUserTakes,
      updateHotTake,
      deleteHotTake,
      rateMidTake,
      rateCapTake,
      rateFactsTake,
      createHotTake
  }
}

export default handleTakes

