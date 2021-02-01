import React from 'react';

function Join ({styles, email, password, snsLogin, emailJoin}) {
  return (
    <div className={`${styles.memberBox} ${styles.join}`}>
        <form>
            <h1>회원가입</h1>
            <label htmlFor="userEmail" className="hidden">이메일</label>
            <input type="text" placeholder="이메일을 입력해주세요." id="userEmail" ref={email} />
            <label htmlFor="userPassword" className="hidden">비밀번호</label>
            <input type="password" id="userPassword" placeholder="비밀번호를 입력해주세요." ref={password} />
            <label htmlFor="confirmUserPassword" className="hidden">비밀번호 확인</label>
            <input type="password" id="confirmUserPassword" placeholder="비밀번호를 다시 입력해주세요." ref={password} />
            <button className={styles.btnJoin} onClick={emailJoin}>회원가입</button>
            <div className={styles.snsBox}>
                <p>SNS계정 간편 회원가입</p>
                <button data-sns="Google" onClick={snsLogin}>구글</button>
                <button data-sns="Github" onClick={snsLogin}>깃헙</button>
            </div>
        </form>
    </div>
  );
}

export default Join;