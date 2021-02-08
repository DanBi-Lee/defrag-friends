import React from 'react';
import { Link } from 'react-router-dom';
import ModalBox from '../templates/ModalBox';
import LoadingStyles from './Loading.module.css';

function LoadingSuccess ({setLoading}) {
  const onBack = () => {
    setLoading(()=>'ready');
  }

  return (
      <ModalBox>
          <section>
              <p className={LoadingStyles.message}>친구 저장 완료</p>
              <div className={LoadingStyles.btnBox}>
                <button className={LoadingStyles.btn} onClick={onBack}>더 많은 친구</button>
                <Link className={`${LoadingStyles.btn} ${LoadingStyles.point}`} to="/list">친구 리스트</Link>
              </div>
          </section>
      </ModalBox>
  );
}

export default LoadingSuccess;