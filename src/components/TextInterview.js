import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TextInterview.css';

function TextInterview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { company = 'General', score, jobTitle, selfIntroduction } = location.state || {}; 

  const questions = {
    Nexon: [
      '넥슨에서 자신이 맡고 싶은 역할은 무엇인가요?',
      '넥슨에서의 장기적인 목표는 무엇인가요?',
      '넥슨에서의 최근 프로젝트 경험을 설명해 주세요.',
      '넥슨에서 기여할 수 있는 기술적 강점은 무엇인가요?',
    ],
    Samsung: [
      '삼성전자에서 가장 중점을 두고 있는 기술 트렌드는 무엇이라고 생각하나요?',
      '삼성전자에서의 업무 목표는 무엇인가요?',
      '삼성전자에서 해결했던 문제를 설명해 주세요.',
      '삼성전자에서 기여할 수 있는 기술적 강점은 무엇인가요?',
    ],
    Naver: [
      '네이버에서의 주요 프로젝트 경험에 대해 설명해 주세요.',
      '네이버에서 자신이 기여할 수 있는 부분은 무엇인가요?',
      '네이버에서 기술적 기여를 할 수 있는 방법은 무엇인가요?',
      '네이버에서의 최근 성과에 대해 설명해 주세요.',
    ],
    General: [
      '자신의 장점과 단점에 대해 설명해 주세요.',
      '최근에 해결한 문제를 설명해 주세요.',
      '가장 도전적이었던 프로젝트는 무엇이었나요?',
      '향후 5년간의 목표는 무엇인가요?',
    ]
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [evaluation, setEvaluation] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60); 

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion(); 
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleNextQuestion = () => {
    const dummyResult = `질문 ${currentQuestion + 1}: 답변에 대한 가상의 평가입니다. 점수: ${50 + currentQuestion * 10}/100`;
    setEvaluation((prev) => [...prev, dummyResult]);

    if (currentQuestion < questions[company].length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer('');
      setTimeLeft(60); 
    } else {
      handleSubmit(); 
    }
  };

  const handleSubmit = () => {
    navigate('/result', {
      state: {
        company,
        score,
        jobTitle,
        selfIntroduction,
        evaluation, 
      },
    });
  };

  return (
    <div className="text-interview-container">
      <div className="text-interview-header">
        <h1>{company} 면접</h1>
        <p>학점: {score}, 직무: {jobTitle}</p>
      </div>

      <div className="text-interview-details">
        <p><strong>질문 {currentQuestion + 1} / {questions[company].length}</strong></p>
        <h2 className="question-text">{questions[company][currentQuestion]}</h2>
      </div>

      <div className="textarea-container">
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="답변을 입력하세요..."
        />
      </div>

      <div className="timer-box">
        <p className="timer">남은 시간: {timeLeft}초</p>
      </div>

      {currentQuestion < questions[company].length - 1 ? (
        <button className="submit-button" onClick={handleNextQuestion}>다음 질문</button>
      ) : (
        <button className="submit-button" onClick={handleSubmit}>제출하기</button>
      )}
    </div>
  );
}

export default TextInterview;
