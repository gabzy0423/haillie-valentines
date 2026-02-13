import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MarriageCertificate() {
  const navigate = useNavigate();
  const certificateRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Certificate Details - CUSTOMIZE THESE!
  const certificate = {
    bride: "Haillie Geco",
    groom: "Gabriel Vargas",
    date: "October 17, 2024",
    location: "In Our Hearts 💕",
    witnessedBy: "Love & Destiny"
  };

  const downloadPDF = async () => {
    setIsDownloading(true);
    
    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;

      const element = certificateRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 3,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true,
        width: element.scrollWidth,
        height: element.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Use landscape A4
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = 297; // A4 landscape width
      const pdfHeight = 210; // A4 landscape height
      
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgWidth / imgHeight;
      
      // Calculate dimensions to fit within PDF while maintaining aspect ratio
      let finalWidth = pdfWidth;
      let finalHeight = pdfWidth / ratio;
      
      // If height is too tall, scale based on height instead
      if (finalHeight > pdfHeight) {
        finalHeight = pdfHeight;
        finalWidth = pdfHeight * ratio;
      }
      
      // Center the image in the PDF
      const xOffset = (pdfWidth - finalWidth) / 2;
      const yOffset = (pdfHeight - finalHeight) / 2;

      pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight);
      pdf.save('Marriage-Certificate-Gabriel-and-Haillie.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Could not download PDF. Please try screenshot instead!');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&family=Playfair+Display:wght@400;700;900&family=Great+Vibes&display=swap');
        
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        @media print {
          body, html {
            background: white !important;
          }
          .no-print {
            display: none !important;
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Floating background hearts */}
        <div className="no-print" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden'
        }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              opacity: 0.1,
              fontSize: `${Math.random() * 20 + 12}px`,
              animation: `float ${5 + i * 0.5}s ease-in-out infinite`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}>💕</div>
          ))}
        </div>

        {/* Header Section */}
        <div className="no-print" style={{
          textAlign: 'center',
          marginBottom: '1rem',
          zIndex: 10,
          animation: 'fadeInUp 0.6s ease'
        }}>
          <div style={{
            fontSize: '2rem',
            marginBottom: '0.2rem',
            animation: 'heartbeat 1.5s ease-in-out infinite'
          }}>💍</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.6rem',
            fontWeight: 900,
            color: '#C71585',
            margin: '0',
            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)'
          }}>
            Our Marriage Certificate
          </h1>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.85rem',
            color: '#D8527B',
            margin: '0.2rem 0 0 0',
            fontStyle: 'italic'
          }}>
            Sealed with love 💕
          </p>
        </div>

        {/* Certificate Container - SUPER COMPACT */}
        <div
          ref={certificateRef}
          style={{
            width: '100%',
            maxWidth: '750px',
            background: '#ffffff',
            borderRadius: '12px',
            padding: '1.5rem 1.5rem',
            boxShadow: '0 20px 60px rgba(199, 21, 133, 0.2)',
            border: '6px double #D946A6',
            position: 'relative',
            zIndex: 10,
            animation: 'slideIn 0.6s ease',
            boxSizing: 'border-box'
          }}
        >
          {/* Decorative Corners */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            width: '30px',
            height: '30px',
            borderTop: '3px solid #ec4899',
            borderLeft: '3px solid #ec4899',
            borderRadius: '4px 0 0 0'
          }} />
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '30px',
            height: '30px',
            borderTop: '3px solid #ec4899',
            borderRight: '3px solid #ec4899',
            borderRadius: '0 4px 0 0'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            width: '30px',
            height: '30px',
            borderBottom: '3px solid #ec4899',
            borderLeft: '3px solid #ec4899',
            borderRadius: '0 0 0 4px'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            width: '30px',
            height: '30px',
            borderBottom: '3px solid #ec4899',
            borderRight: '3px solid #ec4899',
            borderRadius: '0 0 4px 0'
          }} />

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>💑</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.8rem',
              fontWeight: 900,
              color: '#D946A6',
              margin: '0',
              letterSpacing: '0.5px'
            }}>
              Marriage Certificate
            </h2>
            <div style={{
              width: '120px',
              height: '2px',
              background: '#ec4899',
              margin: '0.4rem auto'
            }} />
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.75rem',
              color: '#831843',
              fontStyle: 'italic',
              margin: 0
            }}>
              Certificate of Eternal Love
            </p>
          </div>

          {/* Main Content */}
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.8rem',
              color: '#831843',
              lineHeight: '1.4',
              marginBottom: '0.8rem'
            }}>
              This certifies that the union of hearts between
            </p>

            {/* Names */}
            <div style={{
              marginBottom: '1rem',
              padding: '0.8rem',
              background: '#FFF0F5',
              borderRadius: '10px',
              border: '2px solid #ec4899'
            }}>
              <div style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: '2rem',
                color: '#D946A6',
                marginBottom: '0.3rem',
                lineHeight: '1.1'
              }}>
                {certificate.groom}
              </div>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1rem',
                color: '#ec4899',
                fontWeight: '300',
                margin: '0.3rem 0',
                letterSpacing: '2px'
              }}>
                &
              </div>
              <div style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: '2rem',
                color: '#D946A6',
                lineHeight: '1.1'
              }}>
                {certificate.bride}
              </div>
            </div>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.8rem',
              color: '#831843',
              lineHeight: '1.4',
              marginBottom: '0.8rem'
            }}>
              has been celebrated and recognized on this day
            </p>

            {/* Date & Location - Inline */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '0.8rem'
            }}>
              <div>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.6rem',
                  color: '#831843',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.2rem',
                  fontWeight: '600'
                }}>
                  Date
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '0.95rem',
                  color: '#D946A6',
                  fontWeight: '700'
                }}>
                  {certificate.date}
                </div>
              </div>
              <div>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.6rem',
                  color: '#831843',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.2rem',
                  fontWeight: '600'
                }}>
                  Location
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '0.95rem',
                  color: '#D946A6',
                  fontWeight: '700'
                }}>
                  {certificate.location}
                </div>
              </div>
            </div>

            {/* Love Quote - Compact */}
            <div style={{
              background: '#FFF0F5',
              borderRadius: '8px',
              padding: '0.7rem',
              marginTop: '0.8rem',
              border: '1px solid #ec4899'
            }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.75rem',
                color: '#831843',
                fontStyle: 'italic',
                lineHeight: '1.4',
                margin: 0
              }}>
                "Two souls with but a single thought,
                Two hearts that beat as one."
              </p>
            </div>
          </div>

          {/* Signatures - Horizontal & Compact */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '1rem',
            marginTop: '1rem',
            marginBottom: '0.8rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center', minWidth: '130px', flex: '1' }}>
              <div style={{
                borderBottom: '2px solid #D946A6',
                marginBottom: '0.2rem',
                paddingBottom: '0.2rem',
                minHeight: '28px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}>
                <span style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: '1.3rem',
                  color: '#D946A6'
                }}>
                  {certificate.groom}
                </span>
              </div>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.65rem',
                color: '#831843',
                margin: 0,
                fontWeight: '600'
              }}>
                Groom
              </p>
            </div>

            <div style={{ textAlign: 'center', minWidth: '130px', flex: '1' }}>
              <div style={{
                borderBottom: '2px solid #D946A6',
                marginBottom: '0.2rem',
                paddingBottom: '0.2rem',
                minHeight: '28px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}>
                <span style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: '1.3rem',
                  color: '#D946A6'
                }}>
                  {certificate.bride}
                </span>
              </div>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.65rem',
                color: '#831843',
                margin: 0,
                fontWeight: '600'
              }}>
                Bride
              </p>
            </div>
          </div>

          {/* Footer - Ultra Compact */}
          <div style={{
            textAlign: 'center',
            marginTop: '0.8rem',
            paddingTop: '0.6rem',
            borderTop: '1px solid #ec4899'
          }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.7rem',
              color: '#831843',
              margin: '0 0 0.3rem 0',
              fontStyle: 'italic'
            }}>
              Witnessed by: {certificate.witnessedBy}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.3rem',
              fontSize: '0.9rem'
            }}>
              💕 💖 💝
            </div>
          </div>
        </div>

        {/* Action Buttons - More Compact */}
        <div className="no-print" style={{
          display: 'flex',
          gap: '0.8rem',
          marginTop: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          zIndex: 10
        }}>
          <button
            onClick={downloadPDF}
            disabled={isDownloading}
            style={{
              padding: '0.7rem 1.5rem',
              borderRadius: '50px',
              border: '2px solid #10b981',
              background: '#10b981',
              color: 'white',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.9rem',
              fontWeight: '700',
              cursor: isDownloading ? 'wait' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 15px rgba(16, 185, 129, 0.3)',
              opacity: isDownloading ? 0.6 : 1
            }}
            onMouseEnter={(e) => {
              if (!isDownloading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 6px 15px rgba(16, 185, 129, 0.3)';
            }}
          >
            {isDownloading ? '⏳ Generating...' : '📥 Download PDF'}
          </button>

          <button
            onClick={() => navigate('/menu')}
            style={{
              padding: '0.7rem 1.5rem',
              borderRadius: '50px',
              border: '2px solid #ec4899',
              background: 'rgba(255, 255, 255, 0.5)',
              color: '#ec4899',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.9rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 15px rgba(236, 72, 153, 0.15)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.background = 'rgba(236, 72, 153, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.background = 'rgba(255, 255, 255, 0.5)';
            }}
          >
            Back to Menu 💕
          </button>
        </div>
      </div>
    </>
  );
}