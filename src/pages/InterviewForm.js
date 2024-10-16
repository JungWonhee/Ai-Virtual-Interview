import React, { useState } from 'react';
import './InterviewForm.css';
import { useNavigate } from 'react-router-dom';

function InterviewForm() {
  const [status, setStatus] = useState('신입');
  const [score, setScore] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [interviewType, setInterviewType] = useState('직무/전공');
  const [company, setCompany] = useState(''); // New state for company selection
  const [selfIntroduction, setSelfIntroduction] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const validateForm = () => {
    const newErrors = {};
    if (!score) {
      newErrors.score = '학점을 입력해주세요.';
    }
    if (!jobTitle) {
      newErrors.jobTitle = '직무를 입력해주세요.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // 면접 유형 선택 페이지로 이동
      navigate('/interview-type-selection', { state: { company, score, jobTitle, selfIntroduction } });
    }
  };
  

  return (
    <div className="form-container">
      <div className="header">
        <h2>모의 면접 시작하기</h2>
        <p>실전과 같은 면접 경험을 통해 자신감을 키워보세요.</p>
      </div>
      
      <div className="preparation">
        <h3>준비 사항</h3>
        <ul>
          <li>조용하고 정돈된 집중할 장소 여건</li>
          <li>희망하는 면접 유형 (기술, 인성, 압박 등)</li>
          <li>이력서 또는 자기소개서 내용 (선택사항)</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>실전 모의 면접 설정</h3>
        
        <div className="form-group">
          <label>경력 상태</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="신입"
                checked={status === '신입'}
                onChange={() => setStatus('신입')}
              />
              신입
            </label>
            <label>
              <input
                type="radio"
                value="경력"
                checked={status === '경력'}
                onChange={() => setStatus('경력')}
              />
              경력
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>학점</label>
          <input
            type="text"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="ex) 3.5"
          />
          {errors.score && <p className="error-message">{errors.score}</p>}
        </div>

        <div className="form-group">
          <label>직무</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="ex) 회로설계"
          />
          {errors.jobTitle && <p className="error-message">{errors.jobTitle}</p>}
        </div>

        <div className="form-group">
          <label>면접 유형</label>
          <div className="interview-type-group">
            {['직무/전공', '인성/역량', '압박'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setInterviewType(type)}
                className={interviewType === type ? 'active' : ''}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Updated Company Selection Section */}
        <div className="form-group">
          <label>회사 선택</label>
          <select value={company} onChange={(e) => setCompany(e.target.value)}>
            <option value="">선택하지 않음</option>
            <option value="Nexon">Nexon</option>
            <option value="Naver">Naver</option>
            <option value="Samsung Electronics">삼성전자</option>
          </select>
        </div>

        <div className="form-group">
          <label>자기소개서/기술 연역 소개</label>
          <textarea
            value={selfIntroduction}
            onChange={(e) => setSelfIntroduction(e.target.value)}
            placeholder="ex) 주요 기술 스택, 프로젝트 경험, 문제 해결 사례 등을 작성해주세요."
          />
          <p className="description">기술역량 및 자기소개서 내용을 토대로 질문을 생성합니다. (선택하지 않으면 일반적인 질문을 합니다)</p>
        </div>

        <button type="submit" className="submit-button">
          면접 시작하기
        </button>
      </form>

      <p className="help-link" onClick={() => navigate('/interview-tips')}>
        면접 준비에 도움이 필요하신가요? <span className="tips-link">면접 팁 보기</span>
      </p>
    </div>
  );
}

export default InterviewForm;
