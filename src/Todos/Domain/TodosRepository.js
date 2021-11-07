class TodosRepository {
    save(todo) {
        throw new Error('Abstract Method has no implementation');
    }

    find() {
        throw new Error('Abstract Method has no implementation');
    }
}

export default TodosRepository;