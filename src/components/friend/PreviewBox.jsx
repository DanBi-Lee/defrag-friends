import React, { useEffect, useRef } from 'react';
import CardContainer from '../../containsers/CardContainer';
import ElementSetting from '../../js/automaticElementScaling';
import PreviewBoxStyles from './PreviewBox.module.css';

function PreviewBox ({saveData, friendInfo,isEditMode}) {
  const $parent = useRef();
  const $children = useRef();

  useEffect(()=>{
    const elementSetting = new ElementSetting($parent , $children);
    elementSetting.setScale($parent);

    const setScale = ()=>{
      elementSetting.setScale($parent);
    }
    
    window.addEventListener('resize', setScale);

    return ()=>{
      window.removeEventListener('resize', setScale);
    }
  },[]);

  return (
    <div className={PreviewBoxStyles.previewBox} ref={$parent}>
      <div className={PreviewBoxStyles.imgWrap} ref={$children}>
        <CardContainer friendInfo={friendInfo} />
      </div>
    {
      isEditMode? 
      <button onClick={saveData} className={PreviewBoxStyles.btn}>정보 수정</button>
      :
      <button onClick={saveData} className={PreviewBoxStyles.btn}>친구등록</button>
    }
    
</div>
  );
}

export default PreviewBox;