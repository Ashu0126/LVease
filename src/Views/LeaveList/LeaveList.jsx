import { useContext, useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import Leaves from "../../components/Leaves/Leaves";
import "./LeaveList.css";
import UserContext from "../../Context/UserContext";

const LeaveList = () => {
  const { leaveList } = useContext(UserContext);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    const filterList = leaveList.filter(
      (item) => !item.approved && !item.rejected
    );
    setPending(filterList);
  }, [leaveList]);

  const handleStatusChange = (index, status) => {
    const updatedList = [...pending];
    updatedList[index][status] = true;
    setPending(updatedList.filter((item) => !item.approved && !item.rejected));
  };

  const formatDate = (time) => {
    const dateObject = new Date(time);
    return dateObject.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const listApplication = pending.map((item, index) => (
    <span key={index}>
      <Leaves
        ename={item.ename}
        from={formatDate(item.from)}
        to={formatDate(item.to)}
        type={item.type}
        handleApprove={() => handleStatusChange(index, "approved")}
        handleReject={() => handleStatusChange(index, "rejected")}
      />
    </span>
  ));

  return (
    <div className='LeaveList'>
      <Heading text='Leaves' />
      {pending.length === 0 ? (
        <p className='noLeave'>no pending leaves</p>
      ) : (
        <ul>{listApplication}</ul>
      )}
    </div>
  );
};

export default LeaveList;
