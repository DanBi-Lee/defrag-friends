import React from 'react';
import logo from '../../images/logo.svg';
import headerStyles from './Header.module.css';
import { Link } from 'react-router-dom';

function SubHeader () {
  return (
    <header className={`${headerStyles.headBox} ${headerStyles.sub}`}>
        <div className="wrapInner">
            <h1>
                <Link to="/">
                    <img src={logo} alt="" width="124" />
                </Link>
            </h1>
            <form className={headerStyles.searchBox}>
                <input type="text"/>
                <button>
                    <i className="fas fa-search"></i>
                    <span className="hidden">검색</span>
                </button>
            </form>
            <button className="btn-login">
                로그아웃
            </button>
        </div>
    </header>
  );
}

export default SubHeader;