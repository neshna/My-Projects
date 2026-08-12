import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { GiTargetArrows } from "react-icons/gi";
import "./QuoteBanner.css";


const QuoteBanner = () => {
  return (
    <div className="quote-banner">
      <div className="quote-content">
        <FaQuoteLeft className="quote-icon" />

        <div>
          <h3>
            The secret of getting ahead is getting started.
          </h3>
          <p>— Mark Twain</p>
        </div>
      </div>

      <GiTargetArrows className="target-icon" />
    </div>
  );
}

export default QuoteBanner;
