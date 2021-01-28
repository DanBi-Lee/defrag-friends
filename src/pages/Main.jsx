import React from 'react';
import MainHeader from '../components/common/MainHeader';
import Footer from '../components/common/Footer';
import VisualBox from '../components/main/VisualBox';

function Main () {
  return (
      <>
        <MainHeader />
        <main>
            <VisualBox />
        </main>
        <Footer />
      </>
  );
}

export default Main;