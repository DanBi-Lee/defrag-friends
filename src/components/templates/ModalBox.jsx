import React from 'react';
import ModalBoxStyles from './ModalBox.module.css';

function ModalBox ({children}) {
  return (
      <div className={ModalBoxStyles.background}>
        {children}
      </div>
  );
}

export default ModalBox;