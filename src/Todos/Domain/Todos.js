class Todos {
    constructor() {
        this.text = '';
        this.completed = false;
    }

    constructor(text, completed) {
        this.text = text;
        this.completed = completed;
    }
    setText(text) {
        this.text = text;
    }

    getText() {
        return this.text;
    };

    setCompleted(completed) {
        this.completed = completed;
    }

    getCompleted() {
        return this.completed;
    };
}

export default Todos;