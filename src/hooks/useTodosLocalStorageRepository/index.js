import LocalStorageTodosRepository from "../../Todos/Infrastructure/LocalStorageTodosRespository";

const useTodosLocalStorageRepository = (itemName) => {
  let localStorageTodosRepository = new LocalStorageTodosRepository(itemName);
  const save = (todos) => {
    try {
      localStorageTodosRepository.save(todos);
    } catch (ex) {
      throw ex;
    }
  };

  const find = () => {
    try {
      const todos = localStorageTodosRepository.find();
      return todos;
    } catch (ex) {
      throw ex;
    }
  }


  return { save, find };
};

export default useTodosLocalStorageRepository;
