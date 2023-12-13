import React, {useState} from "react";
import SignUpRequest from "../core/API/API";
import SignUpSuccessModal from "./modals/modalSignUpSuccess";
import ErrorModal from "./modals/modalError";
const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [post, setPost] = useState('')
    const [company, setCompany] = useState('')
    const [city, setCity] = useState('')
    const [companyAddress, setCompanyAddress] = useState('')
    const [TIN, setTIN] = useState('')
    const [CEOfullName, setCEOfullName] = useState('')
    const [website, setWebsite] = useState('')
    const [isCooperate, setIsCooperate] = useState(false)
    const [activity, setActivity] = useState('')
    const [email, setEmail] = useState('')
    const [okModal, setOkModal] = useState(false)

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleMiddleNameChange = (e) => {
        setMiddleName(e.target.value);
    };

    const handlePostChange = (e) => {
        setPost(e.target.value);
    };

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleCompanyAddressChange = (e) => {
        setCompanyAddress(e.target.value);
    };

    const handleTINChange = (e) => {
        setTIN(e.target.value);
    };

    const handleCEOfullNameChange = (e) => {
        setCEOfullName(e.target.value);
    };

    const handleWebsiteChange = (e) => {
        setWebsite(e.target.value);
    };

    const handleIsCooperateChange = (e) => {
        setIsCooperate(e.target.value);
    };

    const handleActivityChange = (e) => {
        setActivity(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setMiddleName('');
        setPost('');
        setCompany('');
        setCity('');
        setCompanyAddress('');
        setTIN('');
        setCEOfullName('');
        setWebsite('');
        setIsCooperate(false);
        setActivity('');
        setEmail('');
    };

    const onSubmitHandler = async () => {
        const user = {
            firstName,
            lastName,
            middleName,
            post,
            email,
            company,
            city,
            companyAddress,
            TIN,
            CEOfullName,
            website,
            isCooperate,
            activity
        }
        let response = await SignUpRequest(user)
        if (response) {
            setOkModal(true)
        }
    }

    return (
        <>
            <h1>SOI</h1>
            <form>
                <div>
                    <label htmlFor="firstName">Имя:</label>
                    <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange}/>
                    <label htmlFor="lastName">Фамилия:</label>
                    <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange}/>
                    <label htmlFor="middleName">Отчество:</label>
                    <input type="text" id="middleName" value={middleName} onChange={handleMiddleNameChange}/>
                    <label htmlFor="post"></label>
                    <input type="text" id="post" value={post} onChange={handlePostChange}/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange}/>
                    <label htmlFor="company">Юридическая компания</label>
                    <input type="text" id="company" value={company} onChange={handleCompanyChange}/>
                </div>

                <div>
                    <label htmlFor="city">Город</label>
                    <input type="text" id="city" value={city} onChange={handleCityChange}/>
                    <label htmlFor="companyAddress">Юридический адрес</label>
                    <input type="text" id="companyAddress" value={companyAddress} onChange={handleCompanyAddressChange}/>
                    <label htmlFor="TIN">ИНН</label>
                    <input type="text" id="TIN" value={TIN} onChange={handleTINChange}/>
                    <label htmlFor="CEOfullName">ФИО Генерального директора</label>
                    <input type="text" id="CEOfullName" value={CEOfullName} onChange={handleCEOfullNameChange}/>
                    <label htmlFor="website">Web-сайт</label>
                    <input type="text" id="website" value={website} onChange={handleWebsiteChange}/>
                    <label htmlFor="isCooperate">Вы уже сотрудничаете с SOI.BY</label>
                    <input type="checkbox" id="isCooperate" value={isCooperate} onChange={handleIsCooperateChange}/>
                    <label htmlFor="activity">Основные направления деятельности</label>
                    <input type="text" id="activity" value={activity} onChange={handleActivityChange}/>
                </div>
                <button type="submit" onSubmit={onSubmitHandler}>Регистрация</button>
            </form>
            {okModal ? <SignUpSuccessModal/> : <ErrorModal/>}
        </>
    )
}

export default SignUp