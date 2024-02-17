import { useContext } from "react";
import { LoadingContext } from "contexts/loadingContext";

const useLoading = () => {
  return useContext(LoadingContext);
};

export default useLoading;
