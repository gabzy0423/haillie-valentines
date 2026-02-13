import portrait from './assets/images/gallery/front.jpg';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HER_NAME = 'Love';
const SPECIAL_DATE = 'Oct 17, 2024';

export default function ValentinesHome() {
  const navigate = useNavigate();
  const [petals, setPetals] = useState([]);
  const [revealed, setRevealed] = useState(false);

  /* ── seed petals with grid-based positioning to avoid overlap ── */
  useEffect(() => {
    const emojis = ['🌸', '🌺', '🌹', '💐', '🌷', '❤️', '💕', '💗', '✨'];
    const gridColumns = 8;
    const gridRows = 4;
    const newPetals = [];

    for (let i = 0; i < 32; i++) {
      const col = i % gridColumns;
      const row = Math.floor(i / gridColumns);
      const baseLeft = (col / gridColumns) * 100 + (Math.random() * 8 - 4);

      newPetals.push({
        id: i,
        left: Math.max(0, Math.min(100, baseLeft)),
        delay: Math.random() * 11,
        dur: 7 + Math.random() * 9,
        size: 0.6 + Math.random() * 1.8,
        type: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }

    setPetals(newPetals);
    const t = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* ── reveal class helper ── */
  const r = (n) => (revealed ? `rev-${n}` : '');

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
      *{box-sizing:border-box;margin:0;padding:0;}

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

      /* ── petal fall ── */
      @keyframes fall{
        0%   {transform:translateY(-100px) rotate(0deg)   translateX(0);   opacity:0;}
        4%   {opacity:0.25;}
        50%  {transform:translateY(50vh)   rotate(180deg) translateX(35px);}
        100% {transform:translateY(115vh)  rotate(360deg) translateX(-25px);opacity:0.08;}
      }

      /* ── staggered hero reveals ── */
      @keyframes fadeUp{
        from{opacity:0;transform:translateY(26px);}
        to  {opacity:1;transform:translateY(0)   ;}
      }
      .rev-1{animation:fadeUp .95s  0.20s cubic-bezier(.22,1,.36,1) both;}
      .rev-2{animation:fadeUp .95s  0.42s cubic-bezier(.22,1,.36,1) both;}
      .rev-3{animation:fadeUp .95s  0.64s cubic-bezier(.22,1,.36,1) both;}
      .rev-4{animation:fadeUp .95s  0.88s cubic-bezier(.22,1,.36,1) both;}
      .rev-5{animation:fadeUp .95s  1.14s cubic-bezier(.22,1,.36,1) both;}
      .rev-6{animation:fadeUp .95s  1.42s cubic-bezier(.22,1,.36,1) both;}
      .rev-7{animation:fadeUp .95s  1.68s cubic-bezier(.22,1,.36,1) both;}

      /* ── big heart pulse ── */
      @keyframes bigHeart{
        0%,100%{transform:scale(1);}
        14%    {transform:scale(.85);}
        28%    {transform:scale(1.15);}
        42%    {transform:scale(.93);}
        56%    {transform:scale(1.07);}
      }

      /* ── card glow ── */
      @keyframes glowPulse{
        0%,100%{box-shadow:0 0 32px rgba(199, 21, 133, 0.25), 0 8px 50px rgba(236, 72, 153, 0.15);}
        50%    {box-shadow:0 0 48px rgba(199, 21, 133, 0.35), 0 12px 70px rgba(236, 72, 153, 0.25);}
      }

      /* ── CTA shimmer ── */
      @keyframes shimmer{
        0%  {background-position:-200% center;}
        100%{background-position: 200% center;}
      }

      /* ── rose bob ── */
      @keyframes bob{
        0%,100%{transform:translateY(0) rotate(-3deg);}
        50%    {transform:translateY(-14px) rotate(3deg);}
      }

      /* ── sparkle ── */
      @keyframes sp{
        0%,100%{opacity:.25;transform:scale(.78) rotate(0deg);}
        50%    {opacity:.85;transform:scale(1.18) rotate(180deg);}
      }

      /* ── CTA button ── */
      .valentine-cta{
        display:inline-block;
        cursor:pointer;
        background:linear-gradient(90deg,#ec4899,#be123c,#ec4899,#be123c);
        background-size:200% 100%;
        animation:shimmer 2.8s linear infinite;
        border:none;border-radius:999px;outline:none;
        padding:clamp(.95rem,3vw,1.15rem) clamp(2rem,7vw,2.8rem);
        color:#fff; 
        font-weight:700;
        font-family:'Poppins',sans-serif;
        font-size:clamp(1.05rem,3.2vw,1.25rem);
        letter-spacing:.04em;
        box-shadow:0 8px 35px rgba(236,72,153,.45);
        transition:transform .25s,box-shadow .25s;
      }
      .valentine-cta:hover{
        transform:translateY(-4px) scale(1.08);
        box-shadow:0 14px 50px rgba(236,72,153,.6);
      }
      .valentine-cta:active{transform:scale(.96);}

      /* ── portrait frame shimmer ── */
      @keyframes frameShimmer{
        0%,100%{border-color:rgba(255,255,255,0.5);}
        50%{border-color:rgba(236,72,153,0.7);}
      }
    `}</style>

      <div style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#FFB6C1',
        backgroundImage: `
        radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.8) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 192, 203, 0.6) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(255, 105, 180, 0.4) 0%, transparent 50%),
        linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFB6C1 100%)
      `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        {/* ════ 1. FALLING PETALS (non-overlapping) ════ */}
        {petals.map(p => (
          <div key={p.id} style={{
            position: 'fixed',
            top: '-80px',
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.2,
            animation: `fall ${p.dur}s ${p.delay}s infinite linear`,
          }}>{p.type}</div>
        ))}

        {/* ════ 2. SPARKLES ════ */}
        {[
          { top: '8%', left: '8%', dl: '0s', sz: '1.3rem' },
          { top: '12%', right: '12%', dl: '1.3s', sz: '1rem' },
          { bottom: '10%', left: '15%', dl: '.55s', sz: '.95rem' },
          { bottom: '18%', right: '9%', dl: '2s', sz: '1.1rem' },
          { top: '40%', left: '5%', dl: '1.7s', sz: '.9rem' },
          { top: '62%', right: '7%', dl: '.9s', sz: '1rem' },
        ].map((s, i) => (
          <div key={i} style={{
            position: 'absolute',
            fontSize: s.sz,
            opacity: .4,
            animation: `sp 2.4s ${s.dl} infinite ease-in-out`,
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))',
          }}>✨</div>
        ))}

        {/* ════════════════════════════════════════
           3. GLASS CARD  — the hero
         ════════════════════════════════════════ */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '440px',
          width: '92%',
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '2px solid rgba(255,255,255,0.4)',
          borderRadius: '2.2rem',
          padding: 'clamp(2rem,6vw,3rem) clamp(1rem,3.5vw,1.8rem)',
          textAlign: 'center',
          animation: 'glowPulse 4s ease-in-out infinite',
        }}>

          <div className={r(1)} style={{
            marginBottom: '1.8rem',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              padding: '5px',
              background: 'rgba(255, 255, 255, 0.35)',
              border: '2.5px solid rgba(255, 255, 255, 0.6)',
              boxShadow: '0 12px 40px rgba(236, 72, 153, 0.35), inset 0 0 20px rgba(255, 255, 255, 0.2)',
              overflow: 'hidden',
              animation: 'frameShimmer 3s ease-in-out infinite',
            }}>
              <img
                src={portrait}
                alt="Portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
            </div>
          </div>

          {/* "Hi [name] ❤️" */}
          <h1 className={r(2)} style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 'clamp(1.7rem,6.5vw,2.25rem)',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#fff',
            textShadow: '0 3px 20px rgba(190,18,60,.4), 0 1px 3px rgba(0,0,0,.1)',
            marginBottom: '.1rem',
          }}>
            Hi {HER_NAME} ❤️
          </h1>

          {/* "Welcome to our little corner ✨" */}
          <p className={r(3)} style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 'clamp(1.1rem,3.3vw,1.25rem)',
            color: 'rgba(255,255,255,.9)',
            fontStyle: 'italic',
            fontWeight: 500,
            marginBottom: '1.5rem',
            textShadow: '0 2px 8px rgba(0,0,0,.08)',
          }}>
            Welcome to our little corner ✨
          </p>

          {/* 🌹 gently bobbing rose */}
          <div className={r(4)} style={{
            fontSize: 'clamp(2rem,6vw,2.5rem)',
            animation: 'bob 3s ease-in-out infinite',
            display: 'inline-block',
            marginBottom: '1.2rem',
            filter: 'drop-shadow(0 4px 12px rgba(236, 72, 153, 0.3))',
          }}>🌹</div>

          {/* 🌹 Since [date] 🌹 pill */}
          <div className={r(5)} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.8rem',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.45rem',
              background: 'rgba(255,255,255,.22)',
              border: '1.5px solid rgba(255,255,255,.35)',
              borderRadius: '999px',
              padding: '.45rem 1.15rem',
              boxShadow: '0 4px 15px rgba(236, 72, 153, 0.15)',
            }}>
              <span style={{ fontSize: '.9rem' }}>🌹</span>
              <span style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 'clamp(.85rem,2.3vw,.97rem)',
                color: 'rgba(255,255,255,.85)',
                fontWeight: 600,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
              }}>Since {SPECIAL_DATE}</span>
              <span style={{ fontSize: '.9rem' }}>🌹</span>
            </div>
          </div>

          {/* elegant divider */}
          <div className={r(5)} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.6rem',
            marginBottom: '1.9rem',
          }}>
            <div style={{
              width: '50px',
              height: '1.5px',
              background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.5))',
            }} />
            <span style={{
              fontSize: '1.1rem',
              opacity: .7,
              filter: 'drop-shadow(0 2px 8px rgba(236, 72, 153, 0.3))',
            }}>💐</span>
            <div style={{
              width: '50px',
              height: '1.5px',
              background: 'linear-gradient(270deg,transparent,rgba(255,255,255,.5))',
            }} />
          </div>

          {/* ── CTA button ── */}
          <div className={r(6)}>
            <button
              className="valentine-cta"
              onClick={() => navigate('/question')}
            >
              Enter our story &nbsp;→
            </button>
          </div>

          {/* sign-off */}
          <p className={r(7)} style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 'clamp(.78rem,2vw,.86rem)',
            color: 'rgba(255,255,255,.5)',
            marginTop: '1.6rem',
            fontStyle: 'italic',
            textShadow: '0 1px 3px rgba(0,0,0,.05)',
          }}>
            made with love, just for you 💕
          </p>
        </div>
      </div>
    </>
  );
}