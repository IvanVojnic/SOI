import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [application, setApplication] = useState('')
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    const handleApplicationChange = (e) => {
        setApplication(e.target.value);
    };

    return (
        <header>
            <div style={searchInputStyles} className={`search-input ${isFocused ? 'focused' : ''}`}>
                <input
                    type="text"
                    placeholder="Поиск заявок"
                    value={application}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleApplicationChange}
                />
                {!isFocused && (
                    <FontAwesomeIcon icon={faSearch} style={searchIconStyles} className="search-icon"/>
                )}
            </div>
            <div>
                <FontAwesomeIcon icon={faBell} className="bell-icon" />
                <FontAwesomeIcon icon="far fa-user"/>
                <span>Имя Фамилия</span>
            </div>
        </header>
    )
}

const searchInputStyles = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
};

const searchIconStyles = {
    position: 'absolute',
    right: '5px',
    color: 'gray',
};

