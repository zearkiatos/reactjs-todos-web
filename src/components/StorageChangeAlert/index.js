import React from "react";
import withStorageListener from "./withStorageListener";
import useTodosLocalStorageRepository from "../../hooks/useTodosLocalStorageRepository";
import constants from "../../constants";

const StorageChangeAlert = ({ show, toggleShow }) => {
  const { find } = useTodosLocalStorageRepository(constants.STORAGE_NAME);
  if (show) {
    const onClickHandle = () => {
      toggleShow();
    };
    return (
      <div>
        <p>Was It changes?</p>
        <button onClick={onClickHandle}>
          Loading the information Again
        </button>
      </div>
    );
  } else {
    return null;
  }
};

const ChangeAlertWithStorageListener = withStorageListener(StorageChangeAlert);

export { StorageChangeAlert, ChangeAlertWithStorageListener };
