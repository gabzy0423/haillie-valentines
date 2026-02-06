import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DigitalScrapbook() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
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

  // Scrapbook pages - customize these with your memories!
  const PAGES = [
    {
      id: 1,
      title: "Our First Date",
      date: "October 17, 2023",
      content: "The day everything changed. I was so nervous, but the moment I saw you, all my worries melted away. We talked for hours like we'd known each other forever.",
      stickers: ["💕", "✨", "🌟"],
      color: "#ec4899",
      decorations: {
        corners: true,
        hearts: true
      }
    },
    {
      id: 2,
      title: "Our Song",
      date: "Always on Repeat",
      content: "Every time I hear it, I think of you. Dancing in the kitchen, singing off-key, making memories that I'll treasure forever.",
      stickers: ["🎵", "💖", "🎶"],
      color: "#f472b6",
      decorations: {
        corners: true,
        hearts: true
      }
    },
    {
      id: 3,
      title: "Late Night Talks",
      date: "3 AM Memories",
      content: "Those endless conversations about everything and nothing. You're the only person I never run out of things to say to.",
      stickers: ["🌙", "⭐", "💫"],
      color: "#fbbf24",
      decorations: {
        corners: true,
        hearts: true
      }
    },
    {
      id: 4,
      title: "Your Laugh",
      date: "My Favorite Sound",
      content: "The way you throw your head back when something's really funny. How your eyes crinkle at the corners. It's the sound of home to me.",
      stickers: ["😄", "💝", "✨"],
      color: "#fb923c",
      decorations: {
        corners: true,
        hearts: true
      }
    },
    {
      id: 5,
      title: "Random Adventures",
      date: "Every Weekend",
      content: "Getting lost together, trying new places, making wrong turns that turn into the best memories. With you, even getting lost is fun.",
      stickers: ["🗺️", "🚗", "💕"],
      color: "#f87171",
      decorations: {
        corners: true,
        hearts: true
      }
    },
    {
      id: 6,
      title: "Lazy Sundays",
      date: "Our Perfect Day",
      content: "Coffee in bed, nowhere to be, just us. These quiet moments with you are my favorite kind of adventure.",
      stickers: ["☕", "🛏️", "💖"],
      color: "#d946ef",
      decorations: {
        corners: true,
        hearts: true
      }
    },
    {
      id: 7,
      title: "Inside Jokes",
      date: "That Only We Understand",
      content: "We have our own language now. A look, a word, and we're both laughing. These silly moments make us, us.",
      stickers: ["😂", "🤭", "💕"],
      color: "#c026d3",
      decorations: {
        corners: true,
        hearts: true
      }
    },
    {
      id: 8,
      title: "Forever & Always",
      date: "Our Promise",
      content: "This is just the beginning of our story. Every page we write together gets better than the last. Here's to all the memories yet to come.",
      stickers: ["💍", "💖", "✨"],
      color: "#ec4899",
      decorations: {
        corners: true,
        hearts: true
      }
    }
  ];

  const handleNextPage = () => {
    if (currentPage < PAGES.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const page = PAGES[currentPage];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        
        * {
          box-sizing: border-box;
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
          overflow-x: hidden;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes pageFlip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(90deg); }
          100% { transform: rotateY(0deg); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        .scrapbook-page {
          transform-style: preserve-3d;
          transition: transform 0.4s ease;
          animation: ${isFlipping ? 'pageFlip 0.4s ease' : 'none'};
        }

        .floating-hearts {
          animation: float 6s ease-in-out infinite;
        }

        .corner-decoration {
          position: absolute;
          width: 80px;
          height: 80px;
          opacity: 0.3;
        }

        .corner-decoration.top-left {
          top: -10px;
          left: -10px;
          border-top: 4px solid currentColor;
          border-left: 4px solid currentColor;
          border-radius: 12px 0 0 0;
        }

        .corner-decoration.top-right {
          top: -10px;
          right: -10px;
          border-top: 4px solid currentColor;
          border-right: 4px solid currentColor;
          border-radius: 0 12px 0 0;
        }

        .corner-decoration.bottom-left {
          bottom: -10px;
          left: -10px;
          border-bottom: 4px solid currentColor;
          border-left: 4px solid currentColor;
          border-radius: 0 0 0 12px;
        }

        .corner-decoration.bottom-right {
          bottom: -10px;
          right: -10px;
          border-bottom: 4px solid currentColor;
          border-right: 4px solid currentColor;
          border-radius: 0 0 12px 0;
        }

        .sticker {
          animation: wiggle 2s ease-in-out infinite;
          display: inline-block;
        }

        .sparkle-element {
          animation: sparkle 3s ease-in-out infinite;
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        width: '100%',
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

        {/* Floating background elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-hearts"
            style={{
              position: 'absolute',
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 6}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2,
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            {['💕', '💖', '✨', '💝', '🌸'][Math.floor(Math.random() * 5)]}
          </div>
        ))}

        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '1.5rem' : '2rem',
          zIndex: 10,
          animation: 'fadeInUp 0.8s ease-out backwards'
        }}>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? '2.2rem' : '3rem',
            fontWeight: 700,
            color: '#C71585',
            marginBottom: '0.5rem',
            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)'
          }}>
            Our Scrapbook 📖
          </h1>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#D8527B',
            fontStyle: 'italic'
          }}>
            Every page tells our story 💕
          </p>
        </div>

        {/* Page counter */}
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: isMobile ? '0.9rem' : '1rem',
          color: '#C71585',
          marginBottom: isMobile ? '1rem' : '1.5rem',
          fontWeight: '600',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.6)',
          padding: '0.5rem 1.5rem',
          borderRadius: '50px',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(236, 72, 153, 0.3)'
        }}>
          Page {currentPage + 1} of {PAGES.length}
        </div>

        {/* Scrapbook Page */}
        <div 
          className="scrapbook-page"
          style={{
            width: '100%',
            maxWidth: isMobile ? '100%' : '700px',
            background: '#fffbf5',
            borderRadius: '20px',
            padding: isMobile ? '2rem 1.5rem' : '3rem 2.5rem',
            boxShadow: '0 20px 60px rgba(199, 21, 133, 0.3), inset 0 0 30px rgba(255, 182, 193, 0.1)',
            border: '6px solid white',
            position: 'relative',
            zIndex: 10,
            minHeight: isMobile ? '450px' : '500px',
            display: 'flex',
            flexDirection: 'column',
            background: `
              linear-gradient(to right, transparent 0%, transparent calc(100% - 1px), #e5e7eb calc(100% - 1px), #e5e7eb 100%),
              linear-gradient(to bottom, transparent 0%, transparent calc(100% - 1px), #e5e7eb calc(100% - 1px), #e5e7eb 100%),
              #fffbf5
            `,
            backgroundSize: '40px 100%, 100% 40px, 100% 100%',
            backgroundPosition: '0 0, 0 0, 0 0'
          }}
        >
          {/* Corner decorations */}
          {page.decorations.corners && (
            <>
              <div className="corner-decoration top-left" style={{ color: page.color }} />
              <div className="corner-decoration top-right" style={{ color: page.color }} />
              <div className="corner-decoration bottom-left" style={{ color: page.color }} />
              <div className="corner-decoration bottom-right" style={{ color: page.color }} />
            </>
          )}

          {/* Stickers in top corners */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '1rem' : '1.5rem',
            left: isMobile ? '1rem' : '1.5rem',
            fontSize: isMobile ? '1.5rem' : '2rem',
            zIndex: 2
          }}>
            <span className="sticker">{page.stickers[0]}</span>
          </div>
          <div style={{
            position: 'absolute',
            top: isMobile ? '1rem' : '1.5rem',
            right: isMobile ? '1rem' : '1.5rem',
            fontSize: isMobile ? '1.5rem' : '2rem',
            zIndex: 2
          }}>
            <span className="sticker">{page.stickers[1]}</span>
          </div>

          {/* Title with decorative underline */}
          <div style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            marginTop: '2rem'
          }}>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? '1.8rem' : '2.2rem',
              fontWeight: 700,
              color: page.color,
              marginBottom: '0.5rem',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
            }}>
              {page.title}
            </h2>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem'
            }}>
              <div style={{
                width: '60px',
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${page.color})`,
              }} />
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? '0.95rem' : '1.1rem',
                color: '#92400e',
                fontWeight: '600',
                fontStyle: 'italic'
              }}>
                {page.date}
              </span>
              <div style={{
                width: '60px',
                height: '2px',
                background: `linear-gradient(270deg, transparent, ${page.color})`,
              }} />
            </div>
          </div>

          {/* Photo placeholder with polaroid style */}
          <div style={{
            width: '100%',
            height: isMobile ? '200px' : '240px',
            background: 'white',
            padding: '12px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            marginBottom: '2rem',
            transform: 'rotate(-1deg)',
            position: 'relative'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${page.color}22, ${page.color}44)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '3rem' : '4rem',
              border: '2px dashed rgba(0, 0, 0, 0.1)'
            }}>
              {page.stickers[2]}
            </div>
            {/* Tape effect */}
            <div style={{
              position: 'absolute',
              top: '-8px',
              left: '20%',
              width: '60px',
              height: '20px',
              background: 'rgba(255, 255, 255, 0.6)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              transform: 'rotate(-5deg)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }} />
            <div style={{
              position: 'absolute',
              top: '-8px',
              right: '20%',
              width: '60px',
              height: '20px',
              background: 'rgba(255, 255, 255, 0.6)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              transform: 'rotate(5deg)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }} />
          </div>

          {/* Content */}
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              lineHeight: '1.8',
              color: '#4a4a4a',
              textAlign: 'center',
              fontStyle: 'italic',
              margin: 0,
              padding: '0 1rem'
            }}>
              "{page.content}"
            </p>
          </div>

          {/* Decorative hearts */}
          {page.decorations.hearts && (
            <>
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '1.5rem',
                fontSize: '1.2rem',
                opacity: 0.4
              }}>
                💕
              </div>
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                right: '1.5rem',
                fontSize: '1.2rem',
                opacity: 0.4
              }}>
                💕
              </div>
            </>
          )}
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '1.5rem' : '2rem',
          marginTop: isMobile ? '1.5rem' : '2rem',
          zIndex: 10
        }}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            style={{
              width: isMobile ? '50px' : '60px',
              height: isMobile ? '50px' : '60px',
              borderRadius: '50%',
              background: currentPage === 0
                ? 'rgba(255, 182, 193, 0.3)'
                : 'rgba(236, 72, 153, 0.8)',
              border: '2px solid rgba(236, 72, 153, 0.5)',
              color: 'white',
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: currentPage === 0 ? 0.5 : 1,
              outline: 'none',
              boxShadow: currentPage === 0 ? 'none' : '0 4px 15px rgba(236, 72, 153, 0.4)',
              WebkitTapHighlightColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 0 && !isMobile) {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 72, 153, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 0 && !isMobile) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.4)';
              }
            }}
          >
            ←
          </button>

          {/* Page dots */}
          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            {PAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentPage) {
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentPage(index);
                      setIsFlipping(false);
                    }, 400);
                  }
                }}
                style={{
                  width: currentPage === index ? '35px' : '10px',
                  height: '10px',
                  borderRadius: '10px',
                  background: currentPage === index
                    ? 'linear-gradient(135deg, #ec4899, #f472b6)'
                    : 'rgba(236, 72, 153, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: currentPage === index
                    ? '0 4px 12px rgba(236, 72, 153, 0.5)'
                    : 'none',
                  WebkitTapHighlightColor: 'transparent'
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === PAGES.length - 1}
            style={{
              width: isMobile ? '50px' : '60px',
              height: isMobile ? '50px' : '60px',
              borderRadius: '50%',
              background: currentPage === PAGES.length - 1
                ? 'rgba(255, 182, 193, 0.3)'
                : 'rgba(236, 72, 153, 0.8)',
              border: '2px solid rgba(236, 72, 153, 0.5)',
              color: 'white',
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              cursor: currentPage === PAGES.length - 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: currentPage === PAGES.length - 1 ? 0.5 : 1,
              outline: 'none',
              boxShadow: currentPage === PAGES.length - 1 ? 'none' : '0 4px 15px rgba(236, 72, 153, 0.4)',
              WebkitTapHighlightColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== PAGES.length - 1 && !isMobile) {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 72, 153, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== PAGES.length - 1 && !isMobile) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.4)';
              }
            }}
          >
            →
          </button>
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
      </div>
    </>
  );
}