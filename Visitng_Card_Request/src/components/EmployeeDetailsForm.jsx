import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/EmployeeDetailsForm.css";
import noteIcon from "../assets/svg/noteicon.svg";
import dropdownIcon from "../assets/svg/dropdown.svg";
import VisitingCardPreview from "./VisitingCardPreview";
import CommentBox from "./CommentBox";
import TransferWorkflow from "./TransferWorkflow";

const EmployeeDetailsForm = () => {
  const location = useLocation();
  const isKannadaRoute = location.pathname === "/cardrequestkannada";
  const isGaApprovalRoute = location.pathname === "/gaapproval";
  const isReportRoute = location.pathname === "/report";

  const [formData, setFormData] = useState({
    employeeName: "Murali Mukhi Illam",
    designation: "General Manager",
    department: "Sales & Marketing",
    workLocation: "Orion",
    knoxId: "Murali@Samsung.com",
    mobileNo: "+61-432-753-202",
    noOfCards: "50",
    includeKannadaAddress: isKannadaRoute || isGaApprovalRoute || isReportRoute, // Default checked for Kannada route, GA approval, and report
    displayInCardDesignation: isGaApprovalRoute ? true : true, // Always checked for GA approval
    displayInCardDepartment: false,
    deliveryConfirmation: isGaApprovalRoute, // Default checked for GA approval route only
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Details Form submitted:", formData);
  };

  return (
    <div className="employee-details-form-container">
      <div className="form-header">
        <h2 className="form-title">Employee Details</h2>
        <div className="note-icon">
          <img src={noteIcon} alt="Note" className="note-svg" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="employee-form">
        {/* First Row */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              Employee Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleInputChange}
              className="form-input readonly-input"
              required
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Designation <span className="required">*</span>
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="form-input readonly-input"
              required
              readOnly
            />
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="displayInCardDesignation"
                checked={formData.displayInCardDesignation}
                onChange={handleInputChange}
                className="checkbox-input"
                id="displayInCardDesignation"
                disabled={isGaApprovalRoute}
              />
              <label
                htmlFor="displayInCardDesignation"
                className="checkbox-label"
              >
                Display in Card
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Department <span className="required">*</span>
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="form-input readonly-input"
              required
              readOnly
            />
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="displayInCardDepartment"
                checked={formData.displayInCardDepartment}
                onChange={handleInputChange}
                className="checkbox-input"
                id="displayInCardDepartment"
                disabled={isGaApprovalRoute}
              />
              <label
                htmlFor="displayInCardDepartment"
                className="checkbox-label"
              >
                Display in Card
              </label>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              Work Location <span className="required">*</span>
            </label>
            <select
              name="workLocation"
              value={formData.workLocation}
              onChange={handleInputChange}
              className={`form-select ${
                isGaApprovalRoute || isReportRoute
                  ? "readonly-input"
                  : "white-input"
              }`}
              required
              disabled={isGaApprovalRoute || isReportRoute}
            >
              <option value="">Select Location</option>
              <option value="Orion">Orion</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Knox ID</label>
            <input
              type="email"
              name="knoxId"
              value={formData.knoxId}
              onChange={handleInputChange}
              className="form-input readonly-input"
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Mobile No</label>
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
              className={`form-input ${
                isGaApprovalRoute || isReportRoute
                  ? "readonly-input"
                  : "white-input"
              }`}
              readOnly={isGaApprovalRoute || isReportRoute}
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" style={{ marginTop: "10px" }}>
              No Of Cards
            </label>{" "}
            <select
              name="noOfCards"
              value={formData.noOfCards}
              onChange={handleInputChange}
              className={`form-select ${
                isGaApprovalRoute || isReportRoute
                  ? "readonly-input"
                  : "white-input"
              }`}
              disabled={isGaApprovalRoute || isReportRoute}
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="includeKannadaAddress"
                checked={formData.includeKannadaAddress}
                onChange={handleInputChange}
                className="checkbox-input"
                id="kannadaAddress"
                disabled={isGaApprovalRoute}
              />
              <label htmlFor="kannadaAddress" className="checkbox-label">
                Include Kannada Address
              </label>
            </div>
          </div>
        </div>

        {/* Visiting Card Preview */}
        <VisitingCardPreview
          isKannadaRoute={isKannadaRoute}
          isGaApprovalRoute={isGaApprovalRoute}
          isReportRoute={isReportRoute}
        />

        {/* Delivery Confirmation Checkbox - Only for GA Approval Route */}
        {isGaApprovalRoute && (
          <div className="delivery-confirmation-container">
            <div className="delivery-checkbox-group">
              <input
                type="checkbox"
                name="deliveryConfirmation"
                checked={formData.deliveryConfirmation}
                onChange={handleInputChange}
                className="checkbox-input"
                id="deliveryConfirmation"
                disabled={isGaApprovalRoute}
              />
              <label
                htmlFor="deliveryConfirmation"
                className="delivery-checkbox-label"
              >
                I Confirm that the Visiting Card have been delivered to the
                Employee
              </label>
            </div>
          </div>
        )}

        {/* Comment Box */}
        <CommentBox />

        {/* Action Buttons - Different for GA Approval vs Other Routes */}
        {!isReportRoute && !isGaApprovalRoute && (
          <div className="submit-button-container">
            <button type="submit" className="employee-submit-button">
              Submit
            </button>
          </div>
        )}

        {/* GA Approval Route - Reject/Approve Buttons */}
        {isGaApprovalRoute && (
          <div className="approval-buttons-container">
            <button type="button" className="reject-button">
              Reject
            </button>
            <button type="button" className="approve-button">
              Approve
            </button>
          </div>
        )}

        {/* Transfer Workflow - Only for GA Approval Route */}
        {isGaApprovalRoute && <TransferWorkflow />}
      </form>
    </div>
  );
};

export default EmployeeDetailsForm;
