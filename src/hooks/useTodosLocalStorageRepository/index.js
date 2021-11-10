import { useState } from "react";
import LocalStorageTodosRepository from "../../Todos/Infrastructure/LocalStorageTodosRespository";

const useTodosLocalStorageRepository = (itemName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  let localStorageTodosRepository = new LocalStorageTodosRepository(itemName);
  const saveItems = (items) => {
    try {
      localStorageTodosRepository.save(items);
    } catch (ex) {
      setError(ex);
    }
  };

  const findItems = () => {
    let todos = [];
    try {
      todos = localStorageTodosRepository.find(items);
    } catch (ex) {
      setError(ex);
    }
    return todos;
  };

  setTimeout(() => {
    let items = findItems();
    setItems(items)
    setLoading(false);
  }, 5000);


  return { items, findItems, saveItems, loading, error };
};

export default useTodosLocalStorageRepository;
