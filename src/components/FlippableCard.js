// src/components/FlippableCard.js
import React, { useRef, useState } from 'react';
import useEqualHeight from '../hooks/useEqualHeight';
import './FlippableCard.css';

function FlippableCard({ frontTitle, frontText, backText, onCheck }) {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEqualHeight(frontRef, backRef); // Synchronize the heights

  const handleConfirm = () => {
    setIsCompleted(true); // Mark the card as completed
    setIsFlipped(false); // Rotate the card back to the front
    onCheck(true); // Trigger any external check handling
  };

  const handleMouseEnter = () => {
    if (!isCompleted) setIsFlipped(true); // Allow flipping only if not completed
  };

  const handleMouseLeave = () => {
    if (!isCompleted) setIsFlipped(false); // Flip back when mouse leaves
  };

  return (
    <div
      className={`group flippable-card ${isFlipped ? 'flipped' : ''} ${
        isCompleted ? 'completed' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flippable-card-inner">
        {/* Front Side */}
        <div className="flippable-card-front" ref={frontRef}>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-500">{frontTitle}</h3>
          <p className="flippable-card-content">{frontText}</p>
          {isCompleted && (
            <div className="completed-overlay">
              <span className="completed-checkmark">
                <i className="fas fa-check"></i>
              </span>
            </div>
          )}
        </div>
        {/* Back Side */}
        <div className="flippable-card-back" ref={backRef}>
          <p className="flippable-card-content">{backText}</p>
          <button
            onClick={handleConfirm}
            className="confirm-button mt-4"
            disabled={isCompleted} // Disable button after confirmation
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlippableCard;

// src/components/FlippableCard.js

// import React, { useRef } from 'react';
// import './FlippableCard.css';

// function FlippableCard({ frontTitle, frontText, backText }) {
//   return (
//     <div className="flippable-card">
//       <div className="flippable-card-inner">
//         <div className="flippable-card-front">
//           <h3>{frontTitle}</h3>
//           <p>{frontText}</p>
//         </div>
//         <div className="flippable-card-back">
//           <p>{backText}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FlippableCard;
