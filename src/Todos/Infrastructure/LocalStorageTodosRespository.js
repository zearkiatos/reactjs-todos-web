import TodosRepository from "../Domain/TodosRepository";
class LocalStorageTodosRepository extends TodosRepository {
    constructor(storageName) {
        super()
        this.storageName = storageName;
        const todosStorage = this.find();
        this.save(todosStorage);
    }

    save(todos) {
        localStorage.setItem(this.storageName, JSON.stringify(todos));
    }

    add(todo) {
        const todos = localStorage.getItem(this.storageName) || '[]';
        const todosParsed = JSON.parse(todos);
        const newTodos = [...todosParsed, {
            completed: false,
            text: todo.text
        }];
        localStorage.setItem(this.storageName, JSON.stringify(newTodos));
        return newTodos;
    }

    find() {
        const todos = localStorage.getItem(this.storageName) || '[]';
        const todosParsed = JSON.parse(todos);
        return todosParsed;
    }
}

export default LocalStorageTodosRepository;