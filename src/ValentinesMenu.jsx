import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ValentinesMenu() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

 // ─── SVG ICONS ───
  // Make sure these names (Game, Gallery, etc.) match exactly below!
  const Icons = {
    Game: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '2rem', height: '2rem' }}>
        <path d="M2.25 15.75c0 1.242 1.008 2.25 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-7.5c0-1.242-1.008-2.25-2.25-2.25h-15a2.25 2.25 0 0 0-2.25 2.25v7.5Z" />
        <path fillRule="evenodd" d="M10.5 12a.75.75 0 0 1-.75.75H8.25v1.5a.75.75 0 0 1-1.5 0v-1.5H5.25a.75.75 0 0 1 0-1.5h1.5V9.75a.75.75 0 0 1 1.5 0v1.5h1.5A.75.75 0 0 1 10.5 12Zm6.75 2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0-2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-2.25 2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0-2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
      </svg>
    ),
    Gallery: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '2rem', height: '2rem' }}>
        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
      </svg>
    ),
    Heart: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '2rem', height: '2rem' }}>
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
    ),
    Envelope: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '2rem', height: '2rem' }}>
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    )
  };

  const MENU_ITEMS = [
    { title: 'Win My Heart (Game)', path: '/game', icon: Icons.Game, desc: 'Try Me if You Can!', color: 'from-pink-600 to-pink-500' },
    { title: 'Our Gallery',         path: '/gallery',  icon: Icons.Gallery, desc: 'Best memories captured', color: 'from-pink-500 to-pink-400' },
    { title: 'Reasons I Love You', path: '/reasons',  icon: Icons.Heart, desc: 'Just a few of many', color: 'from-rose-700 to-rose-600' },
    { title: 'Virtual Envelopes',  path: '/letters',  icon: Icons.Envelope, desc: 'Open when...', color: 'from-pink-700 to-pink-600' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(10deg); 
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 1.5rem',
        paddingTop: '3rem',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Floating background hearts - behind content */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden'
        }}>
          {[...Array(15)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              opacity: 0.15,
              fontSize: `${Math.random() * 20 + 15}px`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              pointerEvents: 'none'
            }}>💖</div>
          ))}
        </div>

        {/* Title Section */}
        <div style={{ 
          marginBottom: '2.5rem', 
          textAlign: 'center', 
          zIndex: 10,
          position: 'relative',
          animation: 'fadeInUp 0.8s ease-out backwards' 
        }}>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '2.8rem',
            fontWeight: 700,
            marginBottom: '0.2rem',
            color: '#C71585',
            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)'
          }}>
            Our Love Story
          </h1>
          <p style={{ 
            fontFamily: "'Poppins', sans-serif",
            fontSize: '1.5rem',
            color: '#D8527B',
            marginTop: 0
          }}>
            Choose a chapter to explore 💕
          </p>
        </div>

        {/* Menu Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.2rem',
          width: '100%',
          maxWidth: '600px',
          zIndex: 10,
          position: 'relative'
        }}>
          {MENU_ITEMS.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ 
                position: 'relative',
                cursor: 'pointer',
                // Default State
                background: hoveredIndex === index 
                  ? 'rgba(255, 255, 255, 0.95)' 
                  : 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(12px)',
                border: hoveredIndex === index 
                  ? '2px solid rgba(236, 72, 153, 0.6)' 
                  : '2px solid rgba(255, 255, 255, 1)',
                borderRadius: '20px',
                padding: '1.5rem',
                // Hover Transformation
                transform: hoveredIndex === index ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredIndex === index 
                  ? '0 20px 40px rgba(236, 72, 153, 0.35)' 
                  : '0 8px 20px rgba(199, 21, 133, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                animation: `fadeInUp 0.6s ease backwards`,
                animationDelay: `${index * 0.1}s`,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Shimmer overlay on hover */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: 'opacity 0.4s',
                  pointerEvents: 'none',
                  background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.2), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s linear infinite',
                  borderRadius: '20px'
                }}
              />

              {/* Sparkles on hover */}
              {hoveredIndex === index && [...Array(4)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                    width: '4px',
                    height: '4px',
                    background: '#ec4899',
                    borderRadius: '50%',
                    animation: `sparkle 1s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: '0 0 8px rgba(236, 72, 153, 0.8)'
                  }}
                />
              ))}

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 2 }}>
                <div 
                  style={{ 
                    color: '#C71585', 
                    width: '32px', 
                    height: '32px',
                    transition: 'transform 0.3s ease',
                    transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                  }}
                >
                  {item.icon}
                </div>
                
                <div>
                  <h3 style={{ 
                    margin: 0,
                    fontSize: '1.4rem',
                    fontFamily: "'Poppins', sans-serif",
                    color: '#C71585',
                    transition: 'color 0.3s',
                    textShadow: hoveredIndex === index ? '0 2px 4px rgba(236, 72, 153, 0.2)' : 'none'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    margin: '0.3rem 0 0 0',
                    fontSize: '1rem',
                    fontFamily: "'Poppins', sans-serif",
                    color: '#831843',
                    fontStyle: 'italic',
                    opacity: 0.9
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div style={{ 
                alignSelf: 'flex-end', 
                marginTop: '0.5rem', 
                fontSize: '1.2rem', 
                color: '#ec4899',
                opacity: hoveredIndex === index ? 1 : 0.6,
                transform: hoveredIndex === index ? 'translateX(5px)' : 'translateX(0)',
                transition: 'all 0.3s ease'
              }}>
                →
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/home')}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(236, 72, 153, 0.9)';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(236, 72, 153, 0.4)';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(236, 72, 153, 0.7)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(199, 21, 133, 0.3)';
            e.currentTarget.style.color = 'white';
          }}
          style={{
            marginTop: '3rem',
            padding: '0.8rem 2rem',
            background: 'rgba(236, 72, 153, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '50px',
            color: 'white',
            fontSize: '1.1rem',
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
            position: 'relative'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>←</span>
          <span>Back to Home</span>
        </button>
      </div>
    </>
  );
}