import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InterviewTip.css';

function InterviewTip() {
  const navigate = useNavigate(); // useNavigate 훅 추가

  return (
    <div className="interview-tip-container">
      {/* 뒤로 돌아가기 버튼 */}
      <button onClick={() => navigate(-1)} className="back-button">
        ← 뒤로 돌아가기
      </button>

      <h1>실전 모의 면접 시작하기</h1>
      <p className="subtitle">실제 면접과 동일한 환경에서 자신의 실력을 테스트하고 향상시키세요.</p>
      
      <div className="section">
        <h2>실전 면접 규칙</h2>
        <div className="boxes">
          <div className="box">
            <img src="https://img.icons8.com/ios-filled/50/000000/time.png" alt="time limit" className="icon" />
            <h3>시간 제한</h3>
            <p>각 질문에 60초 이내로 답변해야 하며, 시간 관리가 중요합니다.</p>
          </div>
          <div className="box">
            <img src="https://img.icons8.com/ios-filled/50/000000/return.png" alt="no going back" className="icon" />
            <h3>되돌아갈 수 없음</h3>
            <p>한 번 답변한 질문으로 돌아갈 수 없으므로 신중하게 답변하세요.</p>
          </div>
          <div className="box">
            <img src="https://img.icons8.com/ios-filled/50/000000/rating.png" alt="feedback" className="icon" />
            <h3>종합 평가</h3>
            <p>면접 종료 후 점수, 피드백, 종합 평가를 받을 수 있습니다.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>면접 준비의 핵심</h2>
        <div className="boxes">
          <div className="box">
            <img src="https://img.icons8.com/ios-glyphs/50/000000/search.png" alt="research" className="icon" />
            <h3>철저한 사전 조사</h3>
            <p>회사의 직무에 대해 충분히 이해하고, 구체적인 사례로 답변을 준비하세요.</p>
          </div>
          <div className="box">
            <img src="https://img.icons8.com/ios-filled/50/000000/chat-message.png" alt="communication" className="icon" />
            <h3>명확한 의사소통</h3>
            <p>핵심을 빠르게 전달하고, 신뢰를 받는 답변을 준비하세요.</p>
          </div>
          <div className="box">
            <img src="https://img.icons8.com/ios-filled/50/000000/thumb-up.png" alt="confidence" className="icon" />
            <h3>자신감 있는 태도</h3>
            <p>자신감을 가지고 면접에 임하여 긍정적인 인상을 남기세요.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>추가 팁</h2>
        <div className="boxes">
          <div className="box">
            <img src="https://img.icons8.com/ios-filled/50/000000/target.png" alt="goal setting" className="icon" />
            <h3>목표 설정</h3>
            <p>면접의 목표를 명확히 하고, 자신이 꼭 전달하고 싶은 메시지를 미리 정리하세요.</p>
          </div>
          <div className="box">
            <img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="practice and feedback" className="icon" />
            <h3>연습과 피드백</h3>
            <p>실제 면접처럼 연습을 해보고 피드백을 받아서 개선하세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewTip;
