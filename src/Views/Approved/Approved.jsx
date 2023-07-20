import { useContext } from "react";
import Heading from "../../components/Heading/Heading";
import UserContext from "../../Context/UserContext";
import Leaves from "../../components/Leaves/Leaves";

const Approved = () => {
  const { leaveList } = useContext(UserContext);

  const approved = leaveList.filter((item) => item.approved === true);

  const formatDate = (time) => {
    const dateObject = new Date(time);
    return dateObject.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const listApplication = approved.map((item, index) => (
    <span key={index}>
      <Leaves
        ename={item.ename}
        from={formatDate(item.from)}
        to={formatDate(item.to)}
        type={item.type}
        status={"approved"}
      />
    </span>
  ));

  return (
    <div className='LeaveList'>
      <Heading text='Approved leaves' />
      {approved.length === 0 ? (
        <p className='noLeave'>no leave approved yet</p>
      ) : (
        <ul>{listApplication}</ul>
      )}
    </div>
  );
};

export default Approved;
