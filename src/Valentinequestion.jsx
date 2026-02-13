import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import portrait from './assets/images/gallery/drop.jpg';

export default function ValentineQuestion() {
  const navigate = useNavigate();
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState([]);

  // Generate heart-shaped portrait rain
  useEffect(() => {
    const heartRain = [];
    for (let i = 0; i < 15; i++) {
      heartRain.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6,
        size: 120 + Math.random() * 80, // Even bigger hearts: 120-200px
      });
    }
    setHearts(heartRain);
  }, []);

  // Messages that change as they keep clicking "No"
  const messages = [
    "But First, would you be my valentine?",
    "Luh Arte",
    "Ako na to oh!",
    "Apaka Arte Talaga",
    "hanap kana iba haha",
    "Suck8 mo na!",
    "haha last na sah!",
    "Tatagos kaba sah? haha",
    "SIGE NA OHHH!!!!"
  ];

  // Button text changes as they click "No"
  const noButtonText = [
    "No",
    "Cgur4d0 kbah?",
    "????",
    "hindi ka talo sakin sah!",
    "Damot mo ah!",
    "YES mo na!",
    "bahala ikaw din..",
    "Tigas ng Puso Amp!",
    "Yaw mapind0T"
  ];

  const getCurrentMessage = () => {
    if (noCount >= messages.length) return messages[messages.length - 1];
    return messages[noCount];
  };

  const getNoButtonText = () => {
    if (noCount >= noButtonText.length) return noButtonText[noButtonText.length - 1];
    return noButtonText[noCount];
  };

  // Calculate the Yes button size (grows with each No click)
  const yesButtonSize = 1 + (noCount * 0.3); // Grows by 30% each time

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    
    // Move the No button to a random position
    const randomX = Math.random() * 60 - 30; // -30% to +30%
    const randomY = Math.random() * 60 - 30;
    setNoPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    navigate('/flowers');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body, html, #root {
          background: #FFB6C1 !important;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 192, 203, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 105, 180, 0.4) 0%, transparent 50%),
            linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFB6C1 100%) !important;
          min-height: 100vh !important;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heartRain {
          0% {
            transform: translateY(-200px) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0.4;
          }
        }

        .heart-portrait {
          position: fixed;
          clip-path: polygon(
            50% 15%,
            61% 6%, 75% 6%, 85% 15%, 88% 28%,
            85% 42%, 77% 54%, 66% 65%, 55% 76%,
            50% 85%,
            45% 76%, 34% 65%, 23% 54%, 15% 42%,
            12% 28%, 15% 15%, 25% 6%, 39% 6%
          );
          pointer-events: none;
          z-index: 1;
          opacity: 0.7;
        }

        .heart-portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
        }
      `}</style>

      <div style={containerStyle}>
        {/* Heart Rain - Portrait images in heart shapes */}
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart-portrait"
            style={{
              left: `${heart.left}%`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              animation: `heartRain ${heart.duration}s linear ${heart.delay}s infinite`,
            }}
          >
            <img src={portrait} alt="" />
          </div>
        ))}

        {/* Main content */}
        <div style={cardStyle}>
          {/* Question text */}
          <h1 style={titleStyle}>
            {getCurrentMessage()}
          </h1>

          {noCount > 3 && (
            <p style={subtextStyle}>
              
            </p>
          )}

          {/* Buttons container */}
          <div style={buttonsContainerStyle}>
            {/* YES BUTTON - Grows with each No click */}
            <button
              onClick={handleYesClick}
              style={{
                ...yesButtonStyle,
                transform: `scale(${yesButtonSize})`,
                animation: noCount > 2 ? 'pulse 1s ease-in-out infinite' : 'none'
              }}
            >
              Yes
            </button>

        
            {noCount < 10 && ( // Hide after 10 clicks
              <button
                onClick={handleNoClick}
                style={{
                  ...noButtonStyle,
                  transform: `translate(${noPosition.x}%, ${noPosition.y}%)`,
                  animation: noCount > 5 ? 'shake 0.5s ease-in-out infinite' : 'none'
                }}
              >
                {getNoButtonText()}
              </button>
            )}
          </div>

          {noCount >= 10 && (
            <p style={{
              ...subtextStyle,
              color: '#fff',
              fontWeight: '600',
              animation: 'fadeIn 0.5s ease-in'
            }}>
             WALA KA NAMAN CHOICE!
            </p>
          )}

         
        </div>

        {/* Back button */}
        <button 
          onClick={() => navigate('/home')} 
          style={backButtonStyle}
        >
          ← Back
        </button>
      </div>
    </>
  );
}

// ── Styles ──
const containerStyle = {
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  background: '#FFB6C1',
  backgroundImage: `
    radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 192, 203, 0.6) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 105, 180, 0.4) 0%, transparent 50%),
    linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFB6C1 100%)
  `,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  fontFamily: "'Poppins', sans-serif"
};

const cardStyle = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '500px',
  width: '92%',
  background: 'rgba(255,255,255,0.18)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '2px solid rgba(255,255,255,0.4)',
  borderRadius: '2.2rem',
  padding: 'clamp(2.5rem,6vw,3.5rem) clamp(1.5rem,4vw,2.5rem)',
  textAlign: 'center',
  boxShadow: '0 0 32px rgba(199, 21, 133, 0.25), 0 8px 50px rgba(236, 72, 153, 0.15)'
};

const titleStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
  fontWeight: '700',
  color: '#fff',
  margin: '0 0 30px 0',
  textShadow: '0 3px 20px rgba(190,18,60,.4), 0 1px 3px rgba(0,0,0,.1)',
  lineHeight: '1.3',
  transition: 'all 0.3s ease'
};

const subtextStyle = {
  fontSize: '1rem',
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: '20px',
  fontWeight: '500',
  fontFamily: "'Poppins', sans-serif"
};

const buttonsContainerStyle = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30px',
  flexWrap: 'wrap',
  minHeight: '80px',
  position: 'relative'
};

const yesButtonStyle = {
  padding: '15px 45px',
  fontSize: '1.3rem',
  fontWeight: '700',
  fontFamily: "'Poppins', sans-serif",
  background: 'linear-gradient(90deg, #ec4899, #be123c)',
  color: '#fff',
  border: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
  boxShadow: '0 8px 35px rgba(236,72,153,.45)',
  transition: 'all 0.3s ease',
  transformOrigin: 'center',
  position: 'relative',
  zIndex: 5
};

const noButtonStyle = {
  padding: '15px 40px',
  fontSize: '1.1rem',
  fontWeight: '600',
  fontFamily: "'Poppins', sans-serif",
  background: 'rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  border: '2px solid rgba(255, 255, 255, 0.4)',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  position: 'relative',
  zIndex: 4,
  textShadow: '0 1px 3px rgba(0,0,0,.1)'
};

const backButtonStyle = {
  marginTop: '30px',
  padding: '12px 30px',
  fontSize: '1rem',
  fontWeight: '600',
  fontFamily: "'Poppins', sans-serif",
  background: 'rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  border: '2px solid rgba(255, 255, 255, 0.35)',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  position: 'relative',
  zIndex: 10,
  textShadow: '0 1px 3px rgba(0,0,0,.1)'
};