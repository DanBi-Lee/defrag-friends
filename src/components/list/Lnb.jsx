import React from 'react';
import lnbStyles from './Lnb.module.css';

function Lnb ({friendList, categoryList, name, addCategory}) {
  return (
    <nav className={lnbStyles.lnb}>
    <p className={lnbStyles.welcomeMessage}>{name}님, 환영합니다.</p>
    <button className={lnbStyles.btn}>
        <i className="fas fa-plus"></i> 새 친구 등록
    </button>
    <p>
      전체 친구 ({friendList.length}명)
    </p>
    <ul>
      {
        categoryList.map(category=><li key={category}>{category}</li>)
      }
    </ul>
    <button className={lnbStyles.btn} onClick={addCategory}>
    <i className="fas fa-plus"></i> 카테고리 추가
    </button>
</nav>
  );
}

export default Lnb;