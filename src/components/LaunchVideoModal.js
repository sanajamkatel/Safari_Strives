import React, { useEffect, useState } from 'react';
import './LaunchVideoModal.css';

const LaunchVideoModal = ({ videoId = 'Aqh1WMs8wb0' }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openLaunchModal', handleOpen);
    return () => window.removeEventListener('openLaunchModal', handleOpen);
  }, []);

  const closeModal = () => setIsOpen(false);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="launch-modal-overlay" onClick={closeModal}>
      <div className="launch-modal" onClick={(e) => e.stopPropagation()}>
        <button className="launch-modal-close" onClick={closeModal} aria-label="Close video modal">
          &times;
        </button>
        <div className="launch-modal-body">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Safari Strives Launch Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LaunchVideoModal;

