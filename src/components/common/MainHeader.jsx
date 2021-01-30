import React from 'react';
import logo from '../../images/logo.svg';
import headerStyles from './Header.module.css';
import { Link } from 'react-router-dom';

function MainHeader ({setLoginModal}) {
    const openLoginModal = () => {
        setLoginModal(()=>true);
    }

  return (
    <header className={headerStyles.headBox}>
        <div className="wrapInner">
            <h1>
                <Link to="/">
                    <img src={logo} alt="친구조각모음" width="124" />
                </Link>
            </h1>
            <button className="btn-login" onClick={openLoginModal}>
                로그인
            </button>
        </div>
    </header>
  );
}

export default MainHeader;