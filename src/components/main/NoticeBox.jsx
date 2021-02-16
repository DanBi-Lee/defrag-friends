import React from 'react';
import noticeBoxStyles from './NoticeBox.module.css';
import complain from '../../images/complain.svg';

function NoticeBox () {
  return (
      <section className={noticeBoxStyles.noticeBox}>
          <div className="wrapInner">
                <img className={noticeBoxStyles.icon} src={complain} alt=""/>
                <div className="text">
                    <h1 className={noticeBoxStyles.title}>주의사항</h1>
                    <p>리액트 연습용으로 만든 사이트입니다.</p>
                    <p>입력한 데이터는 서버에 저장됩니다.</p>
                    <p>중요한 정보를 작성하지 않도록 주의해주세요.</p>
                </div>
          </div>
      </section>
  );
}

export default NoticeBox;