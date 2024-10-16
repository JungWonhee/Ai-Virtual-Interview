import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './InterviewTypeSelection.css';

function InterviewTypeSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { company, score, jobTitle, selfIntroduction } = location.state;

  const handleTextInterview = () => {
    navigate('/text-interview', { state: { company, score, jobTitle, selfIntroduction } });
  };

  const handleVideoInterview = () => {
    navigate('/video-interview', { state: { company, score, jobTitle, selfIntroduction } });
  };

  return (
    <div className="interview-type-selection">
      <h2>가상 면접 모드 선택</h2>
      <div className="button-group">
        <div className="option-card" onClick={handleTextInterview}>
          <img src="https://img.icons8.com/ios-filled/50/ffffff/microphone.png" alt="Text Mode Icon" />
          <h3>음성 인식 + 텍스트 모드</h3>
          <p>화상 없이 음성 인식과 텍스트 입력으로 면접을 진행합니다. 편안한 환경에서 집중할 수 있습니다.</p>
          <button>선택</button>
        </div>
        <div className="option-card" onClick={handleVideoInterview}>
          <img src="https://img.icons8.com/ios-filled/50/ffffff/video-call.png" alt="Video Mode Icon" />
          <h3>화상 면접 모드</h3>
          <p>화상, 음성 인식, 텍스트 입력을 모두 사용하여 실제 면접과 가장 유사한 환경에서 연습합니다.</p>
          <button>선택</button>
        </div>
      </div>
    </div>
  );
}

export default InterviewTypeSelection;
