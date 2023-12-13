import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebarLinkBox">
            <Link to="/">Главная</Link>
            <Link to="/requests">Заявки</Link>
            <Link to="/products">Товары</Link>
            <Link to="/news">Новости</Link>
            <Link to="/clients">Клиенты</Link>
        </div>
    );
}

export default Sidebar;