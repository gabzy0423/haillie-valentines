import React, { useState } from 'react';

export default function ValentinesPinEntry() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  
  // Replace this with your actual anniversary date (MMDDYYYY format)
  const CORRECT_PIN = '02142023'; // Example: February 14, 2023
  
  const handleNumberClick = (num) => {
    if (pin.length < 8) {
      setPin(pin + num);
      setError(false);
    }
  };
  
  const handleDelete = () => {
    setPin(pin.slice(0, -1));
    setError(false);
  };
  
  const handleSubmit = () => {
    if (pin === CORRECT_PIN) {
      // SUCCESS! Navigate to next page
      console.log('Correct PIN! Navigate to next page...');
      // You'll implement navigation here later
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => {
        setPin('');
        setError(false);
      }, 1000);
    }
  };
  
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Cormorant+Garamond:wght@300;400&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-30px) rotate(5deg); }
          50% { transform: translateY(-60px) rotate(-5deg); }
          75% { transform: translateY(-30px) rotate(3deg); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: translateX(-50%) scale(1); }
          10%, 30% { transform: translateX(-50%) scale(0.9); }
          20%, 40% { transform: translateX(-50%) scale(1.1); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        
        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes errorPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
        
        .animate-heartbeat {
          animation: heartbeat 2s infinite;
        }
        
        .animate-shake {
          animation: shake 0.5s;
        }
        
        .animate-cardEnter {
          animation: cardEnter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .animate-errorPulse {
          animation: errorPulse 0.5s;
        }
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .ripple {
          position: relative;
          overflow: hidden;
        }
        
        .ripple::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .ripple:active::before {
          width: 300px;
          height: 300px;
        }
      `}</style>
      
      <div style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 25%, #f9a8d4 50%, #f472b6 75%, #ec4899 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating hearts */}
        <div className="animate-float" style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          fontSize: '2.5rem',
          opacity: 0.1,
          color: '#f9a8d4'
        }}>
          ❤
        </div>
        <div className="animate-float" style={{
          position: 'absolute',
          top: '70%',
          right: '20%',
          fontSize: '3rem',
          opacity: 0.1,
          color: '#f9a8d4',
          animationDelay: '5s'
        }}>
          ❤
        </div>
        <div className="animate-float" style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          fontSize: '1.5rem',
          opacity: 0.1,
          color: '#f9a8d4',
          animationDelay: '2s'
        }}>
          💝
        </div>
        <div className="animate-float" style={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          fontSize: '2.5rem',
          opacity: 0.1,
          color: '#f9a8d4',
          animationDelay: '7s'
        }}>
          💗
        </div>
        <div className="animate-float" style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          fontSize: '1.5rem',
          opacity: 0.1,
          color: '#f9a8d4',
          animationDelay: '4s'
        }}>
          💖
        </div>
        
        {/* Main content */}
        <div className="animate-cardEnter" style={{
          maxWidth: '420px',
          width: '90%',
          position: 'relative',
          padding: '0 1rem'
        }}>
          {/* Top heart */}
          <div className="animate-heartbeat" style={{
            position: 'absolute',
            top: '-2rem',
            left: '50%',
            fontSize: 'clamp(2.5rem, 10vw, 3.75rem)'
          }}>
            💕
          </div>
          
          {/* Title */}
          <h1 className="font-display" style={{
            fontSize: 'clamp(2rem, 8vw, 3rem)',
            fontWeight: 700,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #ec4899 0%, #be123c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.5rem',
            letterSpacing: '-0.025em'
          }}>
            Our Love Story
          </h1>
          
          <p className="font-body" style={{
            textAlign: 'center',
            color: '#be123c',
            fontSize: 'clamp(1rem, 3vw, 1.125rem)',
            marginBottom: '2.5rem',
            letterSpacing: '0.025em'
          }}>
            Enter our special date
          </p>
          
          {/* PIN Display */}
          <div className={shake ? 'animate-shake' : ''} style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            border: `2px solid ${error ? 'rgba(236, 72, 153, 0.6)' : 'rgba(249, 168, 212, 0.4)'}`,
            borderRadius: '1rem',
            padding: 'clamp(1rem, 3vw, 1.5rem)',
            marginBottom: '2.25rem',
            minHeight: 'clamp(4rem, 10vw, 5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(0.5rem, 1.5vw, 0.75rem)'
          }}>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className={i < pin.length && error ? 'animate-errorPulse' : ''}
                style={{
                  width: 'clamp(0.75rem, 2vw, 1rem)',
                  height: 'clamp(0.75rem, 2vw, 1rem)',
                  borderRadius: '50%',
                  background: i < pin.length ? '#be123c' : 'transparent',
                  transform: i < pin.length ? 'scale(1)' : 'scale(0)',
                  boxShadow: i < pin.length ? '0 4px 12px rgba(190, 18, 60, 0.3)' : 'none',
                  transition: 'all 0.3s ease-out'
                }}
              />
            ))}
          </div>
          
          {/* Hint */}
          <div className="font-body" style={{
            textAlign: 'center',
            color: error ? '#ec4899' : '#f9a8d4',
            fontSize: '1rem',
            marginBottom: '1.25rem',
            minHeight: '1.5rem',
            fontStyle: 'italic',
            transition: 'all 0.3s'
          }}>
            {error ? '❌ Wrong date, try again my love' : '💕 (MMDDYYYY)'}
          </div>
          
          {/* Numpad */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(0.75rem, 2vw, 1rem)',
            marginBottom: '1.25rem'
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="ripple font-display"
                style={{
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(249, 168, 212, 0.5)',
                  borderRadius: '1.125rem',
                  padding: 'clamp(0.75rem, 3vw, 1.25rem)',
                  fontSize: 'clamp(1.5rem, 5vw, 1.875rem)',
                  fontWeight: 600,
                  color: '#be123c',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(236, 72, 153, 0.25)';
                  e.currentTarget.style.borderColor = 'rgba(244, 114, 182, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(249, 168, 212, 0.5)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(236, 72, 153, 0.2)';
                }}
              >
                {num}
              </button>
            ))}
            <div></div>
            <button
              onClick={() => handleNumberClick('0')}
              className="ripple font-display"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(249, 168, 212, 0.5)',
                borderRadius: '1.125rem',
                padding: 'clamp(0.75rem, 3vw, 1.25rem)',
                fontSize: 'clamp(1.5rem, 5vw, 1.875rem)',
                fontWeight: 600,
                color: '#be123c',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(236, 72, 153, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(244, 114, 182, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(249, 168, 212, 0.5)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(236, 72, 153, 0.2)';
              }}
            >
              0
            </button>
            <div></div>
          </div>
          
          {/* Action Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(0.75rem, 2vw, 1rem)'
          }}>
            <button
              onClick={handleDelete}
              className="font-body"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(249, 168, 212, 0.5)',
                borderRadius: '1.125rem',
                padding: 'clamp(0.75rem, 2.5vw, 1rem)',
                fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                color: '#be123c',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.025em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(244, 114, 182, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(249, 168, 212, 0.5)';
              }}
            >
              Delete
            </button>
            <button
              onClick={handleSubmit}
              disabled={pin.length !== 8}
              className="font-body"
              style={{
                background: pin.length === 8 ? 'linear-gradient(135deg, #ec4899 0%, #be123c 100%)' : 'rgba(236, 72, 153, 0.5)',
                border: '2px solid #be123c',
                borderRadius: '1.125rem',
                padding: 'clamp(0.75rem, 2.5vw, 1rem)',
                fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                color: 'white',
                fontWeight: 600,
                cursor: pin.length === 8 ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease',
                letterSpacing: '0.025em',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (pin.length === 8) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(190, 18, 60, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (pin.length === 8) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <span>Enter</span>
              <span style={{ marginLeft: '0.5rem' }}>→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}