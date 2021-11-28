import { useState } from "react";

const withStorageListener = (WrappedComponent) => {
  return function WrapperComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);
    return (
        <WrappedComponent 
            show={storageChange}
            toggleShow={setStorageChange}
        />
    );
  };
};

export default withStorageListener;
