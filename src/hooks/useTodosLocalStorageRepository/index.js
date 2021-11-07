import LocalStorageTodosRepository from "../../Todos/Infrastructure/LocalStorageTodosRespository";

const useTodosLocalStorageRepository = (itemName) => {
  let localStorageTodosRepository = new LocalStorageTodosRepository(itemName);

  let items = localStorageTodosRepository.find();

  const saveItems = (items) => localStorageTodosRepository.save(items);

  return [items, saveItems];
};

export default useTodosLocalStorageRepository;
