import { useState } from "react";
import constants from '../../constants'

const withStorageListener = (WrappedComponent) => {
  return function WrapperComponentWithStorageListener({ sincronizeTodos }) {
    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener('storage', (change) => {
        if(change.key === constants.STORAGE_NAME) {
            console.log(`It was change in ${constants.STORAGE_NAME}`);
            setStorageChange(true)
        }
    });
    const toggleShow = () => {
        sincronizeTodos();
        setStorageChange(false);
    }
    return (
        <WrappedComponent 
            show={storageChange}
            toggleShow={toggleShow}
        />
    );
  };
};


export default withStorageListener;
