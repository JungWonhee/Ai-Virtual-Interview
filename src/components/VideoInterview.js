/*import React, { useEffect, useRef, useState } from 'react';
import './VideoInterview.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000'); // 서버 주소

function VideoInterview() {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const peerConnection = useRef(null);

  const [questions] = useState([
    '자신의 기술 역량에 대해 설명해주세요.',
    '이 직무에서의 장기적인 목표는 무엇인가요?',
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    // PeerConnection 설정
    const configuration = {
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    };
    peerConnection.current = new RTCPeerConnection(configuration);

    // 로컬 미디어 스트림 가져오기
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));
      })
      .catch((error) => console.error('Error accessing media devices.', error));

    // 원격 미디어 처리
    peerConnection.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    // Signaling을 통해 ICE candidate 주고받기
    socket.on('offer', async (offer) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.emit('answer', answer);
    });

    socket.on('answer', async (answer) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on('ice-candidate', (candidate) => {
      peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
    });

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('ice-candidate', event.candidate);
      }
    };

    return () => {
      // 연결 끊기
      peerConnection.current.close();
      socket.disconnect();
    };
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="video-interview-container">
      <div className="video-section">
        <video ref={localVideoRef} autoPlay muted className="local-video"></video>
        <video ref={remoteVideoRef} autoPlay className="remote-video"></video>
      </div>

      <div className="question-section">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{questions[currentQuestion]}</p>
        {currentQuestion < questions.length - 1 && (
          <button onClick={handleNextQuestion}>다음 질문</button>
        )}
      </div>
    </div>
  );
}

export default VideoInterview;
*/