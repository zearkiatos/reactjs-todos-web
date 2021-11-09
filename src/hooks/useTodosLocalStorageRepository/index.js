import { useEffect, useState } from "react";
import LocalStorageTodosRepository from "../../Todos/Infrastructure/LocalStorageTodosRespository";

const useTodosLocalStorageRepository = (itemName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});
  let localStorageTodosRepository = new LocalStorageTodosRepository(itemName);
  let items = [];
  const saveItems = (items) => {
    try {
      localStorageTodosRepository.save(items);
    } catch (ex) {
      setError(ex);
    }
  };
  useEffect(() => {
    try {
      setTimeout(() => {
        items = localStorageTodosRepository.find();
        setLoading(false);
      }, 5000);
    } catch (ex) {
      setError(ex);
    }
  });

  return { items, saveItems, loading, error };
};

export default useTodosLocalStorageRepository;
