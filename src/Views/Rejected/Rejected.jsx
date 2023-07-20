import { useContext } from "react";
import Heading from "../../components/Heading/Heading";
// import "./LeaveList.css";
import UserContext from "../../Context/UserContext";
import Leaves from "../../components/Leaves/Leaves";

const Rejected = () => {
  const { leaveList } = useContext(UserContext);

  const rejected = leaveList.filter((item) => item.rejected === true);

  const formatDate = (time) => {
    const dateObject = new Date(time);
    return dateObject.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const listApplication = rejected.map((item, index) => (
    <span key={index}>
      <Leaves
        ename={item.ename}
        from={formatDate(item.from)}
        to={formatDate(item.to)}
        type={item.type}
        status={"rejected"}
      />
    </span>
  ));

  return (
    <div className='LeaveList'>
      <Heading text='Rejected leaves' />
      {rejected.length === 0 ? (
        <p className='noLeave'>no leave rejected yet</p>
      ) : (
        <ul>{listApplication}</ul>
      )}
    </div>
  );
};

export default Rejected;
