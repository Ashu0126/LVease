import { Route, Routes } from "react-router-dom";
import Dashboard from "../Views/Dashboard/Dashboard";
import LeaveForm from "../Views/LeaveForm/LeaveForm";
import LeaveList from "../Views/LeaveList/LeaveList";
import Approved from "../Views/Approved/Approved";
import Rejected from "../Views/Rejected/Rejected";

const Main = () => {
  return (
    <div className='Main'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/new-leave' element={<LeaveForm />} />
        <Route path='/leave' element={<LeaveList />} />
        <Route path='/approved-leaves' element={<Approved />} />
        <Route path='/rejected-leaves' element={<Rejected />} />
      </Routes>
    </div>
  );
};

export default Main;
