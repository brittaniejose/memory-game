import "./MemoryCard.css";
import { useState } from 'react';



const MemoryCard = () => {
    const [isFlipped, setIsFlipped] = useState('false');

    function _clickHandler(bool) {
        setIsFlipped(bool = !bool)
    }

  return (
    <div className="MemoryCard" onClick={_clickHandler}>
      <div className={isFlipped ? "MemoryCardInner" : "MemoryCardInner flipped"}> 
        <div className="MemoryCardBack">
          <img src="/dc-logo.svg" alt="dclogo" className="dcImg" />
        </div>
        <div className="MemoryCardFront">Δ</div>
      </div>
    </div>
  );
};

export default MemoryCard;
