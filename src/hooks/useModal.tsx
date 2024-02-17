import { useContext } from "react";
import { ModalContext } from "contexts/modalContext";

const useModal = () => {
  return useContext(ModalContext);
};

export default useModal;
