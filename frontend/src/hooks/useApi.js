import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (apiFunc, options = {}) => {
    const {
      showSuccessToast = false,
      successMessage = "Success!",
      showErrorToast = true,
      onSuccess,
      onError,
    } = options;

    setLoading(true);
    setError(null);

    try {
      const response = await apiFunc();
      
      if (showSuccessToast) {
        toast.success(successMessage);
      }
      
      if (onSuccess) {
        onSuccess(response.data);
      }
      
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = 
        err.response?.data?.errors || 
        err.response?.data?.error ||
        err.message || 
        "Something went wrong";
      
      setError(errorMessage);
      
      if (showErrorToast) {
        if (Array.isArray(errorMessage)) {
          errorMessage.forEach(msg => toast.error(msg));
        } else {
          toast.error(errorMessage);
        }
      }
      
      if (onError) {
        onError(errorMessage);
      }
      
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  return { loading, error, callApi };
};

export default useApi;
