import React from 'react';
import cardStyles from './Card.module.css';

function Card ({friendInfo}) {
  return (
      <div className={cardStyles.card}>
            <img src={friendInfo.thumb} alt="" className={cardStyles.thumb}/>
            <div className={cardStyles.nameBox}>
                <p className={cardStyles.name}>{friendInfo.name}</p>
                <p className={cardStyles.nickname}>{friendInfo.nickname}</p>
                <p className={cardStyles.birthday}>생일 : {friendInfo.birthday}</p>
            </div>
            <div className={cardStyles.subInfo}>
                <p className={cardStyles.tel}>{friendInfo.tel}</p>
                <p className={cardStyles.email}>{friendInfo.email}</p>
            </div>
            <ul className={cardStyles.snsBox}>
                <li>인스타그램 : {friendInfo.instagram}</li>
                <li>카카오톡 : {friendInfo.kakaotalk}</li>
                <li>트위터 : {friendInfo.twitter}</li>
                <li>페이스북 : {friendInfo.facebook}</li>
            </ul>
          <div className={cardStyles.memo}>
            <pre>
                {friendInfo.memo}
            </pre>
          </div>
      </div>
  );
}

export default Card;