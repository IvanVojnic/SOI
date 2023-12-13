import React from "react";
import {Link} from "react-router-dom";
const SignInErrorModal = () => {

    return (
        <>
            <p>
                Ошибка! Пользователь не зарегистрирован.<br/>Пожалуйста, пройдите регистрацию.
            </p>
            <Link to="/home">Войти</Link>
        </>
    )
}

export default SignInErrorModal