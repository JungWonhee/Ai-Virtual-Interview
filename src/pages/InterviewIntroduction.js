import React from 'react';
import './InterviewIntroduction.css';

function InterviewIntroduction() {
  return (
    <div className="introduction-container">
      <div className="introduction-section">
        <div className="intro-content">
          <h2><span className="step-number">01</span> AI 면접이란?</h2>
          <p>
            AI 면접은 지원자의 답변을 분석하고 평가하는 자동화된 면접 시스템입니다. 
            자연어 처리 및 영상 분석 기술을 활용하여 지원자의 역량을 객관적으로 평가할 수 있습니다.
          </p>
        </div>
      </div>

      <div className="introduction-section reverse">
        <div className="intro-content">
          <h2><span className="step-number">02</span> 면접 유형 소개</h2>
          <p>
            Text 면접: 텍스트 기반으로 질문에 답변하며, 답변 내용과 키워드를 분석하여 결과를 도출합니다.
          </p>
          <p>
            화상 면접: 실시간 비디오를 통해 면접을 진행하며, 표정 및 음성 톤까지 분석하여 지원자의 비언어적 커뮤니케이션을 평가합니다.
          </p>
        </div>
      </div>

      <div className="introduction-section">
        <div className="intro-content">
          <h2><span className="step-number">03</span> AI 면접의 과정</h2>
          <p>
            지원자는 질문을 받고 답변을 입력하거나, 카메라와 마이크를 통해 실시간으로 면접에 응합니다. 
            AI는 답변의 논리성, 키워드, 비언어적 표현을 종합적으로 평가하여 결과를 제공합니다.
          </p>
        </div>
      </div>

      <div className="introduction-section reverse">
        <div className="intro-content">
          <h2><span className="step-number">04</span> 장점 1: 공정성</h2>
          <p>
            AI 면접은 개인의 편견 없이 지원자를 평가합니다. 성별, 나이, 배경에 상관없이 동일한 기준으로 분석되어 
            더욱 공정한 면접이 가능합니다.
          </p>
        </div>
      </div>

      <div className="introduction-section">
        <div className="intro-content">
          <h2><span className="step-number">05</span> 장점 2: 효율성</h2>
          <p>
            AI 면접은 대규모 지원자를 빠르고 효율적으로 평가할 수 있어 인사 담당자의 시간과 노력을 절약해줍니다.
            지원자는 언제 어디서나 면접에 응시할 수 있어 편리합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InterviewIntroduction;
