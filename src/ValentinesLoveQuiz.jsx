import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoveQuiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // PERSONALIZED QUESTIONS! 💕
  const questions = [
    {
      question: "When is our first anniversary?",
      options: ["Oct 17 2024", "Oct 10 2022", "Oct 25 2023", "Oct 91 1718"],
      correct: 0,
      flirtyResponse: "Tama! You remembered our special day! 💕"
    },
    {
      question: "Where was our first date?",
      options: ["Cubao", "Lifehomes", "Vista", "Rosario"],
      correct: 2,
      flirtyResponse: "Yes! Vista! Ang saya nun, diba? 🌅"
    },
    {
      question: "Whos is my first Cat?",
      options: ["Shiny", "Orange", "Mokang", "Haillie"],
      correct: 1,
      flirtyResponse: "Orange! Ang cute niya, no? 🐱"
    },
    {
      question: "What is my Fav color?",
      options: ["Black", "Blue", "Green", "Pink"],
      correct: 0,
      flirtyResponse: "Black! Alam mo talaga paborito ko! 🖤"
    },
    {
      question: "What is my Programming Language?",
      options: ["Php", "Javascript", "Python", "Java"],
      correct: 0,
      flirtyResponse: "PHP! Developer vibes tayo! 💻"
    },
    {
      question: "What is my full Name?",
      options: ["Jeon Jung-kook", "Daniel Padilla", "Joshua Garcia", "Piolo Pascual"],
      correct: [0, 1, 2, 3], // All answers are correct!
      flirtyResponse: "Haha! Lahat tama naman eh! 😂💕"
    },
    {
      question: "I know the answer, but am I handsome?",
      options: ["Sympre!", "Oo naman", "Yes, Sarap!", "Sobra, Tangina!"],
      correct: [0, 1, 2, 3], // All answers are correct!
      flirtyResponse: "Lahat ng sagot ay TAMA! Super pogi mo talaga! 😍"
    },
    {
      question: "HARDEST QUESTION: Kung meron 6 7, pero nung 6am, sabi mo zeek save them dahil sick si ben&ben sa 711?",
      options: ["let z = x + y;", "Quadratic Formula", "10 + 10 = 67", "Tanginang yan haha"],
      correct: [0, 1, 2, 3], // All answers are correct - it's an inside joke!
      flirtyResponse: "Hahaha! Gets mo inside joke natin! We're perfect! 🤣💖"
    }
  ];

  const handleAnswer = (selectedIndex) => {
    setSelectedAnswer(selectedIndex);
    
    // Check if current question has all correct answers (array) or single correct answer (number)
    const correctAnswers = questions[currentQuestion].correct;
    const isCorrect = Array.isArray(correctAnswers) 
      ? correctAnswers.includes(selectedIndex) 
      : selectedIndex === correctAnswers;
    
    setAnsweredCorrectly(isCorrect);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    // Show feedback for 1.5 seconds before moving to next question
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnsweredCorrectly(false);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnsweredCorrectly(false);
    setQuizCompleted(false);
  };

  // Calculate percentage
  const percentage = Math.round((score / questions.length) * 100);

  // Get result message based on score
  const getResultMessage = () => {
    if (percentage === 100) {
      return {
        title: "Perfect Score! 💯",
        message: "You know me better than I know myself! We're soulmates! 💕",
        emoji: "😍"
      };
    } else if (percentage >= 75) {
      return {
        title: "Amazing! ⭐",
        message: "You really pay attention! I'm so lucky to have you! 💖",
        emoji: "🥰"
      };
    } else if (percentage >= 50) {
      return {
        title: "Pretty Good! 💝",
        message: "You know me well! Let's make more memories together! 😊",
        emoji: "💕"
      };
    } else {
      return {
        title: "We're Learning! 💗",
        message: "Every day we learn more about each other! That's what makes us special! 🌟",
        emoji: "💫"
      };
    }
  };

  const result = getResultMessage();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Playfair+Display:wght@700;900&display=swap');
        
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

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes celebration {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-10px) rotate(5deg); }
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
        
        {/* Floating background hearts */}
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
          marginBottom: '2rem', 
          textAlign: 'center', 
          zIndex: 10,
          position: 'relative',
          animation: 'fadeInUp 0.8s ease-out backwards' 
        }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '0.5rem',
            animation: 'heartbeat 1.5s ease-in-out infinite'
          }}>💝</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            fontWeight: 900,
            marginBottom: '0.3rem',
            color: '#C71585',
            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)'
          }}>
            Do You Know Me?
          </h1>
          <p style={{ 
            fontFamily: "'Poppins', sans-serif",
            fontSize: '1.2rem',
            color: '#D8527B',
            marginTop: 0,
            fontStyle: 'italic'
          }}>
            The Love Quiz 💕
          </p>
        </div>

        {/* Quiz Container */}
        {!quizCompleted ? (
          <div style={{
            width: '100%',
            maxWidth: '600px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            borderRadius: '30px',
            padding: '2.5rem 2rem',
            boxShadow: '0 20px 60px rgba(199, 21, 133, 0.25)',
            border: '2px solid rgba(255, 255, 255, 1)',
            zIndex: 10,
            position: 'relative',
            animation: 'fadeInUp 0.6s ease backwards'
          }}>
            {/* Progress Bar */}
            <div style={{
              marginBottom: '2rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.8rem'
              }}>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.9rem',
                  color: '#C71585',
                  fontWeight: '600'
                }}>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.9rem',
                  color: '#C71585',
                  fontWeight: '600'
                }}>
                  Score: {score}
                </span>
              </div>
              <div style={{
                width: '100%',
                height: '10px',
                background: 'rgba(199, 21, 133, 0.15)',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #ec4899, #C71585)',
                  borderRadius: '10px',
                  transition: 'width 0.5s ease'
                }}/>
              </div>
            </div>

            {/* Question */}
            <div style={{
              marginBottom: '2rem',
              animation: 'slideIn 0.5s ease'
            }}>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1.5rem',
                color: '#C71585',
                fontWeight: '700',
                marginBottom: '1.5rem',
                lineHeight: '1.4'
              }}>
                {questions[currentQuestion].question}
              </h2>

              {/* Answer Options */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectedAnswer === null && handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    style={{
                      padding: '1.2rem 1.5rem',
                      borderRadius: '15px',
                      border: selectedAnswer === index 
                        ? (answeredCorrectly ? '3px solid #10b981' : '3px solid #ef4444')
                        : '2px solid rgba(236, 72, 153, 0.3)',
                      background: selectedAnswer === index
                        ? (answeredCorrectly ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)')
                        : selectedAnswer === null
                          ? 'rgba(255, 255, 255, 0.5)'
                          : 'rgba(255, 255, 255, 0.3)',
                      color: selectedAnswer === index
                        ? (answeredCorrectly ? '#10b981' : '#ef4444')
                        : '#C71585',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: selectedAnswer === null ? 'pointer' : 'default',
                      transition: 'all 0.3s ease',
                      textAlign: 'left',
                      position: 'relative',
                      transform: selectedAnswer === index ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: selectedAnswer === index
                        ? '0 8px 20px rgba(236, 72, 153, 0.3)'
                        : '0 4px 10px rgba(236, 72, 153, 0.1)',
                      animation: selectedAnswer === index && answeredCorrectly 
                        ? 'celebration 0.6s ease' 
                        : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedAnswer === null) {
                        e.target.style.background = 'rgba(236, 72, 153, 0.1)';
                        e.target.style.borderColor = '#ec4899';
                        e.target.style.transform = 'translateX(5px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedAnswer === null) {
                        e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                        e.target.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                        e.target.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    {option}
                    {selectedAnswer === index && (
                      <span style={{
                        position: 'absolute',
                        right: '1.5rem',
                        fontSize: '1.3rem'
                      }}>
                        {answeredCorrectly ? '✓' : '✗'}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Message */}
            {selectedAnswer !== null && answeredCorrectly && (
              <div style={{
                padding: '1rem',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '15px',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center',
                animation: 'fadeInUp 0.4s ease'
              }}>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1rem',
                  color: '#10b981',
                  fontWeight: '600',
                  margin: 0,
                  fontStyle: 'italic'
                }}>
                  {questions[currentQuestion].flirtyResponse}
                </p>
              </div>
            )}

            {selectedAnswer !== null && !answeredCorrectly && (
              <div style={{
                padding: '1rem',
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '15px',
                border: '2px solid rgba(239, 68, 68, 0.3)',
                textAlign: 'center',
                animation: 'fadeInUp 0.4s ease'
              }}>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1rem',
                  color: '#ef4444',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {Array.isArray(questions[currentQuestion].correct) 
                    ? "Oops! Actually, lahat ng sagot ay tama! 💕" 
                    : `Oops! The correct answer was: ${questions[currentQuestion].options[questions[currentQuestion].correct]} 💕`
                  }
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Results Screen */
          <div style={{
            width: '100%',
            maxWidth: '600px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '30px',
            padding: '3rem 2rem',
            boxShadow: '0 20px 60px rgba(199, 21, 133, 0.3)',
            border: '2px solid rgba(255, 255, 255, 1)',
            zIndex: 10,
            position: 'relative',
            animation: 'fadeInUp 0.8s ease backwards',
            textAlign: 'center'
          }}>
            {/* Confetti Effect */}
            {percentage >= 75 && [...Array(20)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                fontSize: '1.5rem',
                animation: `float ${2 + i * 0.2}s ease-in-out infinite`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.6
              }}>
                {['💕', '💖', '✨', '💝', '🌟'][Math.floor(Math.random() * 5)]}
              </div>
            ))}

            <div style={{
              fontSize: '5rem',
              marginBottom: '1rem',
              animation: 'heartbeat 1.2s ease-in-out infinite'
            }}>
              {result.emoji}
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.2rem',
              color: '#C71585',
              fontWeight: 900,
              marginBottom: '1rem'
            }}>
              {result.title}
            </h2>

            <div style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              color: '#ec4899',
              marginBottom: '1rem',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {percentage}%
            </div>

            <p style={{
              fontSize: '1rem',
              color: '#831843',
              marginBottom: '0.5rem',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '600'
            }}>
              You got {score} out of {questions.length} questions correct!
            </p>

            <p style={{
              fontSize: '1.1rem',
              color: '#C71585',
              marginBottom: '2.5rem',
              fontFamily: "'Poppins', sans-serif",
              fontStyle: 'italic',
              lineHeight: '1.6'
            }}>
              {result.message}
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => navigate('/marriage-certificate')}
                style={{
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  border: '3px solid #10b981',
                  background: '#10b981',
                  color: 'white',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.3)';
                }}
              >
                Next: YOUR REWARD 
              </button>

              <button
                onClick={restartQuiz}
                style={{
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  border: '3px solid #ec4899',
                  background: 'rgba(255, 255, 255, 0.5)',
                  color: '#ec4899',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(236, 72, 153, 0.15)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.background = 'rgba(236, 72, 153, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                }}
              >
                Play Again 🔄
              </button>

              <button
                onClick={() => navigate('/menu')}
                style={{
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  border: '3px solid #ec4899',
                  background: 'rgba(255, 255, 255, 0.5)',
                  color: '#ec4899',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(236, 72, 153, 0.15)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
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
        )}

        {/* Back Button (only shown during quiz) */}
        {!quizCompleted && (
          <button
            onClick={() => navigate('/menu')}
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
              marginTop: '2rem',
              padding: '0.8rem 2rem',
              background: 'rgba(236, 72, 153, 0.7)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1rem',
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
            <span>Back to Menu</span>
          </button>
        )}
      </div>
    </>
  );
}