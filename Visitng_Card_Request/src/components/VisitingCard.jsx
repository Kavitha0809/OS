import React from "react";
import { useLocation } from "react-router-dom";
import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import "../styles/Form.css";
import "../styles/TrainingVideos1.css";

const VisitingCard = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log("Current pathname:", pathname); // Debug log

  let FormComponent = Form; // Default to Form

  if (pathname === "/Employeesubmit") {
    FormComponent = Form;
  } else if (pathname === "/PHsubmit") {
    FormComponent = Form2;
  } else if (pathname === "/Report") { // Note: Capital R to match App.jsx
    FormComponent = Form3;
  }

  return (
    <div className="training-videos-container">
      {/* Main Blue Rectangle Container - Now contains Employee Details Form */}
      <div className="main-rectangle">
        <FormComponent />
      </div>
    </div>
  );
};

export default VisitingCard;
