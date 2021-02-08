import React from 'react';
import ModalBox from '../templates/ModalBox';
import loadingSpinner from '../../images/loadingSpinner.svg';
import LoadingStyles from './Loading.module.css';

function Loading () {
  return (
      <ModalBox>
          <section>
                <p className={LoadingStyles.message}>
                  저장중
                </p>
                <img className={LoadingStyles.loadingSpinner} src={loadingSpinner} alt="로딩 스피너"/>
          </section>
      </ModalBox>
  );
}

export default Loading;