import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlossomingBouquet() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Start animations
    setTimeout(() => setLoaded(true), 100);
    setTimeout(() => setShowMessage(true), 6000);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        
        *,
        *::after,
        *::before {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-pink: #FF69B4;
          --light-pink: #FFB6C1;
          --deep-pink: #FF1493;
          --accent-pink: #FFC0CB;
        }

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
          overflow: hidden;
          perspective: 1000px;
        }

        /* Falling petals for background decoration */
        @keyframes petalFall {
          0% {
            transform: translateY(-100px) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(120vh) rotate(360deg) translateX(-25px);
            opacity: 0;
          }
        }

        .flowers {
          position: absolute;
          left: 50%;
          bottom: -10vh;
          transform: translateX(-50%) scale(1.4);
          transform-origin: bottom center;
        }

        /* Mobile optimized - MUCH LARGER flowers */
        @media (max-width: 768px) {
          .flowers {
            bottom: -15vh;
            transform: translateX(-50%) scale(1.3);
          }
        }

        @media (max-width: 480px) {
          .flowers {
            bottom: -12vh;
            transform: translateX(-50%) scale(1.2);
          }
        }

        /* Flower animations */
        @keyframes moving-flower-1 {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-2deg); }
        }

        @keyframes moving-flower-2 {
          0%, 100% { transform: rotate(18deg); }
          50% { transform: rotate(14deg); }
        }

        @keyframes moving-flower-3 {
          0%, 100% { transform: rotate(-18deg); }
          50% { transform: rotate(-20deg) rotateY(-10deg); }
        }

        @keyframes blooming-flower {
          0% { transform: scale(0); }
        }

        @keyframes blooming-leaf-right {
          0% {
            transform-origin: left;
            transform: rotate(70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes blooming-leaf-left {
          0% {
            transform-origin: right;
            transform: rotate(-70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes grow-flower-tree {
          0% {
            height: 0;
            border-radius: 1vmin;
          }
        }

        @keyframes light-ans {
          0% {
            opacity: 0;
            transform: translateY(0vmin);
          }
          25% {
            opacity: 1;
            transform: translateY(-5vmin) translateX(-2vmin);
          }
          50% {
            opacity: 1;
            transform: translateY(-15vmin) translateX(2vmin);
            filter: blur(0.2vmin);
          }
          75% {
            transform: translateY(-20vmin) translateX(-2vmin);
            filter: blur(0.2vmin);
          }
          100% {
            transform: translateY(-30vmin);
            opacity: 0;
            filter: blur(1vmin);
          }
        }

        @keyframes grow-ans {
          0% {
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes leaf-ans-1 {
          0%, 100% { transform: rotate(-5deg) scale(1); }
          50% { transform: rotate(5deg) scale(1.1); }
        }

        @keyframes leaf-ans-2 {
          0%, 100% { transform: rotateY(-180deg) rotate(5deg); }
          50% { transform: rotateY(-180deg) rotate(0deg) scale(1.1); }
        }

        @keyframes leaf-ans-3 {
          0%, 100% { transform: rotate(-10deg) rotateY(-180deg); }
          50% { transform: rotate(-20deg) rotateY(-180deg); }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .message-card-enter {
          animation: fadeInScale 1s ease-out forwards;
        }

        .not-loaded * {
          animation-play-state: paused !important;
        }

        /* Flower styles */
        .flower {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform-origin: bottom center;
          z-index: 10;
        }

        .flower--1 {
          transform: translateX(-60%);
          animation: moving-flower-1 4s linear infinite;
        }

        .flower--2 {
          transform: translateX(-50%) rotate(20deg);
          animation: moving-flower-2 4s linear infinite;
        }

        .flower--3 {
          transform: translateX(-40%) rotate(-15deg);
          animation: moving-flower-3 4s linear infinite;
        }

        .flower--4 {
          transform: translateX(-70%) rotate(10deg);
          animation: moving-flower-1 4.5s linear infinite;
        }

        .flower--5 {
          transform: translateX(-30%) rotate(-25deg);
          animation: moving-flower-2 3.5s linear infinite;
        }

        .flower--6 {
          transform: translateX(-55%) rotate(5deg);
          animation: moving-flower-3 4.2s linear infinite;
        }

        .flower__leafs {
          position: relative;
          animation: blooming-flower 2s backwards;
        }

        .flower__leafs--1 { animation-delay: 1.1s; }
        .flower__leafs--2 { animation-delay: 1.4s; }
        .flower__leafs--3 { animation-delay: 1.7s; }
        .flower__leafs--4 { animation-delay: 2.0s; }
        .flower__leafs--5 { animation-delay: 2.3s; }
        .flower__leafs--6 { animation-delay: 2.6s; }

        .flower__leafs::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-50%, -100%);
          width: 8vmin;
          height: 8vmin;
          background-color: #ff69b4;
          filter: blur(10vmin);
        }

        .flower__leaf {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 8vmin;
          height: 11vmin;
          border-radius: 51% 49% 47% 53% / 44% 45% 55% 69%;
          background-image: linear-gradient(to top, var(--deep-pink), var(--light-pink));
          transform-origin: bottom center;
          opacity: 0.9;
          box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);
        }

        .flower__leaf--1 { transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg); }
        .flower__leaf--2 { transform: translate(-50%, -4%) rotateX(40deg); }
        .flower__leaf--3 { transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg); }
        .flower__leaf--4 {
          width: 8vmin;
          height: 8vmin;
          transform-origin: bottom left;
          border-radius: 4vmin 10vmin 4vmin 4vmin;
          transform: translate(-0%, 18%) rotateX(70deg) rotate(-43deg);
          background-image: linear-gradient(to top, var(--primary-pink), var(--accent-pink));
          z-index: 1;
          opacity: 0.8;
        }

        .flower__white-circle {
          position: absolute;
          left: -3.5vmin;
          top: -3vmin;
          width: 9vmin;
          height: 4vmin;
          border-radius: 50%;
          background-color: #fff;
        }

        .flower__white-circle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          border-radius: inherit;
          background: linear-gradient(90deg, rgb(255, 235, 118), rgb(255, 206, 100));
        }

        .flower__line {
          height: 70vmin;
          width: 1.5vmin;
          background-image: 
            linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)),
            linear-gradient(to top, transparent 10%, var(--deep-pink), var(--primary-pink));
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
          animation: grow-flower-tree 4s backwards;
        }

        .flower--1 .flower__line { animation-delay: 0.3s; height: 70vmin; }
        .flower--2 .flower__line { animation-delay: 0.6s; height: 60vmin; }
        .flower--3 .flower__line { animation-delay: 0.9s; height: 55vmin; }
        .flower--4 .flower__line { animation-delay: 1.2s; height: 65vmin; }
        .flower--5 .flower__line { animation-delay: 1.5s; height: 58vmin; }
        .flower--6 .flower__line { animation-delay: 1.8s; height: 62vmin; }

        .flower__line__leaf {
          --w: 7vmin;
          --h: calc(var(--w) + 2vmin);
          position: absolute;
          top: 20%;
          left: 90%;
          width: var(--w);
          height: var(--h);
          border-top-right-radius: var(--h);
          border-bottom-left-radius: var(--h);
          background-image: linear-gradient(to top, rgba(255, 20, 147, 0.4), var(--primary-pink));
        }

        .flower__line__leaf--1 { transform: rotate(70deg) rotateY(30deg); animation: blooming-leaf-right 0.8s 1.6s backwards; }
        .flower__line__leaf--2 { top: 45%; transform: rotate(70deg) rotateY(30deg); animation: blooming-leaf-right 0.8s 1.4s backwards; }
        .flower__line__leaf--3 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 12%;
          transform: rotate(-70deg) rotateY(30deg);
          animation: blooming-leaf-left 0.8s 1.2s backwards;
        }
        .flower__line__leaf--4 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 40%;
          transform: rotate(-70deg) rotateY(30deg);
          animation: blooming-leaf-left 0.8s 1s backwards;
        }

        .flower__light {
          position: absolute;
          bottom: 0vmin;
          width: 1vmin;
          height: 1vmin;
          background-color: rgb(255, 251, 100);
          border-radius: 50%;
          filter: blur(0.2vmin);
          animation: light-ans 4s linear infinite backwards;
        }

        .flower__light:nth-child(odd) { background-color: #ff69b4; }
        .flower__light--1 { left: -2vmin; animation-delay: 1s; }
        .flower__light--2 { left: 3vmin; animation-delay: 0.5s; }
        .flower__light--3 { left: -6vmin; animation-delay: 0.3s; }
        .flower__light--4 { left: 6vmin; animation-delay: 0.9s; }
        .flower__light--5 { left: -1vmin; animation-delay: 1.5s; }
        .flower__light--6 { left: -4vmin; animation-delay: 3s; }
        .flower__light--7 { left: 3vmin; animation-delay: 2s; }
        .flower__light--8 { left: -6vmin; animation-delay: 3.5s; }

        .grow-ans {
          animation: grow-ans 2s backwards;
        }

        .long-g {
          position: absolute;
          bottom: 0;
          transform-origin: bottom left;
        }

        .long-g .leaf {
          --w: 15vmin;
          --h: 40vmin;
          position: absolute;
          bottom: 0;
          width: var(--w);
          height: var(--h);
          border-top-left-radius: 100%;
          border-left: 2vmin solid var(--deep-pink);
          -webkit-mask-image: linear-gradient(to top, transparent 20%, #FFB6C1);
          transform-origin: bottom center;
        }

        .long-g .leaf--0 { left: 2vmin; animation: leaf-ans-1 4s linear infinite; }
        .long-g .leaf--1 { --w: 5vmin; --h: 60vmin; animation: leaf-ans-1 4s linear infinite; }
        .long-g .leaf--2 {
          --w: 10vmin;
          --h: 40vmin;
          left: -0.5vmin;
          bottom: 5vmin;
          transform-origin: bottom left;
          transform: rotateY(-180deg);
          animation: leaf-ans-2 3s linear infinite;
        }
        .long-g .leaf--3 {
          --w: 5vmin;
          --h: 30vmin;
          left: -1vmin;
          bottom: 3.2vmin;
          transform-origin: bottom left;
          transform: rotate(-10deg) rotateY(-180deg);
          animation: leaf-ans-3 3s linear infinite;
        }

        /* Position variations for long grass */
        .long-g--0 { left: -25%; }
        .long-g--1 { left: -35%; transform: scale(0.8) rotate(-5deg); }
        .long-g--2 { left: -15%; transform: scale(0.6) rotateX(60deg); }
        .long-g--3 { left: -5%; transform: scale(0.7); }
        .long-g--4 { right: -15%; transform: scale(0.6) rotateX(60deg); }
        .long-g--5 { right: -25%; transform: scale(0.8) rotate(2deg); }
        .long-g--6 { left: 10%; z-index: 100; filter: blur(0.3vmin); transform: scale(0.8) rotate(2deg); }
        .long-g--7 { right: 10%; z-index: -1; filter: blur(0.3vmin); transform: scale(0.6) rotate(2deg); opacity: 0.7; }
      `}</style>

      <div className={loaded ? '' : 'not-loaded'} style={containerStyle}>
        
        {/* Falling petals background decoration */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`petal-${i}`}
            style={{
              position: 'fixed',
              top: '-80px',
              left: `${(i / 20) * 100 + (Math.random() * 5 - 2.5)}%`,
              fontSize: `${0.8 + Math.random() * 1.2}rem`,
              pointerEvents: 'none',
              zIndex: 1,
              opacity: 0.3,
              animation: `petalFall ${8 + Math.random() * 8}s ${Math.random() * 12}s infinite linear`,
            }}
          >
            {['🌸','🌺','💐','🌷','💕'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
        
        {/* Flowers - Large and prominent */}
        <div className="flowers">
          {/* Main Flowers */}
          <div className="flower flower--1">
            <div className="flower__leafs flower__leafs--1">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className={`flower__light flower__light--${i}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          <div className="flower flower--2">
            <div className="flower__leafs flower__leafs--2">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className={`flower__light flower__light--${i}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          <div className="flower flower--3">
            <div className="flower__leafs flower__leafs--3">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className={`flower__light flower__light--${i}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          <div className="flower flower--4">
            <div className="flower__leafs flower__leafs--4">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className={`flower__light flower__light--${i}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          <div className="flower flower--5">
            <div className="flower__leafs flower__leafs--5">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className={`flower__light flower__light--${i}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          <div className="flower flower--6">
            <div className="flower__leafs flower__leafs--6">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className={`flower__light flower__light--${i}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          {/* Long Grass Elements */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map(index => (
            <div key={index} className={`long-g long-g--${index}`}>
              <div className="grow-ans" style={{ '--d': '3s' }}>
                <div className="leaf leaf--0"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '2.2s' }}>
                <div className="leaf leaf--1"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3.4s' }}>
                <div className="leaf leaf--2"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3.6s' }}>
                <div className="leaf leaf--3"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Card - Centered over flowers */}
        {showMessage && (
          <div className="message-card-enter" style={messageCardStyle}>
            <div style={messageIconStyle}>💐</div>
            <h2 style={messageHeadingStyle}>Happy Valentines Love,</h2>
            <p style={messageTextStyle}>
              Here's the flowers for you!
            </p>

            <div style={buttonsContainerStyle}>
              <button 
                onClick={() => navigate('/menu')} 
                style={primaryButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(255, 105, 180, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255, 105, 180, 0.4)';
                }}
              >
                Continue &nbsp;→
              </button>
              <button 
                onClick={() => navigate('/home')} 
                style={secondaryButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.target.style.borderColor = 'rgba(255, 182, 193, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.borderColor = 'rgba(255, 182, 193, 0.4)';
                }}
              >
                ← Back Home
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100%',
  background: '#FFB6C1',
  backgroundImage: `
    radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 192, 203, 0.6) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 105, 180, 0.4) 0%, transparent 50%),
    linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFB6C1 100%)
  `,
  overflow: 'hidden',
  perspective: '1000px',
  position: 'relative',
};

const messageCardStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(40px) saturate(180%)',
  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
  border: '2px solid rgba(255, 182, 193, 0.25)',
  borderRadius: '28px',
  padding: 'clamp(22px, 4.5vw, 38px) clamp(20px, 4vw, 32px)',
  textAlign: 'center',
  boxShadow: '0 20px 60px rgba(255, 105, 180, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
  zIndex: 1000,
  maxWidth: '440px',
  width: '90%',
};

const messageIconStyle = {
  fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
  marginBottom: 'clamp(10px, 2vw, 16px)',
  filter: 'drop-shadow(0 5px 15px rgba(255, 105, 180, 0.6))',
};

const messageHeadingStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 'clamp(1.5rem, 5vw, 2rem)',
  fontWeight: '700',
  fontStyle: 'italic',
  color: '#fff',
  marginBottom: 'clamp(8px, 1.5vw, 12px)',
  textShadow: '0 3px 20px rgba(190, 18, 60, 0.4), 0 1px 3px rgba(0, 0, 0, 0.1)',
  lineHeight: '1.3',
};

const messageTextStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 'clamp(1.05rem, 2.8vw, 1.25rem)',
  fontWeight: '500',
  fontStyle: 'italic',
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: 'clamp(18px, 3.5vw, 26px)',
  lineHeight: '1.5',
  textShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
};

const buttonsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'clamp(10px, 2vw, 14px)',
  width: '100%',
};

const primaryButtonStyle = {
  padding: 'clamp(12px, 2.8vw, 16px) clamp(24px, 4.5vw, 40px)',
  fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
  fontWeight: '700',
  fontFamily: "'Poppins', sans-serif",
  background: 'linear-gradient(90deg, #ec4899, #be123c)',
  color: '#fff',
  border: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.25s ease',
  boxShadow: '0 8px 35px rgba(236, 72, 153, 0.45)',
  letterSpacing: '0.04em',
};

const secondaryButtonStyle = {
  padding: 'clamp(10px, 2.3vw, 14px) clamp(20px, 4vw, 35px)',
  fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
  fontWeight: '600',
  fontFamily: "'Poppins', sans-serif",
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  border: '2px solid rgba(255, 255, 255, 0.4)',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.25s ease',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};