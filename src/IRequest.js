import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const IRequest = () => {
  const [requestType, setRequestType] = useState('');
  const [immediateManager, setImmediateManager] = useState('');
  const [reason, setReason] = useState('');

  const navigate = useNavigate();
  const employees = useSelector((state) => state.employees.list);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here (e.g., dispatch an action or make an API call)
    const requestData = { requestType, immediateManager, reason };
    console.log('Request Data:', requestData); // Log the data before navigation

    // Navigate to the Status page with state
    navigate('/home/status', {
      state: requestData,
    });
  };

  return (
    <div className="container mt-5">
      <h2>Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="requestType" className="form-label">Request Type</label>
          <select
            id="requestType"
            className="form-select"
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
            required
          >
            <option value="">Select Request Type</option>
            <option value="Leave">Leave</option>
            <option value="Expense">Expense</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="immediateManager" className="form-label">Immediate Manager</label>
          <select
            id="immediateManager"
            className="form-select"
            value={immediateManager}
            onChange={(e) => setImmediateManager(e.target.value)}
            required
          >
            <option value="">Select Immediate Manager</option>
            {employees.map((employee) => (
              <option key={employee.employeeId} value={employee.immediateManager}>
                {employee.immediateManager}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">Reason</label>
          <textarea
            id="reason"
            className="form-control"
            rows="3"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default IRequest;
