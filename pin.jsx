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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Cormorant+Garamond:wght@300;400&display=swap');
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Cormorant Garamond', serif;
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
      
      {/* Floating hearts */}
      <div className="absolute top-[10%] left-[15%] text-4xl opacity-10 text-pink-400 animate-float">
        ❤
      </div>
      <div className="absolute top-[70%] right-[20%] text-5xl opacity-10 text-pink-400 animate-float" style={{ animationDelay: '5s' }}>
        ❤
      </div>
      <div className="absolute top-[20%] right-[10%] text-2xl opacity-10 text-pink-400 animate-float" style={{ animationDelay: '2s' }}>
        💝
      </div>
      <div className="absolute bottom-[15%] left-[8%] text-4xl opacity-10 text-pink-400 animate-float" style={{ animationDelay: '7s' }}>
        💗
      </div>
      <div className="absolute top-[50%] left-[25%] text-2xl opacity-10 text-pink-400 animate-float" style={{ animationDelay: '4s' }}>
        💖
      </div>
      
      {/* Main content */}
      <div className="max-w-md w-[90%] relative animate-cardEnter">
        {/* Top heart */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-6xl animate-heartbeat">
          💕
        </div>
        
        {/* Title */}
        <h1 className="font-display text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent mb-2 tracking-tight">
          Our Love Story
        </h1>
        
        <p className="font-body text-center text-rose-600 text-lg mb-10 tracking-wide">
          Enter our special date
        </p>
        
        {/* PIN Display */}
        <div className={`bg-white/30 backdrop-blur-md border-2 ${error ? 'border-pink-500/60' : 'border-pink-300/40'} rounded-2xl p-6 mb-9 min-h-20 flex items-center justify-center gap-3 ${shake ? 'animate-shake' : ''}`}>
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-out ${
                i < pin.length 
                  ? `bg-rose-600 scale-100 shadow-lg shadow-rose-600/30 ${error ? 'animate-errorPulse' : ''}` 
                  : 'bg-transparent scale-0'
              }`}
            />
          ))}
        </div>
        
        {/* Hint */}
        <div className={`text-center font-body text-base mb-5 min-h-6 italic transition-all ${error ? 'text-pink-500' : 'text-pink-400'}`}>
          {error ? '❌ Wrong date, try again my love' : '💕 (MMDDYYYY)'}
        </div>
        
        {/* Numpad */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-white/40 backdrop-blur-md border-2 border-pink-300/50 rounded-2xl p-5 font-display text-3xl font-semibold text-rose-600 hover:bg-white/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-400/25 hover:border-pink-400/70 active:translate-y-0 active:shadow-md transition-all duration-200 relative overflow-hidden ripple"
            >
              {num}
            </button>
          ))}
          <div></div>
          <button
            onClick={() => handleNumberClick('0')}
            className="bg-white/40 backdrop-blur-md border-2 border-pink-300/50 rounded-2xl p-5 font-display text-3xl font-semibold text-rose-600 hover:bg-white/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-400/25 hover:border-pink-400/70 active:translate-y-0 active:shadow-md transition-all duration-200 relative overflow-hidden ripple"
          >
            0
          </button>
          <div></div>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleDelete}
            className="bg-white/40 backdrop-blur-md border-2 border-pink-300/50 rounded-2xl p-4 font-body text-lg text-rose-600 hover:bg-white/60 hover:-translate-y-0.5 hover:border-pink-400/70 active:translate-y-0 transition-all duration-200 tracking-wide"
          >
            Delete
          </button>
          <button
            onClick={handleSubmit}
            disabled={pin.length !== 8}
            className="bg-gradient-to-r from-pink-500 to-rose-600 border-2 border-rose-600 rounded-2xl p-4 font-body text-lg text-white font-semibold hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-600/40 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none transition-all duration-200 tracking-wide relative overflow-hidden group"
          >
            <span>Enter</span>
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}