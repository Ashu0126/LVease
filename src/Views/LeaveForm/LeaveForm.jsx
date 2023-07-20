import { useContext } from "react";
import Heading from "../../components/Heading/Heading";
import UserContext from "../../Context/UserContext";
import "./LeaveForm.css";

const LeaveForm = () => {
  const { form, setForm, leaveList, updateLeaveList } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validForm()) {
      updateLeaveList([...leaveList, form]);
      setForm({ ename: "", from: "", to: "", type: "", reason: "" });
    } else {
      alert("Enter the details!!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      approved: false,
      rejected: false,
    }));
  };

  const validForm = () => {
    return form.ename && form.type && form.from && form.to && form.reason;
  };

  return (
    <div className='LeaveForm'>
      <Heading text='New leave' />
      <span>
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <label htmlFor='ename'>Employee's Name</label>
            <input
              type='text'
              name='ename'
              value={form.ename}
              onChange={handleChange}
            />
          </div>
          <div id='time' className='input'>
            <div>
              <label htmlFor='from'>From</label>
              <input
                type='date'
                name='from'
                value={form.from}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='to'>To</label>
              <input
                type='date'
                name='to'
                value={form.to}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='input'>
            <label htmlFor='type'>Leave Type</label>
            <select name='type' value={form.type} onChange={handleChange}>
              <option value=''></option>
              <option value='casual'>casual</option>
              <option value='sick'>sick</option>
            </select>
          </div>
          <div className='input'>
            <label htmlFor='reason'>Reason</label>
            <textarea
              rows={4}
              name='reason'
              value={form.reason}
              onChange={handleChange}
            />
          </div>
          <div className='btn-group'>
            <button className='submit' type='submit'>
              Submit
            </button>
            <button className='reset' type='reset'>
              Reset
            </button>
          </div>
        </form>
      </span>
    </div>
  );
};

export default LeaveForm;
