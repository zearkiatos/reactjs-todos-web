import React from "react";
import withStorageListener from "./withStorageListener";

const StorageChangeAlert = ({ show, toggleShow }) => {
  if (show) return <p>Was It changes?</p>;
};

const ChangeAlertWithStorageListener = withStorageListener(StorageChangeAlert);

export { StorageChangeAlert, ChangeAlertWithStorageListener };
