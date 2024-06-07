// src/components/InteractiveButtons.js

"use client";

import React from 'react';

const InteractiveButtons = () => {
  const resume = () => {
    window.open('https://drive.google.com/file/d/1wiK5AblOcsRR4U1kb7wwajy1Y_JmH7kK/view?usp=sharing');
  };

  const git = () => {
    window.open('https://drive.google.com/file/d/1wiK5AblOcsRR4U1kb7wwajy1Y_JmH7kK/view?usp=sharing');
  };

  return (
    <div>
      <button
        className="but"
        onClick={resume}
        style={{
          backgroundColor: '#635985',
          color: 'white',
          fontWeight: '700',
          borderRadius: '20px',
          border: 'none',
          padding: '0.6rem',
          width: '137px',
          height: '50px',
          marginRight: '10px',
        }}
      >
        Download Resume
      </button>
      <button
        className="but"
        onClick={git}
        style={{
          backgroundColor: '#635985',
          color: 'white',
          fontWeight: '700',
          borderRadius: '20px',
          border: 'none',
          padding: '0.6rem',
          width: '137px',
          height: '50px',
        }}
      >
        GITHUB Profile
      </button>
    </div>
  );
};

export default InteractiveButtons;
