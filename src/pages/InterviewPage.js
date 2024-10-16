import React from 'react';
import './InterviewPage.css'; // CSS 파일 연결

function InterviewPage() {
  return (
    <div className="interview-page-container">
      <div className="interview-header">
        <h2>나의 면접 기록</h2>
        <button className="new-interview-btn">+ 새 면접 보기</button>
      </div>
      <div className="interview-card">
        <div className="interview-image">
          <img src="/assets/interview-placeholder.png" alt="Interview Placeholder" />
        </div>
        <div className="interview-content">
          <h3>첫 번째 면접을 시작해보세요</h3>
          <p>면접 시뮬레이션을 통해 자신감을 키우고 실전에 대비하세요.</p>
          <button className="start-interview-btn">+ 면접 시작하기</button>
        </div>
      </div>
    </div>
  );
}

export default InterviewPage;
