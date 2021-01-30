import React from 'react';
import logo from '../../images/logo.svg';
import headerStyles from './Header.module.css';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

function MainHeader ({setLoginModal, user}) {
  return (
    <header className={headerStyles.headBox}>
        <div className="wrapInner">
            <h1>
                <Link to="/">
                    <img src={logo} alt="친구조각모음" width="124" />
                </Link>
            </h1>
            <LoginButton setLoginModal={setLoginModal} user={user} />
        </div>
    </header>
  );
}

export default MainHeader;