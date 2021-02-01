import React from 'react';
import DataService from '../../service/data_service';
import lnbStyles from './Lnb.module.css';

function Lnb ({user}) {
  const name = user.displayName;
  const dataService = new DataService();
  const addCategory = () => {
    dataService.addCategory(user, '미분류').then(console.log);
  }

  return (
    <nav className={lnbStyles.lnb}>
    <p className={lnbStyles.welcomeMessage}>{name}님, 환영합니다.</p>
    <button className={lnbStyles.btn}>
        <i className="fas fa-plus"></i> 새 친구 등록
    </button>
    <ul>
        <li>전체 친구 (42)</li>
        <li>게임 친구 (13)</li>
        <li>SNS 친구 (22)</li>
        <li>미분류 (17)</li>
    </ul>
    <button className={lnbStyles.btn} onClick={addCategory}>
    <i className="fas fa-plus"></i> 카테고리 추가
    </button>
</nav>
  );
}

export default Lnb;