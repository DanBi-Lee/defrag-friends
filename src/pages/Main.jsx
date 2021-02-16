import React from 'react';
import Footer from '../components/common/Footer';
import HowToUse from '../components/main/HowToUse';
import VisualBox from '../components/main/VisualBox';
import MainHeaderContainer from '../containsers/MainHeaderContainer';

function Main ({setLoginModal, user}) {
  return (
      <>
        <MainHeaderContainer setLoginModal={setLoginModal} user={user} />
        <main>
            <VisualBox user={user} />
            <HowToUse />
        </main>
        <Footer />
      </>
  );
}

export default Main;