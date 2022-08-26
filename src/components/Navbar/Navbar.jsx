import React from 'react'
import { NavLink } from 'react-router-dom'
import S from './Navbar.module.css'

/*let S = {
    'nav' : 'Navbar_nav__DS', // getting from css web inspector
    'item': 'Navbar_item__Ccd2B'// getting from css web inspector
    'active' 'Navbar_item_ccv3737// getting from css (web inspector)
    <div className={`${S.item} ${S.active}`}>  concatanation for Messages
}*/
const activeLink = ({ isActive }) => isActive ? S.active : S.item
const Navbar = () => {
    return (
        <nav className={S.nav}>

            <div className={S.item}>
                <NavLink to='/profile' className={activeLink}> Profile</NavLink>
            </div>
            <div className={`${S.item} ${S.active}`}>  
           
                <NavLink to= '/dialogs' className={activeLink}>Messages</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to='/news' className={activeLink} >News</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to='/music' className={activeLink} >Music</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to='/settings' className={activeLink} >Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar
