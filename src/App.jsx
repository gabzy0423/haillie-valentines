import BackgroundMusic from './BackgroundMusic'
import ValentinesPinEntry from './ValentinesPinEntry'

export default function App() {
  return (
    <>
      <BackgroundMusic
        src="/music/romantic-song.mp3"
        volume={0.3}
      />

      <ValentinesPinEntry />
    </>
  )
}