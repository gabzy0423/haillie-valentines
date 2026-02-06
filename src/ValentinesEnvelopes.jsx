import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ValentinesEnvelopes() {
  const navigate = useNavigate();
  const [openedEnvelope, setOpenedEnvelope] = useState(null);
  const [openedLetters, setOpenedLetters] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = React.useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when letter is open
  useEffect(() => {
    if (openedEnvelope !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openedEnvelope]);

  // Love letters - customize these!
  const LETTERS = [
    {
      id: 1,
      title: "To My Forever Love",
      date: "February 14, 2024",
      preview: "The day I met you...",
      content: `My Dearest,

I still remember the first time I saw you. Time seemed to stop, and in that moment, I knew my life was about to change forever. You walked into my world and suddenly everything made sense.

Every day with you is a gift I never want to take for granted. You've shown me what true love really means - it's not just the grand gestures, but the quiet moments we share, the inside jokes, the comfortable silences, and the way you look at me like I'm the only person in the room.

You are my best friend, my confidant, my safe place. With you, I can be completely myself - flaws and all - and you love me anyway. That's the greatest gift anyone has ever given me.

Thank you for choosing me, every single day.

Forever yours,
Your Love 💕`,
      color: "#ec4899",
      sealColor: "#be123c"
    },
    {
      id: 2,
      title: "A Promise to You",
      date: "Our Anniversary",
      preview: "I promise to always...",
      content: `My Beautiful Partner,

I want to make you some promises today - not grand, impossible ones, but real promises that come from the depths of my heart.

I promise to always make you laugh, even on the hardest days. To hold your hand through every storm. To celebrate your victories as if they were my own. To listen when you need to talk, and to sit in silence when words aren't enough.

I promise to choose you, every single day. To never stop trying to make you smile. To support your dreams and be your biggest cheerleader. To love you on your worst days just as much as your best ones.

I promise to build a life with you that's full of adventure, laughter, and endless love. To create a home where you always feel safe and cherished.

These promises I make to you, today and always.

With all my heart,
Your Forever Person 💖`,
      color: "#f472b6",
      sealColor: "#ec4899"
    },
    {
      id: 3,
      title: "The Little Things",
      date: "Just Because",
      preview: "It's the small moments...",
      content: `Hey You,

I was thinking today about all the little things that make me fall in love with you over and over again.

The way you sing in the shower, completely off-key but with total confidence. How you always save the last bite of your favorite food for me. The way your eyes light up when you talk about something you're passionate about. How you reach for my hand without even thinking about it.

I love how you remember my coffee order, how you text me random memes that you know will make me laugh, how you leave little notes for me to find. The way you dance in the kitchen when you think no one's watching.

These aren't grand romantic gestures - they're better. They're the everyday magic that makes our love story uniquely ours. They're the moments I'll treasure forever, the memories I'll hold close to my heart.

Thank you for all these beautiful little things.

Love you more than words can say,
Me 🥰`,
      color: "#fbbf24",
      sealColor: "#f59e0b"
    },
    {
      id: 4,
      title: "When I'm With You",
      date: "Today and Every Day",
      preview: "Home isn't a place...",
      content: `My Love,

They say home is where the heart is, and I finally understand what that means. Because wherever you are, that's where I belong.

When I'm with you, the world feels right. The stress melts away, the noise fades, and everything else becomes background. You are my calm in the chaos, my light in the darkness, my peace in the storm.

With you, I can be vulnerable. I can let my walls down. I can be silly and serious, strong and weak, all at the same time. You've created a space where I feel completely safe to be authentically me.

You make ordinary moments extraordinary. Grocery shopping becomes an adventure. Lazy Sunday mornings become treasured memories. Even washing dishes together feels special when you're by my side.

Thank you for being my home.

Always and forever,
Your Heart 💝`,
      color: "#fb923c",
      sealColor: "#ea580c"
    },
    {
      id: 5,
      title: "My Gratitude",
      date: "Every Single Day",
      preview: "Thank you for...",
      content: `To The Love of My Life,

I don't say it enough, but I am so incredibly grateful for you.

Thank you for loving me on the days when I'm hard to love. For seeing the best in me even when I can't see it myself. For believing in me when my own faith wavers. For standing by my side through every challenge we've faced.

Thank you for your patience, your kindness, your unwavering support. For the way you make me laugh until my stomach hurts. For understanding me in ways no one else does. For accepting all of me - the good, the bad, and everything in between.

Thank you for the life we're building together. For the memories we've made and the dreams we're chasing. For choosing me, for loving me, for being you.

You are the greatest blessing in my life, and I'm grateful for you every single day.

With endless love and appreciation,
Your Partner 🌹`,
      color: "#f87171",
      sealColor: "#dc2626"
    },
    {
      id: 6,
      title: "Our Future Together",
      date: "To Tomorrow",
      preview: "I can't wait for...",
      content: `My Dearest Future,

When I think about our future, my heart fills with so much excitement and joy I can barely contain it.

I can't wait for all the adventures we haven't had yet. The places we'll explore, the memories we'll create, the challenges we'll overcome together. I can't wait to wake up next to you for the rest of my life and fall asleep in your arms every night.

I dream about growing old with you - about lazy mornings with coffee, about dancing in our kitchen when we're seventy, about looking back on all our adventures and knowing we did it together. I dream about building a life full of laughter, love, and endless possibilities.

Whatever the future holds, I know one thing for certain: as long as I'm with you, it's going to be amazing. You make every day brighter, every challenge easier, every joy sweeter.

Here's to us, to our love, and to the beautiful future we're creating together.

Forever excited for our tomorrow,
Your Always 💕`,
      color: "#d946ef",
      sealColor: "#c026d3"
    }
  ];

  const handleEnvelopeClick = (letterId) => {
    setOpenedEnvelope(letterId);
    setOpenedLetters(prev => new Set([...prev, letterId]));
  };

  const handleCloseLetter = () => {
    setOpenedEnvelope(null);
  };

  const currentLetter = LETTERS.find(letter => letter.id === openedEnvelope);

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

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }

        @keyframes openEnvelope {
          from { transform: rotateX(0deg); }
          to { transform: rotateX(-180deg); }
        }

        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        .envelope-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .envelope-card:hover {
          transform: translateY(-12px) scale(1.02);
        }

        .envelope-card.opened {
          opacity: 0.7;
        }

        .envelope-flap {
          transition: all 0.6s ease;
          transform-origin: top;
        }

        .envelope-card:hover .envelope-flap {
          transform: rotateX(-15deg);
        }

        /* Horizontal scroll for mobile */
        .envelopes-scroll-container {
          display: none;
        }

        @media (max-width: 767px) {
          .envelopes-scroll-container {
            display: flex;
            overflow-x: auto;
            overflow-y: hidden;
            gap: 1.5rem;
            padding: 0 1rem 1.5rem 1rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            scroll-padding: 0 1rem;
            scroll-behavior: smooth;
          }

          .envelopes-scroll-container::-webkit-scrollbar {
            display: none;
          }

          .envelopes-scroll-container .envelope-card {
            scroll-snap-align: center;
            scroll-snap-stop: always;
            min-width: calc(100vw - 3rem);
            max-width: calc(100vw - 3rem);
            flex-shrink: 0;
          }
        }

        /* Desktop grid */
        .envelopes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 767px) {
          .envelopes-grid {
            display: none;
          }
        }

        .scroll-indicator-envelopes {
          text-align: center;
          color: rgba(190, 18, 60, 0.7);
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          font-style: italic;
        }

        @media (min-width: 768px) {
          .scroll-indicator-envelopes {
            display: none;
          }
        }

        .new-badge {
          animation: wiggle 2s ease-in-out infinite;
        }

        .letter-modal {
          animation: fadeIn 0.3s ease;
        }

        .letter-content {
          animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        /* Handwriting effect for letter */
        .handwritten {
          font-family: 'Poppins', sans-serif;
          line-height: 2;
          letter-spacing: 0.5px;
        }

        .letter-paper {
          background: 
            linear-gradient(to bottom, transparent 0%, transparent calc(100% - 1px), #e5e7eb calc(100% - 1px), #e5e7eb 100%);
          background-size: 100% 2rem;
          background-position: 0 0.5rem;
        }

        @media (max-width: 767px) {
          .letter-paper {
            background-size: 100% 1.8rem;
          }
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
        padding: isMobile ? '1.5rem' : '2rem 1.5rem',
        paddingTop: isMobile ? '2rem' : '3rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Floating decorative elements */}
        {!isMobile && [...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="floating-element"
            style={{
              position: 'absolute',
              opacity: 0.15,
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 6}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            {['💌', '💖', '✉️', '💕'][Math.floor(Math.random() * 4)]}
          </div>
        ))}

        {/* Header */}
        <div style={{ 
          marginBottom: isMobile ? '2rem' : '3rem', 
          textAlign: 'center', 
          zIndex: 10,
          position: 'relative',
          animation: 'fadeInUp 0.8s ease-out backwards'
        }}>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? '2.5rem' : '3.5rem',
            fontWeight: 800,
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #be123c 0%, #dc2626 50%, #be123c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 8px rgba(190, 18, 60, 0.3))',
            lineHeight: 1.2
          }}>
            Love Letters
          </h1>
          <p style={{ 
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            color: '#92400e',
            marginTop: 0,
            fontWeight: '600',
            filter: 'drop-shadow(0 1px 2px rgba(146, 64, 14, 0.2))'
          }}>
            Sealed with love, just for you 💌
          </p>
        </div>

        {/* Letter count */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '1.5rem' : '2rem',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
            padding: '0.6rem 1.5rem',
            borderRadius: '50px',
            border: '2px solid rgba(190, 18, 60, 0.2)',
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: '#92400e',
            fontWeight: '600'
          }}>
            📬 {openedLetters.size} of {LETTERS.length} letters opened
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        {isMobile && LETTERS.length > 0 && (
          <div className="scroll-indicator-envelopes">
            Swipe left or right to browse →
          </div>
        )}

        {/* Mobile: Horizontal Scroll Container */}
        <div className="envelopes-scroll-container" ref={scrollContainerRef}>
          {LETTERS.map((letter, index) => {
            const isOpened = openedLetters.has(letter.id);
            
            return (
              <div
                key={letter.id}
                className={`envelope-card ${isOpened ? 'opened' : ''}`}
                onClick={() => handleEnvelopeClick(letter.id)}
                style={{
                  animation: `fadeInUp 0.6s ease backwards`,
                  animationDelay: `${index * 0.1}s`,
                  position: 'relative'
                }}
              >
                {/* Envelope */}
                <div style={{
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  position: 'relative'
                }}>
                  {/* Envelope flap */}
                  <div 
                    className="envelope-flap"
                    style={{
                      width: '100%',
                      height: '140px',
                      background: letter.color,
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {/* Wax seal */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-25px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '50px',
                      height: '50px',
                      background: letter.sealColor,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      zIndex: 3
                    }}>
                      💕
                    </div>
                  </div>

                  {/* Envelope body */}
                  <div style={{
                    background: '#fef9f3',
                    padding: '2.5rem 1.5rem 1.5rem',
                    marginTop: '-1px'
                  }}>
                    <h3 style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1.4rem',
                      color: '#92400e',
                      marginBottom: '0.5rem',
                      marginTop: 0,
                      fontWeight: '700'
                    }}>
                      {letter.title}
                    </h3>
                    <div style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1rem',
                      color: '#78350f',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      {letter.date}
                    </div>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1.1rem',
                      color: '#78350f',
                      fontStyle: 'italic',
                      margin: 0,
                      opacity: 0.8
                    }}>
                      "{letter.preview}"
                    </p>

                    {/* Status indicator */}
                    <div style={{
                      marginTop: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px dashed rgba(146, 64, 14, 0.2)',
                      textAlign: 'center'
                    }}>
                      <span style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '0.95rem',
                        color: isOpened ? '#78350f' : letter.color,
                        fontWeight: '600',
                        opacity: isOpened ? 0.6 : 1
                      }}>
                        {isOpened ? '✓ Read' : '✉️ Tap to open'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: Envelopes Grid */}
        <div className="envelopes-grid">
          {LETTERS.map((letter, index) => {
            const isOpened = openedLetters.has(letter.id);
            
            return (
              <div
                key={letter.id}
                className={`envelope-card ${isOpened ? 'opened' : ''}`}
                onClick={() => handleEnvelopeClick(letter.id)}
                style={{
                  animation: `fadeInUp 0.6s ease backwards`,
                  animationDelay: `${index * 0.1}s`,
                  position: 'relative'
                }}
              >
                {/* Envelope */}
                <div style={{
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  position: 'relative'
                }}>
                  {/* Envelope flap */}
                  <div 
                    className="envelope-flap"
                    style={{
                      width: '100%',
                      height: '140px',
                      background: letter.color,
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {/* Wax seal */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-25px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '50px',
                      height: '50px',
                      background: letter.sealColor,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      zIndex: 3
                    }}>
                      💕
                    </div>
                  </div>

                  {/* Envelope body */}
                  <div style={{
                    background: '#fef9f3',
                    padding: '2.5rem 1.5rem 1.5rem',
                    marginTop: '-1px'
                  }}>
                    <h3 style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1.4rem',
                      color: '#92400e',
                      marginBottom: '0.5rem',
                      marginTop: 0,
                      fontWeight: '700'
                    }}>
                      {letter.title}
                    </h3>
                    <div style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1rem',
                      color: '#78350f',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      {letter.date}
                    </div>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1.1rem',
                      color: '#78350f',
                      fontStyle: 'italic',
                      margin: 0,
                      opacity: 0.8
                    }}>
                      "{letter.preview}"
                    </p>

                    {/* Status indicator */}
                    <div style={{
                      marginTop: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px dashed rgba(146, 64, 14, 0.2)',
                      textAlign: 'center'
                    }}>
                      <span style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '0.95rem',
                        color: isOpened ? '#78350f' : letter.color,
                        fontWeight: '600',
                        opacity: isOpened ? 0.6 : 1
                      }}>
                        {isOpened ? '✓ Read' : 'Click to open'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/menu')}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.currentTarget.style.background = 'rgba(236, 72, 153, 0.9)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(236, 72, 153, 0.4)';
              e.currentTarget.style.color = 'white';
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.currentTarget.style.background = 'rgba(236, 72, 153, 0.7)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(199, 21, 133, 0.3)';
              e.currentTarget.style.color = 'white';
            }
          }}
          style={{
            marginTop: '3rem',
            padding: isMobile ? '0.8rem 2rem' : '0.9rem 2.2rem',
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
            position: 'relative',
            zIndex: 10,
            margin: '3rem auto 0',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>←</span>
          <span>Back to Menu</span>
        </button>
      </div>

      {/* Letter Modal */}
      {currentLetter && (
        <div 
          className="letter-modal"
          onClick={handleCloseLetter}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: isMobile ? '1rem' : '2rem',
            overflowY: 'auto'
          }}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCloseLetter();
            }}
            style={{
              position: 'fixed',
              top: isMobile ? '1rem' : '2rem',
              right: isMobile ? '1rem' : '2rem',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: isMobile ? '44px' : '50px',
              height: isMobile ? '44px' : '50px',
              color: '#92400e',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              outline: 'none',
              zIndex: 1001,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              WebkitTapHighlightColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            ✕
          </button>

          {/* Letter content */}
          <div 
            className="letter-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '700px',
              background: '#fffbf5',
              borderRadius: '12px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              margin: 'auto',
              border: `4px solid ${currentLetter.color}`
            }}
          >
            {/* Letter header */}
            <div style={{
              background: currentLetter.color,
              padding: isMobile ? '1.5rem' : '2rem',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? '1.8rem' : '2.2rem',
                color: 'white',
                marginBottom: '0.5rem',
                marginTop: 0,
                fontWeight: '800',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
              }}>
                {currentLetter.title}
              </h2>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: '600'
              }}>
                {currentLetter.date}
              </div>
            </div>

            {/* Letter body */}
            <div 
              className="letter-paper"
              style={{
                padding: isMobile ? '2rem 1.5rem' : '3rem 2.5rem',
                maxHeight: isMobile ? '60vh' : '65vh',
                overflowY: 'auto'
              }}
            >
              <div 
                className="handwritten"
                style={{
                  fontSize: isMobile ? '1.2rem' : '1.4rem',
                  color: '#1f2937',
                  whiteSpace: 'pre-wrap',
                  textAlign: 'left'
                }}
              >
                {currentLetter.content}
              </div>
            </div>

            {/* Letter footer */}
            <div style={{
              background: 'rgba(254, 243, 199, 0.5)',
              padding: isMobile ? '1rem' : '1.5rem',
              textAlign: 'center',
              borderTop: '2px dashed rgba(146, 64, 14, 0.2)'
            }}>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? '0.95rem' : '1rem',
                color: '#78350f',
                fontStyle: 'italic'
              }}>
                Keep this letter close to your heart 💌
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}