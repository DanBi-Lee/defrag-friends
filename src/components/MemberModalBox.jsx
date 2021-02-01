import React, { useRef, useState } from 'react';
import MemberModalStyles from './MemberModalBox.module.css';
import logo from '../images/logo.svg';
import people from '../images/illust/people2.svg';
import shape from '../images/illust/vectorImage2.png';
import Login from './Login';
import Join from './Join';

function MemberModalBox ({authservice, closeModal, history}) {
    const email = useRef();
    const password = useRef();
    const [isJoin, setJoin] = useState(false);

    const snsLogin = async (event) => {
        event.preventDefault();
        const sns = event.target.dataset.sns;
        const data = await authservice.loginWithSNS(sns);
        console.log(`로그인 완료! ${data}`);
        closeModal();
        history.push('/list');
    }

    const emailLogin = async (event) => {
        event.preventDefault();
        const data = await authservice.loginWithEmail(email.current.value, password.current.value);
        console.log(`로그인 완료! ${data}`);
        closeModal();
        history.push('/list');
    }
    
    const emailJoin = async (event) => {
        event.preventDefault();
        try{
            await authservice.joinWithEmail(email.current.value, password.current.value);
            closeModal();
            history.push('/list');
        }catch(error){
            alert(error.message);
        }
    }

    const handleBackground = (event) => {
        if(!event.target.dataset.background){
            return;
        }
        closeModal();
    }

  return (
      <div className={MemberModalStyles.background} onClick={handleBackground} data-background="background">
          <section className={MemberModalStyles.modal}>
              <div className={MemberModalStyles.img}>
                  <img className={MemberModalStyles.logo} src={logo} alt="logo" />
                  <img className={MemberModalStyles.shape} src={shape} alt=""/>
                  <img className={MemberModalStyles.people} src={people} alt="" />
              </div>
              {
                isJoin ?
                    <Join styles={MemberModalStyles} email={email} password={password} emailLogin={emailLogin} snsLogin={snsLogin} emailJoin={emailJoin} /> :
                    <Login styles={MemberModalStyles} email={email} password={password} emailLogin={emailLogin} snsLogin={snsLogin} setJoin={setJoin} />
              }
              <button className={MemberModalStyles.btnClose} onClick={closeModal}><span className="hidden">닫기</span></button>
          </section>
      </div>
  );
}

export default MemberModalBox;