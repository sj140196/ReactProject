import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmployee } from './store/employeeSlice';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employees.list);

  const handleRowClick = (employeeId) => {
    dispatch(selectEmployee(employeeId));
    navigate('/home/employee-details');
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Employee List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.employeeId}
              onClick={() => handleRowClick(employee.employeeId)}
              style={{ cursor: 'pointer' }}
            >
              <td>{employee.employeeName}</td>
              <td>{employee.employeeId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
