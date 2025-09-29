import React, { useState } from "react";
import "../styles/CommentBox.css";

const CommentBox = () => {
  const [comment, setComment] = useState("xxx-xx-xxx-xx-xxx");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="comment-box-wrapper">
      <h3 className="comment-heading">Comment (Max 500 Chars)</h3>
      <div className="comment-box-container">
        <textarea
          className="comment-input"
          value={comment}
          onChange={handleCommentChange}
          rows="3"
          maxLength="500"
        />
      </div>
    </div>
  );
};

export default CommentBox;
