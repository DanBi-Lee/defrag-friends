import React from 'react';
import { Link } from 'react-router-dom';
import visualStyles from './VisualBox.module.css';
import people1 from '../../images/illust/people1.svg';
import people2 from '../../images/illust/people2.svg';
import vectorImage1 from '../../images/illust/vectorImage1.png';
import vectorImage2 from '../../images/illust/vectorImage2.png';

function VisualBox () {
  return (
    <section className={visualStyles.visualBox}>
    <div className="wrapInner">
        <h1>
            친구 조각 모음
        </h1>
        <p className={visualStyles.desc}>
            회사 동료, 학교 친구, 게임 그룹, 온라인 친구들을 손쉽게 정리해보세요. 친구 조각 모음으로 나의 인간관계 리스트를 확인할 수 있어요.
        </p>
        <Link className={visualStyles.btnStart} to="friend">바로 시작하기</Link>
    </div>
    <div className={visualStyles.decoration}>
        <img className={visualStyles.decoLeftShape} src={vectorImage2} alt=""/>
        <img className={visualStyles.decoRightShape} src={vectorImage1} alt=""/>
        <img className={visualStyles.decoLeftPeople} src={people2} alt="" width="500" />
        <img className={visualStyles.decoRightPeople} src={people1} alt="" width="660" />
    </div>
</section>
  );
}

export default VisualBox;