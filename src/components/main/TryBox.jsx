import React from 'react';
import { Link } from 'react-router-dom';
import tryBoxStyles from './TryBox.module.css';

function TryBox () {
  return (
      <section className={tryBoxStyles.tryBox}>
          <h1 className={tryBoxStyles.title}>지금 바로 시작할 수 있습니다!</h1>
          <Link to="/friend" className={tryBoxStyles.btn}>친구 만들기</Link>
      </section>
  );
}

export default TryBox;