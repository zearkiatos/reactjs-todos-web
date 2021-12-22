import { useReducer } from "react";
import constants from "../../constants";
import { STORAGE_TYPES } from "../../types";

const initialState = {
  storageChange: false
};

const useStorageListener = (sincronizeTodos) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onStorageChange = (change) => dispatch({
    type: STORAGE_TYPES.LOADING,
    payload: change
  });

  const { storageChange } = state;
  // const [storageChange, setStorageChange] = useState(false);
  window.addEventListener("storage", (change) => {
    if (change.key === constants.STORAGE_NAME) {
      onStorageChange(true);
    }
  });
  const toggleShow = () => {
    sincronizeTodos();
    onStorageChange(false);
  };
  return {
    show: storageChange,
    toggleShow
  };
};

const reducerObject = (state, payload) => ({
  [STORAGE_TYPES.LOADING]: {
    ...state,
    loading: payload
  }
});

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;

export default useStorageListener;
