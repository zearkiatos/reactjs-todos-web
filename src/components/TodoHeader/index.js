import React from 'react';
const TodoHeader = ({ children, loading }) => {
    const renderChildren = () => {
        const childrenFormated = React.Children.toArray(children);
        return childrenFormated.map(child => React.cloneElement(child, {loading}));
    };
    return (
        <header>
            {renderChildren()}
        </header>
    );
}

export default TodoHeader;