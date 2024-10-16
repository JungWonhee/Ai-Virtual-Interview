import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Authcontext'; // 경로 확인하세요
import './AuthComponent.css';

const dummyAccount = {
  email: 'admin@1',
  password: 'admin',
};

function AuthComponent() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = (event) => {
    event.preventDefault();
    if (isLoginMode) {
      if (email === dummyAccount.email && password === dummyAccount.password) {
        setError('');
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        alert('로그인 성공!');
        navigate('/');
      } else {
        setError('잘못된 이메일 또는 비밀번호입니다.');
      }
    } else {
      alert('회원가입 완료! 이제 로그인해주세요.');
      setIsLoginMode(true);
    }
  };

  return (
    <div className="auth-component">
      <h2>{isLoginMode ? '로그인' : '회원가입'}</h2>
      <form onSubmit={handleAuth}>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">{isLoginMode ? '로그인' : '회원가입'}</button>
      </form>
      <div className="switch-mode">
        {isLoginMode ? (
          <p>
            계정이 없으신가요?{' '}
            <button className="button-link" onClick={() => setIsLoginMode(false)}>
              회원가입
            </button>
          </p>
        ) : (
          <p>
            이미 계정이 있으신가요?{' '}
            <button className="button-link" onClick={() => setIsLoginMode(true)}>
              로그인
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default AuthComponent;
