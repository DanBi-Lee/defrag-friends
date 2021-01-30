import React from 'react';
import Footer from '../components/common/Footer';
import VisualBox from '../components/main/VisualBox';
import MainHeaderContainer from '../containsers/MainHeaderContainer';

function Main ({setLoginModal, user}) {
  return (
      <>
        <MainHeaderContainer setLoginModal={setLoginModal} user={user} />
        <main>
            <VisualBox user={user} />
        </main>
        <Footer />
      </>
  );
}

export default Main;