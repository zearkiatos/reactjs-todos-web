import { Fragment } from 'react';
import TodoCounter from '../TodoCounter';
import TodoSearch from '../TodoSearch';

const TodoHeader = () => {
    return (
        <Fragment>
            <TodoCounter />
            <TodoSearch />
        </Fragment>
    )
}

export default TodoHeader;