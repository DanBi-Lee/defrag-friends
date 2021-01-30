import React from 'react';
import PreviewBoxStyles from './PreviewBox.module.css';

function PreviewBox () {
  return (
    <div className={PreviewBoxStyles.previewBox}>
    <div className={PreviewBoxStyles.imgWrap}></div>
    <button>친구등록</button>
</div>
  );
}

export default PreviewBox;