'use client'
import { useState } from 'react';
import Confetti from 'react-confetti';

export default function Order() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Confetti duration 3 seconds
  };

  return (
    <>
      <div className="text-center mt-72 items-center flex flex-col w-auto">
        <h1 className="text-orange-500 text-4xl">𝕲𝖗𝖎𝖑𝖑𝖀𝖕!</h1>
        <p className="w-auto p-6 mt-10 text-2xl bg-gray-50">
          This is a demo,🥳 so no actual orders will be processed yet, 🥰 as
          this was just a project created for demonstration purposes. Stay tuned
          as we prepare for our official launch. Thank you for visiting
          <span className="text-orange-500"> GrillUp</span>—hope you enjoyed your visit!😇
        </p>
        <button 
          onClick={handleConfetti} 
          className="mt-5 px-4 py-2 bg-orange-500  text-white rounded-xl"
        >
          Click Me For a Surprise! 🎉
        </button>
      </div>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </>
  );
}
