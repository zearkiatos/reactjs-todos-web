import { Fragment } from 'react';
import './Error.css';
const Error = ({ error }) => {
    return (
        <Fragment>
            <h1>Boom! 💣 Something was wrong! 😱...Try again</h1>
            {error && <div className="error-container">
                <h3>
                    Some error description
                </h3>
                {error.message && <p>
                    {error.message}
                </p>}
            </div>}
        </Fragment>
    )
}

export default Error;