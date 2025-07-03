import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainWrapper from './components/layout/MainWrapper';
import SinglePage from './pages/HomePage';
import PortfolioPage from './components/common/IntroPage';
import ThreeBackground from './components/common/ThreeBackground';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Auto-transition to main page after 4 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Handle click to skip intro
  const handleSkipIntro = () => {
    setShowIntro(false);
  };

  return (
    <>
      {/* 3D Background for main portfolio */}
      {!showIntro && <ThreeBackground />}
      
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleSkipIntro}
            style={{ cursor: 'pointer' }}
          >
            <PortfolioPage />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MainWrapper>
              <SinglePage />
            </MainWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
