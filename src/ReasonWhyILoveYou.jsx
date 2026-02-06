import smile from './assets/images/reasons/smile.jpg';
import kindness from './assets/images/reasons/kindness.jpg';
import kiss from './assets/images/reasons/kiss.jpg';
import attitude from './assets/images/reasons/attitude.jpg';
import support from './assets/images/reasons/support.jpg';
import silly from './assets/images/reasons/silly.jpg';
import passion from './assets/images/reasons/passion.jpg';
import hugs from './assets/images/reasons/hugs.jpg';
import getme from './assets/images/reasons/getme.mp4';
import everything from './assets/images/reasons/everything.jpg';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReasonWhyILoveYou() {
  const navigate = useNavigate();
  const [currentReason, setCurrentReason] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const REASONS = [
    {
      id: 1,
      number: "01",
      title: "Your Smile",
      reason: "Every time you smile, my whole world lights up. It's the first thing I fell in love with and it still makes my heart skip a beat.",
      emoji: "😊",
      color: "linear-gradient(135deg, #ec4899, #f472b6)",
      image: smile
    },
    {
      id: 2,
      number: "02",
      title: "Your Kindness",
      reason: "The way you treat everyone with such genuine warmth and compassion shows me what a beautiful soul you have.",
      emoji: "💝",
      color: "linear-gradient(135deg, #f472b6, #fbbf24)",
      image: kindness
    },
    {
      id: 3,
      number: "03",
      title: "Your Kiss",
      reason: "Your laugh is my favorite sound in the world. It's contagious, genuine, and it makes even the toughest days better.",
      emoji: "😂",
      color: "linear-gradient(135deg, #fbbf24, #fb923c)",
      image: kiss
    },
    {
      id: 4,
      number: "04",
      title: "Your Attitude",
      reason: "I love how your mind works - the way you think, analyze, and see the world differently. Our conversations never get boring.",
      emoji: "🧠",
      color: "linear-gradient(135deg, #fb923c, #f87171)",
      image: attitude
    },
    {
      id: 5,
      number: "05",
      title: "Your Support",
      reason: "You're always there for me, cheering me on and believing in me even when I don't believe in myself.",
      emoji: "🤗",
      color: "linear-gradient(135deg, #f87171, #dc2626)",
      image: support
    },
    {
      id: 6,
      number: "06",
      title: "Your Silly",
      reason: "All those little things that make you uniquely you - I love every single one of them, even the weird ones!",
      emoji: "🥰",
      color: "linear-gradient(135deg, #dc2626, #be123c)",
      image: silly
    },
    {
      id: 7,
      number: "07",
      title: "Your Passion",
      reason: "The way you light up when talking about things you love is absolutely mesmerizing. Your enthusiasm is infectious.",
      emoji: "✨",
      color: "linear-gradient(135deg, #be123c, #ec4899)",
      image: passion
    },
    {
      id: 8,
      number: "08",
      title: "Your Hugs",
      reason: "Being in your arms feels like home. It's my safe place, my comfort zone, where everything just makes sense.",
      emoji: "🫂",
      color: "linear-gradient(135deg, #ec4899, #d946ef)",
      image: hugs
    },
    {
      id: 9,
      number: "09",
      title: "How You Get Me",
      reason: "You understand me in ways no one else does. You know what I need before I even say it.",
      emoji: "💕",
      color: "linear-gradient(135deg, #d946ef, #c026d3)",
      media: getme,
      isVideo: true
    },
    {
      id: 10,
      number: "10",
      title: "Everything",
      reason: "But honestly? I love you for a million little reasons that I could never fully put into words. You're simply perfect to me.",
      emoji: "💖",
      color: "linear-gradient(135deg, #c026d3, #ec4899)",
      image: everything
    }
  ];

  const handleNext = () => {
    if (currentReason < REASONS.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentReason(currentReason + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentReason > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentReason(currentReason - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handleDotClick = (index) => {
    if (index !== currentReason) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentReason(index);
        setIsFlipping(false);
      }, 300);
    }
  };

  const current = REASONS[currentReason];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFB6C1',
      backgroundImage: `
        radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.8) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 192, 203, 0.6) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(255, 105, 180, 0.4) 0%, transparent 50%),
        linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFB6C1 100%)
      `,
      padding: isMobile ? '1.5rem' : '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating hearts background */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            fontSize: isMobile ? '1.5rem' : '2rem',
            animation: `float ${5 + i}s ease-in-out infinite`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3,
            pointerEvents: 'none'
          }}
        >
          💖
        </div>
      ))}

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: isMobile ? '1.5rem' : '2rem', zIndex: 1 }}>
        <h1 style={{
          fontSize: isMobile ? '2rem' : '3rem',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '700',
          color: '#C71585',
          marginBottom: '0.5rem',
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)'
        }}>
          Why I Love You
        </h1>
        <p style={{
          fontSize: isMobile ? '1rem' : '1.2rem',
          fontFamily: "'Poppins', sans-serif",
          color: '#D8527B'
        }}>
          Let me count the ways... 💕
        </p>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '100%',
        maxWidth: '600px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
        marginBottom: isMobile ? '1.5rem' : '2rem',
        overflow: 'hidden',
        zIndex: 1
      }}>
        <div style={{
          width: `${((currentReason + 1) / REASONS.length) * 100}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #ec4899, #fbbf24)',
          transition: 'width 0.3s ease',
          borderRadius: '10px'
        }} />
      </div>

      {/* Main Card */}
      <div style={{
        width: '100%',
        maxWidth: '600px',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '30px',
        padding: isMobile ? '2rem' : '3rem',
        boxShadow: '0 20px 60px rgba(199, 21, 133, 0.3)',
        border: '2px solid rgba(255, 255, 255, 1)',
        position: 'relative',
        overflow: 'hidden',
        transform: isFlipping ? 'rotateY(90deg)' : 'rotateY(0deg)',
        transition: 'transform 0.3s ease',
        zIndex: 1
      }}>
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: current.color,
          opacity: 0.2,
          borderRadius: '30px 30px 0 0'
        }} />

        {/* Image/Video Display */}
        <div style={{
          width: '100%',
          height: isMobile ? '250px' : '300px',
          marginBottom: '2rem',
          borderRadius: '20px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 10px 30px rgba(199, 21, 133, 0.3)'
        }}>
          {current.isVideo ? (
            <video
              src={current.media}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          ) : (
            <img
              src={current.image}
              alt={current.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          )}
        </div>

        {/* Number Badge */}
        <div style={{
          position: 'absolute',
          top: isMobile ? '1.5rem' : '2rem',
          right: isMobile ? '1.5rem' : '2rem',
          width: isMobile ? '50px' : '60px',
          height: isMobile ? '50px' : '60px',
          borderRadius: '50%',
          background: current.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: isMobile ? '1.2rem' : '1.5rem',
          fontWeight: '700',
          color: 'white',
          boxShadow: '0 5px 15px rgba(199, 21, 133, 0.3)',
          zIndex: 2
        }}>
          {current.number}
        </div>

        {/* Emoji */}
        <div style={{
          fontSize: isMobile ? '3rem' : '4rem',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          {current.emoji}
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: isMobile ? '1.8rem' : '2.2rem',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '700',
          color: '#C71585',
          textAlign: 'center',
          marginBottom: '1.5rem',
          textShadow: '1px 1px 2px rgba(255, 182, 193, 0.3)'
        }}>
          {current.title}
        </h2>

        {/* Reason Text */}
        <p style={{
          fontSize: isMobile ? '1.1rem' : '1.3rem',
          fontFamily: "'Poppins', sans-serif",
          color: '#4A4A4A',
          textAlign: 'center',
          lineHeight: '1.8',
          marginBottom: '2rem'
        }}>
          {current.reason}
        </p>

        {/* Counter */}
        <div style={{
          textAlign: 'center',
          fontSize: isMobile ? '0.9rem' : '1rem',
          color: '#D8527B',
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '1.5rem'
        }}>
          Reason {currentReason + 1} of {REASONS.length}
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '1rem' : '1.5rem',
          marginTop: '2rem'
        }}>
          <button
            onClick={handlePrev}
            disabled={currentReason === 0}
            style={{
              width: isMobile ? '45px' : '50px',
              height: isMobile ? '45px' : '50px',
              borderRadius: '50%',
              background: currentReason === 0 
                ? 'rgba(255, 182, 193, 0.3)' 
                : 'rgba(236, 72, 153, 0.8)',
              border: '2px solid rgba(236, 72, 153, 0.5)',
              color: 'white',
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              cursor: currentReason === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: currentReason === 0 ? 0.5 : 1,
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            ←
          </button>

          {/* Dot Indicators */}
          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            {REASONS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                style={{
                  width: currentReason === index ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '10px',
                  background: currentReason === index
                    ? 'linear-gradient(135deg, #ec4899, #fbbf24)'
                    : 'rgba(236, 72, 153, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: currentReason === index
                    ? '0 4px 12px rgba(236, 72, 153, 0.5)'
                    : 'none',
                  WebkitTapHighlightColor: 'transparent'
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentReason === REASONS.length - 1}
            style={{
              width: isMobile ? '45px' : '50px',
              height: isMobile ? '45px' : '50px',
              borderRadius: '50%',
              background: currentReason === REASONS.length - 1
                ? 'rgba(255, 182, 193, 0.3)'
                : 'rgba(236, 72, 153, 0.8)',
              border: '2px solid rgba(236, 72, 153, 0.5)',
              color: 'white',
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              cursor: currentReason === REASONS.length - 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: currentReason === REASONS.length - 1 ? 0.5 : 1,
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/menu')}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.background = 'rgba(236, 72, 153, 0.9)';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(236, 72, 153, 0.4)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.background = 'rgba(236, 72, 153, 0.7)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(199, 21, 133, 0.3)';
          }
        }}
        style={{
          marginTop: isMobile ? '2rem' : '3rem',
          padding: isMobile ? '0.8rem 2rem' : '1rem 2.5rem',
          background: 'rgba(236, 72, 153, 0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '50px',
          color: 'white',
          fontSize: isMobile ? '1rem' : '1.1rem',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(199, 21, 133, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          outline: 'none',
          zIndex: 10,
          WebkitTapHighlightColor: 'transparent'
        }}
      >
        ← Back to Menu
      </button>

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(10deg);
            }
          }
        `}
      </style>
    </div>
  );
}