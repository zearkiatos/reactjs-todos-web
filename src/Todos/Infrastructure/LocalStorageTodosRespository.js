import TodosRepository from "../Domain/TodosRepository";
class LocalStorageTodosRepository extends TodosRepository {
    constructor(storageName) {
        super()
        this.storageName = storageName;
        const todosStorage = this.find();
        this.save(todosStorage);
    }

    save(todo) {
        localStorage.setItem(this.storageName, JSON.stringify(todo));
    }

    find() {
        const todos = localStorage.getItem(this.storageName) || '[]';
        const todosParsed = JSON.parse(todos);
        return todosParsed;
    }
}

export default LocalStorageTodosRepository;