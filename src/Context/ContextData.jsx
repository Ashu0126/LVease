import { useState } from "react";
import UserContext from "./UserContext";

const ContextData = (props) => {
  const [form, setForm] = useState({
    ename: "",
    from: "",
    to: "",
    type: "",
    reason: "",
    approved: false,
    rejected: false,
  });

  const [leaveList, updateLeaveList] = useState([]);

  const contextValue = {
    form,
    setForm,
    leaveList,
    updateLeaveList,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default ContextData;
