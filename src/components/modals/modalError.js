import React from "react";
import {Link} from "react-router-dom";
const ErrorModal = () => {

    return (
        <>
            <p>
                Что-то пошло не так.
            </p>
            <Link to="/home">Войти</Link>
        </>
    )
}

export default ErrorModal;