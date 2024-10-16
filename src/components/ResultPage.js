import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // 수정된 부분
import { evaluateAnswerWithChatGPT } from './api/openaiApi';
import './ResultPage.css';

const calculateAverageScore = (scores) => {
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    return Math.round(totalScore / scores.length);
};

const getScoreColor = (score) => {
    if (score <= 33) {
        return 'red';
    } else if (score <= 66) {
        return 'yellow';
    } else {
        return 'green';
    }
};

function ResultPage() {
  const location = useLocation(); // useLocation 훅 사용
  const { answers, jobTitle, score, company, status } = location.state;

  const [feedback, setFeedback] = useState([]);
  const [averageScore, setAverageScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const dummyScores = [60, 65, 55, 70]; // 예시 점수 데이터
  const dummyFeedback = [
    { question: '질문 1', score: 60, text: '프로젝트 경험에 대한 답변이 우수했습니다.' },
    { question: '질문 2', score: 65, text: '기술 스택 설명이 구체적입니다.' },
    { question: '질문 3', score: 55, text: '업무 처리 방식을 좀 더 구체적으로 설명하세요.' },
    { question: '질문 4', score: 70, text: '팀워크에 대한 답변이 매우 좋습니다.' },
  ];

  useEffect(() => {
    const fetchEvaluation = async () => {
      setFeedback(dummyFeedback); // 더미 데이터를 사용해 평가 결과 설정
      setAverageScore(calculateAverageScore(dummyScores)); // 평균 점수 계산
      setIsLoading(false);
    };

    fetchEvaluation();
  }, []);

  return (
    <div className="result-container">
      <button onClick={() => window.history.back()}>뒤로 돌아가기</button>

      <h1>{jobTitle} (학점: {score})</h1>
      <div className="result-header">
        <div className="company-info">
          <p>회사: {company}</p>
          <p>상태: {status}</p>
        </div>
      </div>

      {isLoading ? (
        <p>결과를 불러오는 중입니다...</p>
      ) : (
        <div className="score-section">
          <h2>총점</h2>
          <div className="average-score" style={{ backgroundColor: getScoreColor(averageScore) }}>
            {averageScore}/100
          </div>

          <div className="feedback-section">
            <h3>상세 피드백</h3>
            {feedback.map((item, index) => (
              <div key={index} className="feedback-item">
                <h4>{item.question}</h4>
                <p>점수: <span style={{ color: getScoreColor(item.score) }}>{item.score}/100</span></p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultPage;
