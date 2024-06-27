import React, { useState, useEffect } from 'react';

const Typing_effect = () => {
  const [text, setText] = useState('');
  const phrases = ["Hello World!", "Welcome to Tailwind CSS", "Creating Typing Effect"];
  const typingSpeed = 150; // Adjust typing speed here (milliseconds)
  const loopDelay = 1000; // Delay between loops (milliseconds)

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let interval;

    const type = () => {
      if (currentIndex < phrases.length) {
        if (!isDeleting && currentText.length < phrases[currentIndex].length) {
          currentText = phrases[currentIndex].substring(0, currentText.length + 1);
          setText(currentText);
        } else if (!isDeleting && currentText.length === phrases[currentIndex].length) {
          isDeleting = true;
          setTimeout(type, loopDelay);
        } else if (isDeleting && currentText.length > 0) {
          currentText = phrases[currentIndex].substring(0, currentText.length - 1);
          setText(currentText);
        } else {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % phrases.length;
          currentText = '';
          setText('');
          setTimeout(type, typingSpeed);
        }
      }
    };

    interval = setTimeout(type, typingSpeed);

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 mt-8">{text}</h1>
    </div>
  );
};

export default Typing_effect;
