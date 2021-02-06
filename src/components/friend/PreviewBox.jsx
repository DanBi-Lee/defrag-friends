import React from 'react';
import CardContainer from '../../containsers/CardContainer';
import PreviewBoxStyles from './PreviewBox.module.css';

function PreviewBox ({saveData, friendInfo}) {
  return (
    <div className={PreviewBoxStyles.previewBox}>
    <div className={PreviewBoxStyles.imgWrap}>
      <CardContainer friendInfo={friendInfo} />
    </div>
    <button onClick={saveData}>친구등록</button>
</div>
  );
}

export default PreviewBox;