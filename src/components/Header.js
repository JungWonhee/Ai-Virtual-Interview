import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Authcontext'; // 이 부분 경로 확인하세요
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext); // 로그인 상태와 로그인 상태 변경 함수
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false); // 로그인 상태를 false로 변경
    localStorage.removeItem('isLoggedIn'); // 로컬 스토리지에서 로그인 정보 제거
    alert('로그아웃 되었습니다.');
    navigate('/'); // 페이지로 이동
  };
  
  return (
    <header className="header">
      <div className="header-logo" onClick={() => navigate('/')}>
        Interview Master
      </div>
      <nav className="header-nav">
        <div
          className="tab-item"
          onMouseEnter={() => setHoveredTab('introduction')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          면접 소개
          {hoveredTab === 'introduction' && (
            <div className="dropdown">
              <p onClick={() => navigate('/interview-introduction')}>면접 소개</p>
            </div>
          )}
        </div>
        
        {/* 로그인 여부와 상관없이 모의면접 및 기업면접 탭을 표시 */}
        <div
          className="tab-item"
          onMouseEnter={() => setHoveredTab('mockInterview')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          모의면접
          {hoveredTab === 'mockInterview' && (
            <div className="dropdown">
              <p onClick={() => navigate('/mock-interview-start')}>모의면접 시작</p>
              <p onClick={() => navigate('/interview-page')}>모의면접 분석</p>
            </div>
          )}
        </div>
        
        <div
          className="tab-item"
          onMouseEnter={() => setHoveredTab('companyInterview')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          기업면접
          {hoveredTab === 'companyInterview' && (
            <div className="dropdown">
              <p onClick={() => navigate('/all-company-interviews')}>전체기업면접</p>
            </div>
          )}
        </div>

        <div
          className="tab-item"
          onMouseEnter={() => setHoveredTab('userReviews')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          사용자 후기
          {hoveredTab === 'userReviews' && (
            <div className="dropdown">
              <p onClick={() => navigate('/user-reviews-view')}>사용자 후기 보기</p>
              <p onClick={() => navigate('/user-reviews-write')}>사용자 후기 쓰기</p>
            </div>
          )}
        </div>
      </nav>

      <div className="auth-links">
        {isLoggedIn ? (
          <>
            <a className="nav-link" onClick={handleLogout}>로그아웃</a>
            <a className="nav-link" onClick={() => navigate('/profile')}>내 정보</a>
          </>
        ) : (
          <>
            <a className="nav-link" onClick={() => navigate('/login')}>로그인 / 회원가입</a>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
