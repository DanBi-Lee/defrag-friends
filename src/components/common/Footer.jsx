import React from 'react';
import footerStyles from './Footer.module.css';
import logo from '../../images/logo.svg';

function Footer () {
  return (
        <footer className={footerStyles.footBox}>
            <div className="wrapInner">
                <h1>
                    <img src={logo} alt="친구조각모음" width="124" />
                </h1>
                <nav className={footerStyles.inb}>
                    <div className={footerStyles.sns}>
                        <a href="https://github.com/DanBi-Lee/defrag-friends" rel = "noreferrer" target="_blank" title="깃허브">
                            <i className="fab fa-github"></i>
                            <span className="hidden">깃허브</span>
                        </a>
                        <a href="https://actually-i-am.tistory.com/" rel = "noreferrer" target="_blank" title="블로그">
                            <i className="fas fa-blog"></i>
                            <span className="hidden">블로그</span>
                        </a>
                    </div>
                    <a href="https://github.com/DanBi-Lee/defrag-friends" rel = "noreferrer" target="_blank">리소스 저작권 리스트</a>
                </nav>
                <small>
                    ⓒ 2021. Danbi-Lee All Rights Reserved.
                </small>
            </div>
        </footer>
  );
}

export default Footer;