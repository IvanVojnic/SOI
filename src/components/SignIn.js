import React, {useState} from "react";
const SignIn = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isSaveData, setIsSaveData] = useState(false)

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleIsSaveDataChange = (e) => {
        setIsSaveData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin('');
        setPassword('');
        setIsSaveData(false);
    };

    return (
        <>
            <h1>SOI</h1>
            <form>
                <div>
                    <label htmlFor="login">Логин</label>
                    <input type="text" id="login" value={login} onChange={handleLoginChange}/>
                    <label htmlFor="password">Пароль</label>
                    <input type="text" id="password" value={password} onChange={handlePasswordChange}/>
                    <label htmlFor="isSaveData">Запомнить мои данные</label>
                    <input type="checkbox" id="isSaveData" value={isSaveData} onChange={handleIsSaveDataChange}/>
                </div>

                <button type="submit">Войти</button>
            </form>
        </>
    )
}

export default SignIn;