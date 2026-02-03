import { useEffect, useRef } from 'react'

export default function BackgroundMusic({ src, volume = 0.3 }) {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
 
    audio.volume = volume

    // Browsers block autoplay until user clicks.
    // Tries to play first, if blocked waits for a click.
    audio.play().catch(() => {
      const playOnClick = () => {
        audio.play()
        window.removeEventListener('click', playOnClick)
      }
      window.addEventListener('click', playOnClick)
    })
  }, [volume, src])

  return <audio ref={audioRef} src={src} loop style={{ display: 'none' }} />
}