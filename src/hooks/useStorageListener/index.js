import { useState } from "react";
import constants from "../../constants";

const useStorageListener = (sincronizeTodos) => {
  const [storageChange, setStorageChange] = useState(false);
  window.addEventListener("storage", (change) => {
    if (change.key === constants.STORAGE_NAME) {
      setStorageChange(true);
    }
  });
  const toggleShow = () => {
    sincronizeTodos();
    setStorageChange(false);
  };
  return {
    show: storageChange,
    toggleShow
  };
};

export default useStorageListener;
