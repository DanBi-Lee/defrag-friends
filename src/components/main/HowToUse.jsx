import React from 'react';
import videoHowToUse from '../../videos/howToUse.mp4';
import howToUseStyles from './HowToUse.module.css';

function HowToUse () {
  return (
      <section className={howToUseStyles.howToUse}>
          <div className="wrapInner">
            <div className={howToUseStyles.explanation}>
                <h1 className={howToUseStyles.title}>간단한 사용법</h1>
                <div>
                    <p>친구 정보를 적고 등록하면 끝</p>
                    <p>카테고리 별로 정리할 수도 있습니다.</p>
                </div>
            </div>
            <video className={howToUseStyles.video} src={videoHowToUse} autoPlay muted loop></video>
          </div>
      </section>
  );
}

export default HowToUse;