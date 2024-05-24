"use client";

import React from 'react';
import Typewritter from 'typewriter-effect';

const TypingEffect: React.FC = () => {
  return (
    <Typewritter
    options={{loop :true , }}
    onInit={(Typewritter)=>
      {
        Typewritter.typeString("<span>🌷</span>Take Notes Everywhere , anywhere").start() ; 
      }
    }
    />
  );
};

export default TypingEffect;
