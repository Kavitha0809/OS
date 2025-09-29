import React from "react";
import "../styles/TransferWorkflow.css";
import transferWorkflowIcon from "../assets/svg/transferworkflow.svg";
import markIcon from "../assets/svg/mark.svg";

const TransferWorkflow = () => {
  return (
    <div className="transfer-workflow-container">
      <div className="transfer-workflow-content">
        <img
          src={transferWorkflowIcon}
          alt="Transfer Workflow"
          className="transfer-workflow-icon"
        />
        <span className="transfer-workflow-text">Transfer Workflow</span>
      </div>
      <img src={markIcon} alt="Arrow" className="transfer-workflow-arrow" />
    </div>
  );
};

export default TransferWorkflow;
