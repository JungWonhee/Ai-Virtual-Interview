import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import './MockInterviewStart.css';

function MockInterviewStart() {
  const navigate = useNavigate(); // navigate 함수 사용

  return (
    <div className="interview-container">
      <div className="interview-box">
        <div className="interview-header">
          <h2>나의 면접 기록</h2>
          <button onClick={() => navigate('/interview-form')} className="new-interview-button">+ 새 면접 보기</button>
        </div>
        <div className="interview-card">
          <div className="interview-content">
            <div className="interview-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2649/2649192.png" alt="interview icon" />
            </div>
            <h3>첫 번째 면접을 시작해보세요</h3>
            <p>면접 시뮬레이션을 통해 자신감을 키우고 실전에 대비하세요.</p>
            <button onClick={() => navigate('/interview-form')} className="start-interview-button">+ 면접 시작하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MockInterviewStart;
