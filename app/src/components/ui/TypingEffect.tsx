"use client";

import React from 'react';
import Typewritter from 'typewriter-effect';

const TypingEffect: React.FC = () => {
  return (
    
    <Typewritter
    options={{loop :true , }}
    onInit={(Typewritter)=>
      {
        Typewritter.typeString("Anywhere").start() ; 
        Typewritter.pauseFor(100).deleteAll() ; 
        Typewritter.typeString("Everywhere").start() ;
        Typewritter.pauseFor(100).deleteAll() ; 

      }
    }
    />
  );
};

export default TypingEffect;
