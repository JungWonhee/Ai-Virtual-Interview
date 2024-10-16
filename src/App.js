import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // 정확히 내보낸 형태와 동일하게 임포트
import InterviewIntroduction from './pages/InterviewIntroduction'; 
import MockInterviewStart from './pages/MockInterviewStart';
import MockInterviewAnalysis from './pages/MockInterviewAnalysis';
import AllCompanyInterviews from './pages/AllCompanyInterviews';
import UserReviewsView from './pages/UserReviewsView';
import UserReviewsWrite from './pages/UserReviewsWrite';
import AuthComponent from './pages/AuthComponent'; 
import InterviewPage from './pages/InterviewPage'; 
import Header from './components/Header';
import { AuthProvider } from './contexts/Authcontext';
import InterviewForm from './pages/InterviewForm'; 
import InterviewTip from './pages/InterviewTip'; 
import InterviewTypeSelection from './components/InterviewTypeSelection';
import TextInterview from './components/TextInterview';
import VideoInterview from './components/VideoInterview';
import ResultPage from './components/ResultPage';
import PrivateRoute from './components/PrivateRoute';  


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/interview-introduction" element={<InterviewIntroduction />} />
          <Route path="/mock-interview-start" element={<PrivateRoute><MockInterviewStart /></PrivateRoute>} />
          <Route path="/interview-form" element={<PrivateRoute> <InterviewForm /></PrivateRoute>} /> 
          <Route path="/mock-interview-analysis" element={<PrivateRoute><MockInterviewAnalysis /></PrivateRoute>} />
          <Route path="/all-company-interviews" element={<PrivateRoute><AllCompanyInterviews /></PrivateRoute>} />
          <Route path="/user-reviews-view" element={<UserReviewsView />} />
          <Route path="/user-reviews-write" element={<PrivateRoute><UserReviewsWrite /></PrivateRoute>} />
          <Route path="/login" element={<AuthComponent />} />
          <Route path="/signup" element={<AuthComponent />} />
          <Route path="/interview-page" element={<PrivateRoute><InterviewPage /></PrivateRoute>} />
          <Route path="/interview-tips" element={<PrivateRoute><InterviewTip /></PrivateRoute>} />
          <Route path="/interview-type-selection" element={<PrivateRoute><InterviewTypeSelection /></PrivateRoute>} />
          <Route path="/text-interview" element={<PrivateRoute><TextInterview /></PrivateRoute>} />
          <Route path="/video-interview" element={<PrivateRoute><VideoInterview /></PrivateRoute>} />
          <Route path="/result" element={<PrivateRoute><ResultPage /></PrivateRoute>} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
