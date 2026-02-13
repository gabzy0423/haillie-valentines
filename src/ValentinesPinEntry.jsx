import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CORRECT_PIN = '10172024';
const HINT_2      = '2YRS NA TAYO HINDI MO PA DIN ALAM!!!';
const HINT_3      = 'AYUKOOOOO NA HUWAG NA ITULOY';

export default function ValentinesPinEntry() {  
  const navigate              = useNavigate();
  const [pin, setPin]         = useState('');
  const [error, setError]     = useState(false);
  const [shake, setShake]     = useState(false);
  const [failCount, setFails] = useState(0);
  const [success, setSuccess] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    const heartEmojis = ['❤️', '💝', '💗', '💖', '🌹', '💕'];
    const gridColumns = 6;
    const newHearts = [];
    
    for (let i = 0; i < 18; i++) {
      const col = i % gridColumns;
      const baseLeft = (col / gridColumns) * 100 + (Math.random() * 12 - 6);
      
      newHearts.push({
        id: i,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        left: Math.max(0, Math.min(100, baseLeft)),
        top: Math.random() * 100,
        size: 1.3 + Math.random() * 1.7,
        duration: 15 + Math.random() * 8,
        delay: Math.random() * 10,
      });
    }
    
    setFloatingHearts(newHearts);
  }, []);

  const press = (n) => {
    if (pin.length < 8 && !success) {
      setPin(p => p + n);
      setError(false);
    }
  };
  const del = () => { setPin(p => p.slice(0, -1)); setError(false); };

  /* ── submit ── */
  const submit = () => {
    if (pin === CORRECT_PIN) {
      setSuccess(true);
      setTimeout(() => navigate('/home'), 1400);
    } else {
      setError(true);
      setShake(true);
      setFails(c => c + 1);
      setShowModal(true);
      setTimeout(() => setShake(false), 520);
    }
  };

  /* ── close modal and reset ── */
  const closeModal = () => {
    setShowModal(false);
    setPin('');
    setError(false);
  };

  /* ── modal message logic ── */
  const getModalMessage = () => {
    if (failCount === 1)  return {
      title: '❌ Wrong PIN! ❌',
      message: 'WRONG PASSWORD LALA MO',
      emoji: '😅'
    };
    if (failCount === 2)  return {
      title: '❌ Still Wrong! ❌',
      message: HINT_2,
      emoji: '🤦‍♀️'
    };
    if (failCount === 3)  return {
      title: '❌ Really?! ❌',
      message: HINT_3,
      emoji: '😤'
    };
    if (failCount >= 4)   return {
      title: '💔 Fine, Here You Go 💔',
      message: `The PIN is: ${CORRECT_PIN}`,
      emoji: '🙄'
    };
    return {
      title: '❌ Wrong PIN! ❌',
      message: 'Try again!',
      emoji: '😅'
    };
  };

  /* ── hint logic ── */
  const hint = () => {
    if (success) return '💝 Welcome…';
    return '💕 Enter our special date (MMDDYYYY)';
  };

  /* ── reusable numpad-button style ── */
  const NUM = {
    background:'rgba(255,255,255,0.25)',
    backdropFilter:'blur(16px)',
    WebkitBackdropFilter:'blur(16px)',
    border:'2px solid rgba(255,255,255,0.4)',
    borderRadius:'1.1rem',
    padding:'clamp(0.75rem,3vw,1.2rem)',
    fontSize:'clamp(1.4rem,5vw,1.75rem)',
    fontWeight:700,
    color:'#C71585',
    cursor:'pointer',
    transition:'all 0.18s ease',
    fontFamily:"'Poppins',sans-serif",
    outline:'none',
    boxShadow: '0 4px 15px rgba(199, 21, 133, 0.15)',
  };
  const hov = (e) => {
    const s = e.currentTarget.style;
    s.background  = 'rgba(255,255,255,0.5)';
    s.transform   = 'translateY(-3px) scale(1.05)';
    s.boxShadow   = '0 10px 30px rgba(236,72,153,0.35)';
    s.borderColor = 'rgba(236,72,153,0.6)';
  };
  const lv = (e) => {
    const s = e.currentTarget.style;
    s.background  = 'rgba(255,255,255,0.25)';
    s.transform   = 'scale(1)';
    s.boxShadow   = '0 4px 15px rgba(199, 21, 133, 0.15)';
    s.borderColor = 'rgba(255,255,255,0.4)';
  };
  const dn = (e) => { e.currentTarget.style.transform = 'scale(0.92)'; };
  const up = (e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; };

  /* ── colours driven by state ── */
  const dotColor   = success ? '#4ade80' : '#C71585';
  const dotShadow  = success ? '0 0 12px rgba(74,222,128,0.6)'  : '0 4px 15px rgba(199,21,133,0.4)';
  const borderCol  = success ? 'rgba(74,222,128,0.7)' : error ? 'rgba(236,72,153,0.7)' : 'rgba(255,255,255,0.5)';

  const modalContent = getModalMessage();

  return (
    <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');      
      
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

      /* floating bg hearts */
      @keyframes float{
        0%,100%{transform:translateY(0) rotate(0deg); opacity: 0.15;}
        33%    {transform:translateY(-45px) rotate(5deg); opacity: 0.25;}
        66%    {transform:translateY(-20px) rotate(-4deg); opacity: 0.2;}
      }
      /* pulsing top heart */
      @keyframes hb{
        0%,100%{transform:translateX(-50%) scale(1);}
        14%    {transform:translateX(-50%) scale(.88);}
        28%    {transform:translateX(-50%) scale(1.16);}
        42%    {transform:translateX(-50%) scale(.93);}
        56%    {transform:translateX(-50%) scale(1.08);}
      }
      /* card slide-up */
      @keyframes cardIn{
        from{opacity:0;transform:translateY(35px) scale(.94);}
        to  {opacity:1;transform:translateY(0)    scale(1)  ;}
      }
      /* wrong-pin shake */
      @keyframes shk{
        0%,100%{transform:translateX(0);}
        15%,45%,75%{transform:translateX(-10px);}
        30%,60%,90%{transform:translateX(10px);}
      }
      /* dot pop-in */
      @keyframes dotPop{
        from{transform:scale(0);}
        60% {transform:scale(1.35);}
        to  {transform:scale(1);}
      }
      /* success button bounce */
      @keyframes okBounce{
        0%  {transform:scale(1);}
        40% {transform:scale(1.2);}
        70% {transform:scale(0.95);}
        100%{transform:scale(1);}
      }
      /* corner sparkles */
      @keyframes sp{
        0%,100%{opacity:.3;transform:scale(.8) rotate(0deg);}
        50%    {opacity:.9;transform:scale(1.2) rotate(180deg);}
      }
      /* card glow */
      @keyframes cardGlow{
        0%,100%{box-shadow:0 0 35px rgba(199, 21, 133, 0.25), 0 12px 50px rgba(236, 72, 153, 0.15);}
        50%    {box-shadow:0 0 50px rgba(199, 21, 133, 0.35), 0 15px 70px rgba(236, 72, 153, 0.25);}
      }
      /* modal animations */
      @keyframes modalFadeIn{
        from{opacity:0;}
        to{opacity:1;}
      }
      @keyframes modalSlideIn{
        from{opacity:0;transform:translate(-50%, -48%) scale(0.9);}
        to{opacity:1;transform:translate(-50%, -50%) scale(1);}
      }
      @keyframes modalShake{
        0%,100%{transform:translate(-50%, -50%) rotate(0deg);}
        25%{transform:translate(-50%, -50%) rotate(-3deg);}
        75%{transform:translate(-50%, -50%) rotate(3deg);}
      }

      .card-in    {animation:cardIn .8s cubic-bezier(.34,1.56,.64,1) both;}
      .shk-anim   {animation:shk .52s ease;}
      .ok-bounce  {animation:okBounce .5s ease;}
    `}</style>

    <div style={{
      minHeight:'100vh',
      width:'100%',
      background: '#FFB6C1',
      backgroundImage: `
        radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.8) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 192, 203, 0.6) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(255, 105, 180, 0.4) 0%, transparent 50%),
        linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFB6C1 100%)
      `,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      position:'relative',
      overflow:'hidden',
      padding: 'clamp(1rem, 3vw, 2rem)',
    }}>

      {/* ── floating hearts (bg layer - non-overlapping) ── */}
      {floatingHearts.map(heart => (
        <div key={heart.id} style={{
          position:'absolute',
          fontSize:`${heart.size}rem`,
          opacity: 0.15,
          left: `${heart.left}%`,
          top: `${heart.top}%`,
          animation:`float ${heart.duration}s ${heart.delay}s infinite ease-in-out`,
          pointerEvents: 'none',
          zIndex: 0,
        }}>{heart.emoji}</div>
      ))}

      {/* ── corner sparkles ── */}
      {[
        {top:'6%',left:'8%',dl:'0s', sz:'1.3rem'},
        {top:'10%',right:'10%',dl:'1.5s', sz:'1.1rem'},
        {bottom:'10%',left:'12%',dl:'.7s', sz:'1rem'},
        {bottom:'16%',right:'9%',dl:'2.2s', sz:'1.2rem'},
        {top:'50%',left:'5%',dl:'1.1s', sz:'0.9rem'},
        {top:'65%',right:'7%',dl:'2.8s', sz:'1rem'},
      ].map((s,i) => (
        <div key={i} style={{
          position:'absolute',
          fontSize: s.sz,
          opacity:.35,
          animation:`sp 2.5s ${s.dl} infinite ease-in-out`,
          top:s.top,
          left:s.left,
          right:s.right,
          bottom:s.bottom,
          filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))',
          zIndex: 1,
        }}>✨</div>
      ))}

      {/* ══════ ERROR MODAL ══════ */}
      {showModal && (
        <div 
          onClick={closeModal}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            animation: 'modalFadeIn 0.3s ease',
            padding: '1rem',
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '3px solid rgba(236, 72, 153, 0.6)',
              borderRadius: '2rem',
              padding: 'clamp(2rem, 6vw, 3rem) clamp(1.5rem, 5vw, 2.5rem)',
              maxWidth: '450px',
              width: '90%',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(236, 72, 153, 0.4)',
              animation: `modalSlideIn 0.4s cubic-bezier(.34,1.56,.64,1), ${failCount > 1 ? 'modalShake 0.5s ease' : 'none'}`,
            }}
          >
            {/* Modal Emoji */}
            <div style={{
              fontSize: 'clamp(3rem, 12vw, 4.5rem)',
              marginBottom: '1rem',
              animation: 'hb 1.5s infinite',
            }}>
              {modalContent.emoji}
            </div>

            {/* Modal Title */}
            <h2 style={{
              fontFamily:"'Poppins',sans-serif",
              fontSize:'clamp(1.5rem,5vw,2rem)',
              fontWeight: 700,
              color: '#C71585',
              marginBottom: '1rem',
              textShadow: '0 2px 10px rgba(199, 21, 133, 0.3)',
            }}>
              {modalContent.title}
            </h2>

            {/* Modal Message */}
            <p style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)',
              color: '#ec4899',
              marginBottom: '2rem',
              fontWeight: 600,
              lineHeight: 1.5,
            }}>
              {modalContent.message}
            </p>

            {/* Close Button */}
            <button
              onClick={closeModal}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #ec4899, #be123c)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(236, 72, 153, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f472b6, #ec4899)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 72, 153, 0.3)';
              }}
              style={{
                background: 'linear-gradient(135deg, #f472b6, #ec4899)',
                border: 'none',
                borderRadius: '999px',
                padding: 'clamp(0.8rem, 2.5vw, 1rem) clamp(2rem, 6vw, 2.5rem)',
                color: '#fff',
                fontSize: 'clamp(1rem, 3vw, 1.15rem)',
                fontWeight: 700,
                fontFamily: "'Poppins',sans-serif",
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(236, 72, 153, 0.3)',
                outline: 'none',
              }}
            >
              Try Again 💕
            </button>
          </div>
        </div>
      )}

      {/* ══════ CARD ══════ */}
      <div className="card-in" style={{
        maxWidth:'420px',
        width:'100%',
        position:'relative',
        zIndex: 10,
      }}>

        {/* top pulsing heart */}
        <div style={{
          position:'absolute',
          top: 'clamp(-2.5rem, -8vw, -3rem)',
          left:'50%',
          fontSize:'clamp(2.8rem,10vw,3.8rem)',
          animation:'hb 1.8s infinite',
          filter: 'drop-shadow(0 4px 15px rgba(236, 72, 153, 0.4))',
          zIndex: 1,
        }}>💕</div>

        {/* Main card container */}
        <div style={{
        
        }}>

          {/* title */}
          <h1 style={{
            fontFamily:"'Poppins',sans-serif",
            fontWeight:700,
            fontSize:'clamp(2rem,7.5vw,2.8rem)',
            textAlign:'center',
            color: '#C71585',
            textShadow: '0 3px 15px rgba(199, 21, 133, 0.3), 0 1px 3px rgba(255, 255, 255, 0.8)',
            marginBottom:'.4rem',
          }}>Our Love Story</h1>

          <p style={{
            fontFamily:"'Poppins',sans-serif",
            textAlign:'center',
            color:'#D8527B',
            fontSize:'clamp(1.05rem,3vw,1.2rem)',
            marginBottom:'2.2rem',
            fontWeight:600,
          }}>Enter our special date</p>

          {/* ── PIN DOTS ── */}
          <div
            className={shake ? 'shk-anim' : ''}
            style={{
              background:'rgba(255,255,255,0.3)',
              backdropFilter:'blur(16px)',
              WebkitBackdropFilter:'blur(16px)',
              border:`2.5px solid ${borderCol}`,
              borderRadius:'1.2rem',
              padding:'clamp(1rem,3vw,1.4rem)',
              marginBottom:'1.6rem',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              gap:'clamp(.45rem,1.5vw,.7rem)',
              boxShadow: success 
                ? '0 0 30px rgba(74,222,128,0.4), inset 0 2px 10px rgba(255,255,255,0.2)' 
                : 'inset 0 2px 10px rgba(255,255,255,0.2)',
              transition:'border-color .4s, box-shadow .4s',
            }}
          >
            {[...Array(8)].map((_,i) => (
              <div key={i} style={{
                width:'clamp(.8rem,2.2vw,1.1rem)',
                height:'clamp(.8rem,2.2vw,1.1rem)',
                borderRadius:'50%',
                background: i < pin.length ? dotColor : 'transparent',
                border: i < pin.length ? 'none' : '2px solid rgba(199, 21, 133, 0.3)',
                boxShadow:  i < pin.length ? dotShadow : 'none',
                transform:  i < pin.length ? 'scale(1)' : 'scale(1)',
                transition:'all .3s cubic-bezier(.34,1.56,.64,1)',
                animation: i < pin.length ? 'dotPop .3s ease' : 'none',
              }}/>
            ))}
          </div>

          {/* ── HINT ── */}
          <div style={{
            fontFamily:"'Poppins',sans-serif",
            textAlign:'center',
            color:'#C71585',
            fontSize:'clamp(.95rem,2.8vw,1.05rem)',
            marginBottom:'1.3rem',
            minHeight:'1.5rem',
            fontWeight:600,
            transition:'color .4s',
          }}>{hint()}</div>

          {/* ── NUMPAD ── */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gap:'clamp(.65rem,1.8vw,.9rem)',
            marginBottom:'1rem',
            pointerEvents: success ? 'none' : 'auto',
            opacity: success ? 0.5 : 1,
            transition:'opacity .4s',
          }}>
            {[1,2,3,4,5,6,7,8,9].map(n => (
              <button key={n} onClick={() => press(String(n))}
                style={NUM}
                onMouseEnter={hov} onMouseLeave={lv}
                onMouseDown={dn}   onMouseUp={up}
              >{n}</button>
            ))}
            <button 
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'default',
                pointerEvents: 'none'
              }}
            />
            <button onClick={() => press('0')}
              style={NUM}
              onMouseEnter={hov} onMouseLeave={lv}
              onMouseDown={dn}   onMouseUp={up}
            >0</button>
            <button 
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'default',
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* ── DELETE + ENTER row ── */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gap:'clamp(.65rem,1.8vw,.9rem)',
            pointerEvents: success ? 'none' : 'auto',
            opacity: success ? 0.5 : 1,
            transition:'opacity .4s',
          }}>
            {/* Delete */}
            <button onClick={del} style={{
              ...NUM,
              fontSize:'clamp(1rem,2.8vw,1.1rem)',
              padding:'clamp(.75rem,2.5vw,1rem)',
            }}
              onMouseEnter={hov} onMouseLeave={lv}
            >Delete</button>

            {/* Enter */}
            <button
              onClick={submit}
              disabled={pin.length !== 8}
              className={success ? 'ok-bounce' : ''}
              style={{
                background: success
                  ? 'linear-gradient(135deg,#22c55e,#16a34a)'
                  : pin.length === 8
                    ? 'linear-gradient(135deg,#ec4899,#be123c)'
                    : 'rgba(199, 21, 133, 0.4)',
                border:'none',
                borderRadius:'1.1rem',
                outline:'none',
                padding:'clamp(.75rem,2.5vw,1rem)',
                fontSize:'clamp(1rem,2.8vw,1.1rem)',
                color:'#fff',
                fontWeight:700,
                cursor: pin.length === 8 ? 'pointer' : 'not-allowed',
                transition:'all .25s',
                fontFamily:"'Poppins',sans-serif",
                boxShadow: success 
                  ? '0 0 25px rgba(34,197,94,0.5)' 
                  : pin.length === 8 
                    ? '0 6px 20px rgba(236,72,153,0.3)' 
                    : 'none',
              }}
              onMouseEnter={e => {
                if (pin.length === 8 && !success) {
                  e.currentTarget.style.transform  = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow  = '0 10px 30px rgba(236,72,153,0.45)';
                }
              }}
              onMouseLeave={e => {
                if (!success) {
                  e.currentTarget.style.transform  = 'scale(1)';
                  e.currentTarget.style.boxShadow  = pin.length === 8 ? '0 6px 20px rgba(236,72,153,0.3)' : 'none';
                }
              }}
            >
              {success ? '✓ Opening…' : 'Enter →'}
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}