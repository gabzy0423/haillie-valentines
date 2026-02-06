import { Routes, Route } from 'react-router-dom';
import BackgroundMusic from './BackgroundMusic';
import ValentinesPinEntry from './ValentinesPinEntry';
import ValentinesHome from './ValentinesHome';
import ValentinesMenu from './ValentinesMenu';
import ValentinesGame from './ValentinesGame';
import ValentinesGallery from './ValentinesGallery';
import ReasonWhyILoveYou from './ReasonWhyILoveYou';
import ValentinesEnvelopes from './ValentinesEnvelopes';




const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-pink-100 text-3xl text-rose-600 font-bold">
    {title} Coming Soon! 🚧
  </div>
);

export default function App() {
  return (
    <>
      <BackgroundMusic src="/music/romantic-song.mp3" volume={0.3} />

      <Routes>
        <Route path="/" element={<ValentinesPinEntry />} />
        <Route path="/home" element={<ValentinesHome />} />
        
        <Route path="/menu" element={<ValentinesMenu />} />
        <Route path="/game" element={<ValentinesGame />} />
        <Route path="/gallery"  element={<ValentinesGallery />} />
        <Route path="/reasons"  element={<ReasonWhyILoveYou />} />
        <Route path="/letters"  element={<ValentinesEnvelopes />} />
      </Routes>
    </>
  )
}