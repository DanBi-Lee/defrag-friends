import React from 'react';
import cardStyles from './Card.module.css';

function Card ({friendInfo}) {
  return (
      <div className={cardStyles.card}>
            <img src="" alt="" className={cardStyles.thumb }/>
            <div className={cardStyles.nameBox}>
                <p className={cardStyles.name}>{friendInfo.name}</p>
                <p className={cardStyles.nickname}>{friendInfo.nickname}</p>
                <p className={cardStyles.birthday}>생일 : {friendInfo.birthday}</p>
            </div>
            <div className={cardStyles.subInfo}>
                <p className={cardStyles.tel}>{friendInfo.tel}</p>
                <p className={cardStyles.email}>{friendInfo.email}</p>
            </div>
            <div className={cardStyles.snsBox}>
                sns
            </div>
          <div className={cardStyles.memo}>
            <pre>
                {friendInfo.memo}
            </pre>
          </div>
      </div>
  );
}

export default Card;