import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import photo1 from './assets/images/gallery/photo1.jpg';
import photo2 from './assets/images/gallery/photo2.jpg';
import photo3 from './assets/images/gallery/photo3.jpg';
import photo4 from './assets/images/gallery/photo4.jpg';
import photo5 from './assets/images/gallery/photo5.gif';
import photo6 from './assets/images/gallery/photo6.jpg';
import photo7 from './assets/images/gallery/photo7.jpg';
import photo8 from './assets/images/gallery/photo8.jpg';
import photo9 from './assets/images/gallery/photo9.jpg';
import photo10 from './assets/images/gallery/photo10.gif'; 
import photo11 from './assets/images/gallery/photo11.gif';

export default function ValentinesGallery() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
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

  // Scroll to first photo when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
    // Also scroll page to top on mobile
    if (isMobile) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [filter, isMobile]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Gallery data
  const PHOTOS = [
    {
      id: 1,
      url: photo1,
      caption: 'Our first date - you made everything perfect',
      date: 'October 2024',
      category: 'dates',
    },
    {
      id: 2,
      url: photo4,
      caption: "First Photo Booth - Proof We're Cute Together",
      date: 'Oct 2024',
      category: 'photo booth',
    },
    {
      id: 3,
      url: photo9,
      caption: 'Just us being silly - my favorite version of us',
      date: 'April 2023',
      category: 'candid',
    },
    {
      id: 4,
      url: photo5,
      caption: 'Just Us on Camera',
      date: 'Oct 2025',
      category: 'photo booth',
    },
    {
      id: 5,
      url: photo2,
      caption: 'Best Cine Night Ever with You',
      date: 'Sept 2025',
      category: 'dates',
    },
    {
      id: 6,
      url: photo7,
      caption: 'Your smile lights up my whole world',
      date: 'July 2023',
      category: 'candid',
    },
    {
      id: 7,
      url: photo8,
      caption: 'iloveyou sungit hahaha',
      date: 'August 2023',  
      category: 'candid',
    },
    {
      id: 8,
      url: photo6,
      caption: "Smiles We Didn't Plan",
      date: 'December 2024',
      category: 'photo booth',
    },
    {
      id: 9,
      url: photo3,
      caption: 'Date Day perfection',
      date: 'Oct 2025',
      category: 'dates',
    },
    {
      id: 10,
      url: photo10,
      caption: 'Another goofy photobooth moment ❤️',
      date: 'Feb 2026',
      category: 'photo booth',
    }, 
    {

      id: 11,
      url: photo11,
      caption: 'Pure happiness in one strip',
      date: 'Feb 2026',
      category: 'photo booth',


    }
  ];

  const CATEGORIES = [
    { id: 'all', label: 'All Memories'},
    { id: 'dates', label: 'Date Nights' },
    { id: 'photo booth', label: 'Photo Booth'},
    { id: 'candid', label: 'Silly Moments'}
  ];

  const filteredPhotos = filter === 'all' 
    ? PHOTOS 
    : PHOTOS.filter(photo => photo.category === filter);

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

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(10deg); 
          }
        }

        .photo-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .photo-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.4);
        }

        .photo-card .photo-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          z-index: 1;
          transition: transform 0.5s ease;
        }

        .photo-card:hover .photo-image {
          transform: scale(1.05);
        }

        .photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);         
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          z-index: 2;
        }

        .photo-card:hover .photo-overlay {
          opacity: 1;
          visibility: visible;
        }

        @media (hover: none) {
          .photo-overlay {
            display: none;
          }
        }

        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          animation: fadeIn 0.3s ease;
          overflow-y: auto;
        }

        .lightbox-content {
          width: 100%;
          max-width: 900px;
          animation: scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          margin: auto;
        }

        .lightbox-image-container {
          width: 100%;
          max-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f9a8d4, #ec4899);
          border-radius: 12px;
          overflow: hidden;
        }

        .lightbox-image-container > div {
          width: 100%;
          height: 100%;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 767px) {
          .lightbox {
            padding: 0.5rem;
            align-items: flex-start;
            padding-top: 60px;
          }

          .lightbox-image-container {
            max-height: 50vh;
          }

          .lightbox-image-container > div {
            min-height: 250px;
          }
        }

        /* Horizontal scroll container for mobile */
        .mobile-scroll-container {
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;
          gap: 1rem;
          padding: 0 1rem 1.5rem 1rem;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          scroll-padding: 0 1rem;
        }

        .mobile-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .mobile-scroll-container .photo-card {
          scroll-snap-align: center;
          min-width: calc(100vw - 2rem);
          max-width: calc(100vw - 2rem);
        }

        /* Desktop grid */
        .desktop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        @media (max-width: 767px) {
          .desktop-grid {
            display: none;
          }
        }

        @media (min-width: 768px) {
          .mobile-scroll-container {
            display: none;
          }
        }

        .scroll-indicator {
          text-align: center;
          color: rgba(190, 18, 60, 0.7);
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          font-style: italic;
        }

        @media (min-width: 768px) {
          .scroll-indicator {
            display: none;
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
        padding: isMobile ? '1.5rem 0' : '2rem 1.5rem',
        paddingTop: isMobile ? '2rem' : '3rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Floating hearts background - behind content */}
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
              fontSize: isMobile ? '1.5rem' : '2rem',
              animation: `float ${5 + i}s ease-in-out infinite`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              pointerEvents: 'none'
            }}>💖</div>
          ))}
        </div>

        {/* Header */}
        <div style={{ 
          marginBottom: '2rem', 
          textAlign: 'center', 
          zIndex: 10,
          position: 'relative',
          animation: 'fadeInUp 0.8s ease-out backwards',
          padding: isMobile ? '0 1.5rem' : '0'
        }}>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? '2.2rem' : '3rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            color: '#C71585',
            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
            lineHeight: 1.2
          }}>
            Our Gallery
          </h1>
          <p style={{ 
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            color: '#D8527B',
            marginTop: 0,
            fontStyle: 'italic'
          }}>
            Capturing the moments that matter most 💕
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '0.5rem' : '0.8rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
          position: 'relative',
          zIndex: 10,
          animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
          padding: '0 1rem'
        }}>
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              onMouseEnter={(e) => {
                if (filter !== category.id && !isMobile) {
                  e.currentTarget.style.background = 'rgba(236, 72, 153, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== category.id && !isMobile) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.color = '#C71585';
                }
              }}
              style={{
                padding: isMobile ? '0.6rem 1.2rem' : '0.7rem 1.5rem',
                background: filter === category.id 
                  ? 'rgba(236, 72, 153, 0.8)' 
                  : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(236, 72, 153, 0.5)',
                borderRadius: '50px',
                color: filter === category.id ? 'white' : '#C71585',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: filter === category.id 
                  ? '0 8px 20px rgba(236, 72, 153, 0.4)' 
                  : '0 4px 12px rgba(236, 72, 153, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                outline: 'none',
                transform: filter === category.id ? 'translateY(-2px)' : 'translateY(0)',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {!isMobile && <span>{category.label}</span>}
              {isMobile && <span>{category.label.split(' ')[0]}</span>}
            </button>
          ))}
        </div>

        {/* Mobile horizontal scroll indicator */}
        {isMobile && filteredPhotos.length > 0 && (
          <div className="scroll-indicator">
            Swipe left or right to browse →
          </div>
        )}

        {/* Mobile: Horizontal Scroll Container */}
        {isMobile && filteredPhotos.length > 0 && (
          <div className="mobile-scroll-container" ref={scrollContainerRef} style={{ position: 'relative', zIndex: 5 }}>
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="photo-card"
                onClick={() => setSelectedImage(photo)}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(199, 21, 133, 0.3)',
                  animation: `fadeInUp 0.6s ease backwards`,
                  animationDelay: `${index * 0.1}s`,
                  border: '2px solid rgba(255, 255, 255, 1)'
                }}
              >
                {/* Photo */}
                <div style={{
                  width: '100%',
                  height: '320px',
                  background: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={photo.url} 
                    alt={photo.caption}
                    className="photo-image"
                  />
                
                  <div className="photo-overlay">
                    <div style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.9rem',
                      color: 'white',
                      marginBottom: '0.3rem',
                      fontWeight: '600'
                    }}>
                      {photo.date}
                    </div>
                    <div style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1.1rem',
                      color: 'white',
                      fontWeight: '600'
                    }}>
                      Tap to view
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.95)' }}>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1rem',
                    color: '#C71585',
                    margin: 0,
                    lineHeight: '1.5',
                    fontStyle: 'italic'
                  }}>
                    {photo.caption}
                  </p>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.9rem',
                    color: '#ec4899',
                    marginTop: '0.5rem',
                    fontWeight: '600'
                  }}>
                    {photo.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Desktop: Photo Grid */}
        <div className="desktop-grid" style={{ position: 'relative', zIndex: 5 }}>
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="photo-card"
              onClick={() => setSelectedImage(photo)}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(199, 21, 133, 0.3)',
                animation: `fadeInUp 0.6s ease backwards`,
                animationDelay: `${index * 0.1}s`,
                border: '2px solid rgba(255, 255, 255, 1)'
              }}
            >
              {/* Photo */}
              <div style={{
                width: '100%',
                height: '300px',
                background: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src={photo.url} 
                  alt={photo.caption}
                  className="photo-image"
                />

                <div className="photo-overlay">
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.9rem',
                    color: 'white',
                    marginBottom: '0.3rem',
                    fontWeight: '600'
                  }}>
                    {photo.date}
                  </div>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.1rem',
                    color: 'white',
                    fontWeight: '600'
                  }}>
                    Click to view
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div style={{ padding: '1.2rem', background: 'rgba(255, 255, 255, 0.95)' }}>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1.1rem',
                  color: '#C71585',
                  margin: 0,
                  lineHeight: '1.5',
                  fontStyle: 'italic'
                }}>
                  {photo.caption}
                </p>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.95rem',
                  color: '#ec4899',
                  marginTop: '0.5rem',
                  fontWeight: '600'
                }}>
                  {photo.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredPhotos.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            position: 'relative',
            zIndex: 10
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📷</div>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1.3rem',
              color: '#C71585',
              fontStyle: 'italic'
            }}>
              No photos in this category yet
            </p>
          </div>
        )}

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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            style={{
              position: 'fixed',
              top: isMobile ? '1rem' : '2rem',
              right: isMobile ? '1rem' : '2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: isMobile ? '44px' : '50px',
              height: isMobile ? '44px' : '50px',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              outline: 'none',
              zIndex: 1001,
              WebkitTapHighlightColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            ✕
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.caption} 
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
              />
            </div>

            {/* Caption */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(15px)',
              padding: isMobile ? '1.2rem' : '1.5rem',
              borderRadius: '12px',
              marginTop: '1rem',
              textAlign: 'center'
            }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                color: '#C71585',
                margin: '0 0 0.5rem 0',
                fontStyle: 'italic',
                lineHeight: '1.6'
              }}>
                {selectedImage.caption}
              </p>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? '1rem' : '1.1rem',
                color: '#ec4899',
                fontWeight: '600'
              }}>
                {selectedImage.date}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}