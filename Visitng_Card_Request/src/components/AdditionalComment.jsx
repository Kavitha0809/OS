import React, { useState } from "react";
import "../styles/CommentBox.css";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="comment-box-wrapper">
      <h3 className="comment-heading">Additional Comments</h3>
      <div className="comment-box-container">
        <textarea
          className="comment-input" style={{ fontWeight: 700 }}
          value={comment}
          onChange={handleCommentChange}
          placeholder="She has joined 2 weeks back, So this assessments is based on her ramp up."
          rows="3"
          maxLength="500"
        />
      </div>
    </div>
  );
};

export default CommentBox;
