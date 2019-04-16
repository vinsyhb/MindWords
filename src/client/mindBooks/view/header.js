import React from "react";
import bookIcon from "./../../assets/openbook.png";

const ViewHeader = props => {
  debugger;
  return (
    <div className="headerAlign">
      <div>
        <img src={bookIcon} alt="Book Picture" width="127" height="127" />
      </div>
      <div>
        <p>Name: {props.bookName}</p>
        <p>Author Name: {props.authorName}</p>
        <p>Start Date: {props.startDate}</p>
        <p>End Date: {props.endDate}</p>
      </div>
    </div>
  );
};

export default ViewHeader;
