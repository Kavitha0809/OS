import React from "react";
import "../styles/VisitingCardPreview.css";
import image1 from "../assets/visitingcards/image1.png";
import image2 from "../assets/visitingcards/image2.png";
import image3 from "../assets/visitingcards/image3.png";

const VisitingCardPreview = ({
  isKannadaRoute = false,
  isGaApprovalRoute = false,
  isReportRoute = false,
}) => {
  return (
    <div className="visiting-card-preview-container">
      <div className="card-preview-inner">
        <div className="card-image">
          <img
            src={image1}
            alt="Visiting Card Preview 1"
            className="card-img"
          />
        </div>
        <div className="card-image">
          <img
            src={
              isKannadaRoute || isGaApprovalRoute || isReportRoute
                ? image3
                : image2
            }
            alt="Visiting Card Preview 2"
            className="card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default VisitingCardPreview;
