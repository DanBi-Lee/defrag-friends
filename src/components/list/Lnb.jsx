import React from 'react';
import lnbStyles from './Lnb.module.css';

function Lnb () {
  return (
    <nav className={lnbStyles.lnb}>
    <p className={lnbStyles.welcomeMessage}>홍길동님, 환영합니다.</p>
    <button className={lnbStyles.btn}>
        <i className="fas fa-plus"></i> 새 친구 등록
    </button>
    <ul>
        <li>전체 친구 (42)</li>
        <li>게임 친구 (13)</li>
        <li>SNS 친구 (22)</li>
        <li>미분류 (17)</li>
    </ul>
    <button className={lnbStyles.btn}>
    <i className="fas fa-plus"></i> 카테고리 추가
    </button>
</nav>
  );
}

export default Lnb;