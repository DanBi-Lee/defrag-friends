import React from 'react';
import MainBoxStyles from './SubMainBox.module.css';

function SubMainBox ({children}) {
  return (
    <main className={MainBoxStyles.mainBox}>
        {children}
    </main>
  );
}

export default SubMainBox;