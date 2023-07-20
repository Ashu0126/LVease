import React from "react";
import "./Leaves.css";

const Leaves = ({
  ename,
  from,
  to,
  type,
  handleApprove,
  handleReject,
  status,
}) => {
  let statusClassName = "";

  if (status === "approved") {
    statusClassName = "approve";
  } else if (status === "rejected") {
    statusClassName = "reject";
  }

  return (
    <div className='Leaves'>
      <div className='info-section'>
        <p>{ename}</p>
        <h3>
          {from} - {to}
        </h3>
        <p>{type}</p>
      </div>
      {status ? (
        <div className='leaveStatus'>
          <p className={statusClassName}>
            {status === "approved" ? "Approved" : "Rejected"}
          </p>
        </div>
      ) : (
        <div className='button-section'>
          <button className='approve' onClick={handleApprove}>
            Approve
          </button>
          <button className='reject' onClick={handleReject}>
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default Leaves;
