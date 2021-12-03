import React from "react";
import withStorageListener from "./withStorageListener";
import Refresh from "../Refresh";
import Modal from '../Modal';

const StorageChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    const onClickHandle = () => {
      toggleShow();
    };
    return (
      <Modal openModal={show}>
        <Refresh onClick={onClickHandle} />
      </Modal>
    );
  } else {
    return null;
  }
};

const ChangeAlertWithStorageListener = withStorageListener(StorageChangeAlert);

export { StorageChangeAlert, ChangeAlertWithStorageListener };
