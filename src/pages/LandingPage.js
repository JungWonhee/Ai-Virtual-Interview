import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h1>AI 면접 인터뷰 마스터 IM</h1>
          <p>면접을 마스터하기 위한 가장 스마트한 선택, AI 기술로 구현된 가상 면접관과 함께 실전 같은 면접 경험을 제공합니다.</p>
          <div className="hero-buttons">
            <Button className="primary-button" onClick={() => navigate("/mock-interview-start")}>
              모의면접 바로가기
            </Button>
            <Button className="secondary-button" onClick={() => navigate("/interview-introduction")}>
              자세히보기
            </Button>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>모의면접 프로의 장점</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>&#9881; AI 기반 질문 생성</h3>  {/* 기어 모양 */}
            <p>직무와 기업에 맞춘 개인화된 질문</p>
          </div>
          <div className="card">
            <h3>&#128101; 다양한 면접 유형</h3>  {/* 사람 모양 */}
            <p>기술, 인성, 압박 면접 등 실전 대비</p>
          </div>
          <div className="card">
            <h3>&#9201; 실시간 피드백</h3>  {/* 시계 모양 */}
            <p>답변 직후 즉각적인 평가와 조언</p>
          </div>
          <div className="card">
            <h3>&#128202; 성장 트래킹</h3>  {/* 차트 모양 */}
            <p>데이터 기반 실력 향상 확인</p>
          </div>

        </div>
      </section>

      <section className="testimonials">
        <h2>사용자 후기</h2>
        <div className="testimonial-cards">
          <Card>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-content">"이 서비스를 통해 자신감을 얻어 원하는 회사에 취업할 수 있었습니다!"</p>
          </Card>
          <Card>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-content">"다양한 상황에 대비할 수 있어 실제 면접에서 당황하지 않고 잘 대처했어요."</p>
          </Card>
          <Card>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-content">"처음으로 이런 면접을 준비하면서 AI 서비스를 알게 되었는데, 정말 큰 도움이 되었습니다."</p>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
