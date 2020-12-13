import React from 'react';
import './header.styles.scss'

import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Profile} from '../../assets/profile.svg'
import {Link} from 'react-router-dom';

const Header=()=>(
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className='logo'/>
            <span> Intugine</span>
        </Link>
        <div className="options">
            <Link className="option" to='/home'>Home</Link>
            <Link className="option" to="/brands">Brands</Link>
            <Link className="option" to='/transporters'>Transporters</Link>
            <Profile className="profile circle"/>
        </div>
    </div>
)

export default Header;