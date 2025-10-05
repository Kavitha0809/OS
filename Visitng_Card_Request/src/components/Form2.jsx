import React from "react";
import "../styles/Form.css";
import "../styles/SamsungFont.css";
import "../styles/ParameterTable.css";
import CommentBox from "./CommentBox";
import TransferWorkflow from "./TransferWorkflow";
import { Add } from "@mui/icons-material";
import AdditionalComment from "./AdditionalComment";
import "../styles/ParameterTable.css"
const Form1 = () => {
  return (
  <div className="form-wrapper samsung-text">
      <div className="employee-details">
        <div className="employee-details-header">Employee Details</div>

        <div className="employee-details-box">
          <div className="info-row">
            <div className="info-item">
              <div className="info-label">Employee Name</div>
              <div className="info-value">Somashree Nandy</div>
            </div>

            <div className="info-item info-item-right">
              <div className="info-label">Date of Joining</div>
              <div className="info-value">10-Oct-2024</div>
            </div>
          </div>
        </div>
      </div>
        <p className="form-legend">
          <strong>Legend</strong>
          <span className="legend-dash"> - </span>
          <span className="legend-scale">Rating Scale of 1 to 5 (1 being the highest)</span>
          <span className="required">*</span>
        </p>

        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-number">1</div>
            <div className="legend-label">Consistently Far Exceeds Expectations</div>
          </div>

          <div className="legend-item">
            <div className="legend-number">2</div>
            <div className="legend-label">Frequently Exceeds Expectations</div>
          </div>

          <div className="legend-item">
            <div className="legend-number">3</div>
            <div className="legend-label">Consistently Meets Expectations</div>
          </div>

          <div className="legend-item">
            <div className="legend-number">4</div>
            <div className="legend-label">Generally Meets Expectations, Performance Needs Improvement in some areas</div>
          </div>

          <div className="legend-item">
            <div className="legend-number">5</div>
            <div className="legend-label">Does not meet Minimum Performance Expectation</div>
          </div>
        </div>
        
        <div className="parameter-rating-header">Parameter Rating</div>
        
        <div className="parameter-table">
          <div className="performance-parameter">
            <span className="performance-icon">−</span>
            Performance Parameter
          </div>
          <div className="table-header">
            <div className="header-cell">Parameter</div>
            <div className="header-cell">Weightage</div>
            <div className="header-cell">RM Weightage</div>
            <div className="header-cell">RM Remarks</div>
          </div>

          <div className="table-row">
            <div className="cell">Job Understanding, Knowledge & Problem Analysis</div>
            <div className="cell">40</div>
            <div className="cell">20</div>
            <div className="cell">xxx-xxxx-xxxxxxxxxxx-xxxxxxxxxxxxxxx-xxxxxx</div>
          </div>

          <div className="table-row">
            <div className="cell">Productivity and Quality of work</div>
            <div className="cell">30</div>
            <div className="cell">25</div>
            <div className="cell">xxx-xxxx-xxxxxxxxxxx-xxxxxxxxxxxxxxx-xxxxxx</div>
          </div>

          <div className="table-row">
            <div className="cell">Integrity and Compliance</div>
            <div className="cell">20</div>
            <div className="cell">10</div>
            <div className="cell">xxx-xxxx-xxxxxxxxxxx-xxxxxxxxxxxxxxx-xxxxxx</div>
          </div>

          <div className="table-row">
            <div className="cell">Comm Skill, Ability to Lead and Drive Engagements</div>
            <div className="cell">10</div>
            <div className="cell">5</div>
            <div className="cell">xxx-xxxx-xxxxxxxxxxx-xxxxxxxxxxxxxxx-xxxxxx</div>
          </div>
</div>
          <div className="table-row sum-row" style={{ borderBottom: "none" }}>
            <div className="sum-label cell label1" style={{ borderBottom: "none" }}>Sum=</div>
            <div className="sum-value cell value1">100</div>
            <div className="sum-label cell label2" style={{ borderBottom: "none" }}>Sum=</div>
            <div className="sum-value cell value2">60</div>

          </div>
        

        <AdditionalComment />
        {/* Rating control block (placed below first comment box) */}
        <div className="rating-row">
          <label className="rating-label">Over all Rating on a Scale of 1 to 5 (1 being the highest) <span className="required">*</span></label>
          <div className="rating-controls">
            <select className="rating-select" defaultValue={3}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="rating-buttons">
              <button type="button" className="primary-btn">Calculate Overall Rating</button>
              <button type="button" className="outline-btn">
                <img src="src/assets/svg/save.svg" alt="" style={{width: "16px", height: "16px"}} />
                Save as Draft
              </button>
            </div>
          </div>
        </div>
        <CommentBox />
        <CommentBox />
        <div className="approval-buttons-container">
            <button type="button" className="reject-button">
              Reject
            </button>
            <button type="button" className="approve-button">
              Approve
            </button>
          </div>
        <TransferWorkflow />
    </div>
  );
};

export default Form1;