import React from 'react';
import Footer from '../components/common/Footer';
import HowToUse from '../components/main/HowToUse';
import NoticeBox from '../components/main/NoticeBox';
import VisualBox from '../components/main/VisualBox';
import MainHeaderContainer from '../containsers/MainHeaderContainer';

function Main ({setLoginModal, user}) {
  return (
      <>
        <MainHeaderContainer setLoginModal={setLoginModal} user={user} />
        <main>
            <VisualBox user={user} />
            <HowToUse />
            <NoticeBox />
        </main>
        <Footer />
      </>
  );
}

export default Main;