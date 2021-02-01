import React from 'react';

function Login ({styles, email, password, emailLogin, snsLogin, setJoin}) {
    const onChangeJoin = event => {
        event.preventDefault();
        setJoin(()=>true);
    }

  return (
    <div className={styles.memberBox}>
        <form>
            <h1>로그인</h1>
            <input type="text" placeholder="아이디를 입력해주세요." ref={email} />
            <input type="password" name="" id="" placeholder="비밀번호를 입력해주세요." ref={password} />
            <button onClick={emailLogin}>로그인</button>
            <button className={styles.btnJoin} onClick={onChangeJoin}>회원가입</button>
            <div className={styles.snsBox}>
                <p>SNS계정 간편 로그인</p>
                <button data-sns="Google" onClick={snsLogin}>구글</button>
                <button data-sns="Github" onClick={snsLogin}>깃헙</button>
            </div>
        </form>
    </div>
  );
}

export default Login;