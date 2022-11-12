import React from 'react'
import { NavLink } from 'react-router-dom'
import S from './Header.module.css'

const Header = (props) => {
    return <header className={S.header}>
        <img src=' https://seeklogo.com/images/B/business-company-logo-32B09603F1-seeklogo.com.png' />
        <div className={S.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}> Login </NavLink>}
        </div>
    </header>
}
export default Header

// https://seeklogo.com/images/B/business-company-logo-32B09603F1-seeklogo.com.png

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEvOoqxAiLpntuYC-cwUkNUB3Y5WTWccJiw&usqp=CAU