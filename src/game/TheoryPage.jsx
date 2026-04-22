import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import DatVanDe from './sections/DatVanDe';
import CoSoLyThuyet from './sections/CoSoLyThuyet';
import GiaiPhap from './sections/GiaiPhap';
import LeninPresenter from './sections/LeninPresenter';
import useGsapAnimations from '../hooks/useGsapAnimations';
import useScrollReveal from '../hooks/useScrollReveal';

export const TheoryPage = () => {
  // Use both: GSAP for rich animations, fallback for any remaining .reveal elements
  useGsapAnimations();
  useScrollReveal();

  return (
    <div className="theory-page-container" style={{ width: '100%', minHeight: '100vh', scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>{`.theory-page-container::-webkit-scrollbar { display: none; }`}</style>
      
      {/* Lenin Presenter — sticky guide through theory sections */}
      <LeninPresenter />
      
      <Hero />
      <DatVanDe />
      <CoSoLyThuyet />
      <GiaiPhap />
    </div>
  );
};
