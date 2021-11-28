import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/App";

const App = (props) => {
    return (
        <h1>{props.greeting}, {props.name}</h1>
    );
};


const withGreeting = (WrappedComponent) => {
    return function WrappedComponentWithGreeting(greeting) {
        return function component(props) {
            return (
                <Fragment>
                    <WrappedComponent {...props} greeting={greeting} />
                    <p>Estamos Acompañando al WrappedComponent</p>
                </Fragment>
            )
        }
    }
}

const AppWithGreeting = withGreeting (App)('Buenas!');

ReactDOM.render(<AppWithGreeting name='Pedro' />, document.getElementById("root"));