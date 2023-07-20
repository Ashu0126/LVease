import { useContext } from "react";
import Box from "../../components/Box/Box";
import Heading from "../../components/Heading/Heading";
import UserContext from "../../Context/UserContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { leaveList } = useContext(UserContext);
  const listLength = leaveList.length;

  return (
    <div className='Dashboard'>
      <Heading text='Dashboard' />
      <span>
        <Box Heading='Total leaves' Number={listLength} />
        <Box
          Heading='Pending leaves'
          Number={
            leaveList.filter((item) => !item.approved && !item.rejected).length
          }
        />
        <Box
          Heading='Approved leaves'
          Number={leaveList.filter((item) => item.approved === true).length}
        />
        <Box
          Heading='Rejected leaves'
          Number={leaveList.filter((item) => item.rejected === true).length}
        />
      </span>
    </div>
  );
};

export default Dashboard;
