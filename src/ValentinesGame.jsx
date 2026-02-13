import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import herPortrait from './assets/images/game/she.jpg'; // Her picture
import myPortrait from './assets/images/game/he.jpg';  // Your picture

export default function ValentinesGame() {
  const navigate = useNavigate();
  const [birdPos, setBirdPos] = useState(250);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [pipePos, setPipePos] = useState(400);
  const [pipeHeight, setPipeHeight] = useState(150);
  const [hasWon, setHasWon] = useState(false);
  const [trail, setTrail] = useState([]);
  const [showNextGameModal, setShowNextGameModal] = useState(false);

  const BIRD_SIZE = 55;
  const GRAVITY = 3.5;
  const JUMP_STRENGTH = 60;
  const PIPE_WIDTH = 60;
  const GAP = 180;
  const WINNING_SCORE = 10;

  // ── RESET GAME FUNCTION ──
  const resetGame = () => {
    setBirdPos(250);
    setScore(0);
    setGameOver(false);
    setHasWon(false);
    setGameStarted(false);
    setPipePos(400);
    setTrail([]);
    setShowNextGameModal(false);
  };

  // ── Game Loop ──
  useEffect(() => {
    let timer;
    if (gameStarted && !gameOver && !hasWon) {
      timer = setInterval(() => {
        setBirdPos((pos) => pos + GRAVITY);
        
        // Create Trail Effect
        setTrail((prev) => [
          ...prev.slice(-8), 
          { id: Date.now(), top: birdPos + 20, left: 65 }
        ]);

        setPipePos((pos) => {
          if (pos <= -PIPE_WIDTH) {
            const newScore = score + 1;
            setScore(newScore);
            if (newScore >= WINNING_SCORE) {
              setHasWon(true);
              // Show next game modal after a brief celebration delay
              setTimeout(() => setShowNextGameModal(true), 2500);
            }
            setPipeHeight(Math.floor(Math.random() * 200) + 50);
            return 400;
          }
          return pos - 6;
        });
      }, 24);
    }
    return () => clearInterval(timer);
  }, [gameStarted, gameOver, hasWon, score, birdPos]);

  // ── Collision Detection ──
  useEffect(() => {
    if (!gameStarted || gameOver || hasWon) return;

    const birdRight = 50 + BIRD_SIZE - 10;
    const birdLeft = 50 + 10;
    const birdTop = birdPos + 10;
    const birdBottom = birdPos + BIRD_SIZE - 10;

    const pipeLeft = pipePos;
    const pipeRight = pipePos + PIPE_WIDTH;

    if (birdRight > pipeLeft && birdLeft < pipeRight) {
      if (birdTop < pipeHeight || birdBottom > pipeHeight + GAP) {
        setGameOver(true);
      }
    }

    if (birdPos > 545 || birdPos < -10) {
      setGameOver(true);
    }
  }, [birdPos, pipePos, pipeHeight, gameStarted, gameOver, hasWon]);

  const handleJump = () => {
    if (!gameStarted) setGameStarted(true);
    if (!gameOver && !hasWon) setBirdPos((pos) => pos - JUMP_STRENGTH);
  };

  return (
    <div onClick={handleJump} style={containerStyle}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&family=Playfair+Display:wght@700;900&display=swap');
        
        * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          background: #ec4899;
        }

        @keyframes fadeOut { from { opacity: 0.8; transform: scale(1); } to { opacity: 0; transform: scale(0.5); } }
        @keyframes fall { to { transform: translateY(100vh) rotate(360deg); } }
        
        @keyframes cloudMove {
          from { transform: translateX(400px); }
          to { transform: translateX(-150px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.4);
          filter: blur(8px);
          border-radius: 50px;
          pointer-events: none;
        }
      `}</style>

      {/* ── HEADING SECTION ── */}
      <div style={headingContainerStyle}>
        <div style={heartIconStyle}>💖</div>
        <h1 style={mainTitleStyle}>Flappy Love</h1>
        <p style={subtitleStyle}>Win My Heart Challenge</p>
      </div>

      {/* ── SCORE DISPLAY ── */}
      <div style={scoreContainerStyle}>
        <div style={scoreStyle}>
          <span style={{fontSize: '1rem', fontWeight: '600', opacity: 0.9}}>Score: </span>
          <span style={{fontSize: '1.8rem', fontWeight: '900'}}>{score}</span>
          <span style={{fontSize: '1rem', fontWeight: '600', opacity: 0.9}}> / {WINNING_SCORE}</span>
        </div>
      </div>

      <div style={gameAreaStyle}>
        {/* Clouds */}
        <div className="cloud" style={{ width: '100px', height: '30px', top: '10%', animation: 'cloudMove 15s linear infinite' }} />
        <div className="cloud" style={{ width: '120px', height: '40px', top: '40%', animation: 'cloudMove 20s linear infinite 2s' }} />
        <div className="cloud" style={{ width: '80px', height: '25px', top: '70%', animation: 'cloudMove 12s linear infinite 5s' }} />

        {/* Trail */}
        {trail.map((t) => (
          <div key={t.id} style={{
            position: 'absolute', top: t.top, left: t.left,
            fontSize: '15px', pointerEvents: 'none',
            animation: 'fadeOut 0.5s forwards'
          }}>💗</div>
        ))}

        {/* Her Portrait */}
        <div style={{
          position: 'absolute', left: '50px', top: birdPos,
          width: BIRD_SIZE, height: BIRD_SIZE, borderRadius: '50%',
          border: '3px solid #fff', overflow: 'hidden', zIndex: 5,
          transition: 'top 0.1s ease-out', boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
        }}>
          <img 
            src={herPortrait} 
            style={{width:'100%', height:'100%', objectFit:'cover', objectPosition: 'center 20%'}} 
            alt="Her" 
          />
        </div>

        {/* Pipes */}
        <div style={{...pipeStyle, left: pipePos, height: pipeHeight, top: 0, borderRadius: '0 0 15px 15px', borderBottom: '4px solid rgba(0,0,0,0.1)'}} />
        <div style={{...pipeStyle, left: pipePos, top: pipeHeight + GAP, height: 600, borderRadius: '15px 15px 0 0', borderTop: '4px solid rgba(0,0,0,0.1)'}} />

        {/* Start Overlay */}
        {!gameStarted && !gameOver && !hasWon && (
          <div style={overlayStyle}>
             <div style={{fontSize: '3rem', marginBottom: '10px'}}>☁️</div>
             <p style={{fontWeight: '800', fontSize: '1.2rem', margin: 0}}>TAP TO FLY</p>
             <p style={{fontSize: '0.9rem', opacity: 0.8}}>Reach 10 to win my heart!</p>
          </div>
        )}

        {/* Game Over Overlay */}
        {gameOver && !hasWon && (
          <div style={overlayStyle}>
            <p style={{fontWeight: '800', fontSize: '1.5rem', margin: '0 0 10px 0'}}>OOPS! 💔</p>
            <p style={{margin: '0 0 15px 0'}}>Try again, beautiful!</p>
            <button onClick={(e) => { e.stopPropagation(); resetGame(); }} style={btnStyle}>Restart Game</button>
          </div>
        )}

        {/* Victory Overlay */}
        {hasWon && !showNextGameModal && (
          <div style={{...overlayStyle, background: 'rgba(190, 18, 60, 0.95)'}}>
            <div style={portraitContainer}>
              <img src={myPortrait} style={{width:'100%', height:'100%', objectFit:'cover'}} alt="Me" />
            </div>
            <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: '#fff', margin: '0 0 5px 0'}}>You Won My Heart! 💖</h1>
            <p style={{fontSize: '1rem', marginBottom: '15px'}}>I'm yours forever.</p>
            
            {/* Confetti */}
            {[...Array(25)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute', top: '-10%', left: `${Math.random() * 100}%`,
                fontSize: '1.5rem', animation: `fall ${2 + Math.random() * 3}s linear infinite`
              }}>✨</div>
            ))}
          </div>
        )}

        {/* Next Game Modal */}
        {showNextGameModal && (
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(236, 72, 153, 0.98)',
              backdropFilter: 'blur(10px)',
              padding: '30px',
              zIndex: 20,
              animation: 'slideUp 0.5s ease-out'
            }}
          >
            {/* Floating hearts around modal */}
            {[...Array(12)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                fontSize: '1.5rem',
                animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
                left: `${10 + i * 7}%`,
                top: `${20 + (i % 3) * 25}%`,
                opacity: 0.6
              }}>💕</div>
            ))}

            <div style={{
              fontSize: '4rem',
              marginBottom: '15px',
              animation: 'heartbeat 1.2s ease-in-out infinite'
            }}>🎮</div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.8rem',
              color: '#fff',
              margin: '0 0 10px 0',
              textAlign: 'center',
              textShadow: '0 4px 10px rgba(0,0,0,0.3)'
            }}>
              Ready for the Next Challenge?
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.95)',
              margin: '0 0 25px 0',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              Do You Know Me? 💝<br/>
              <span style={{fontSize: '0.9rem', opacity: 0.9}}>(Love Quiz)</span>
            </p>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                navigate('/quiz'); 
              }} 
              style={{
                padding: '14px 40px',
                borderRadius: '50px',
                border: '3px solid #fff',
                background: '#fff',
                color: '#ec4899',
                fontWeight: '800',
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                animation: 'pulse 2s ease-in-out infinite',
                marginBottom: '15px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
            >
              Let's Play! 💖
            </button>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                navigate('/menu'); 
              }} 
              style={{
                padding: '10px 30px',
                borderRadius: '50px',
                border: '2px solid rgba(255,255,255,0.6)',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                color: '#fff',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.3)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Back to Menu
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <button 
        onClick={(e) => { e.stopPropagation(); navigate('/menu'); }} 
        style={bottomBackBtnStyle}
      >
        ← Back to Menu
      </button>
    </div>
  );
}

// ── Styles ──
const containerStyle = {
  height: '100vh',
  width: '100vw',
  margin: 0,
  padding: 0,
  background: 'linear-gradient(145deg, #fce7f3 0%, #ec4899 100%)',
  backgroundAttachment: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  touchAction: 'none',
  paddingTop: '20px'
};

const headingContainerStyle = {
  textAlign: 'center',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  zIndex: 20
};

const heartIconStyle = {
  fontSize: '2.5rem',
  animation: 'heartbeat 1.5s ease-in-out infinite',
  marginBottom: '5px',
  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
};

const mainTitleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: '2.5rem',
  fontWeight: '900',
  color: '#fff',
  margin: '0',
  textShadow: '0 6px 15px rgba(0,0,0,0.3)',
  letterSpacing: '1px',
  lineHeight: '1'
};

const subtitleStyle = {
  fontSize: '0.9rem',
  fontWeight: '400',
  color: 'rgba(255, 255, 255, 0.95)',
  margin: '5px 0 0 0',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  textShadow: '0 2px 8px rgba(0,0,0,0.2)'
};

const scoreContainerStyle = {
  marginBottom: '15px',
  position: 'relative',
  zIndex: 20
};

const scoreStyle = { 
  background: 'rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(10px)',
  padding: '8px 25px',
  borderRadius: '50px',
  border: '2px solid rgba(255, 255, 255, 0.4)',
  color: '#fff',
  textShadow: '0 2px 6px rgba(0,0,0,0.2)',
  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  display: 'inline-block'
};

const gameAreaStyle = {
  width: '350px',
  height: '600px',
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(12px)',
  border: '2px solid rgba(255, 255, 255, 0.5)',
  borderRadius: '30px',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
};

const portraitContainer = {
  width: '130px',
  height: '130px',
  borderRadius: '50%',
  border: '5px solid white',
  overflow: 'hidden',
  marginBottom: '15px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
};

const pipeStyle = { 
  position: 'absolute', 
  width: 60, 
  background: 'linear-gradient(to bottom, #be123c, #9f1239)',
  boxShadow: '0 0 10px rgba(0,0,0,0.2)'
};

const overlayStyle = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,0.5)',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
  zIndex: 10
};

const btnStyle = { 
  marginTop: '0px', 
  padding: '12px 30px', 
  borderRadius: '50px', 
  border: 'none', 
  background: '#fff', 
  color: '#ec4899', 
  fontWeight: '800', 
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
  transition: 'transform 0.2s'
};

const bottomBackBtnStyle = {
  marginTop: '15px', 
  background: 'rgba(255, 255, 255, 0.3)', 
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.4)', 
  padding: '10px 30px', 
  borderRadius: '50px',
  color: 'white', 
  fontSize: '0.9rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  position: 'relative', 
  zIndex: 20
};