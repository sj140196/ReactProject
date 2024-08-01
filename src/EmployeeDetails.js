import React from 'react';
import { useSelector } from 'react-redux';

function EmployeeDetails() {
  const selectedEmployee = useSelector((state) => state.employees.selectedEmployee);

  if (!selectedEmployee) {
    return <div className="container"><h2 className="text-center mt-5">No Employee Selected</h2></div>;
  }

  return (
    <div className="container">
      <h2 className="text-center mt-5">Employee Details</h2>
      <dl className="row">
        <dt className="col-sm-3">Employee Name</dt>
        <dd className="col-sm-9">{selectedEmployee.employeeName}</dd>
        <dt className="col-sm-3">Employee ID</dt>
        <dd className="col-sm-9">{selectedEmployee.employeeId}</dd>
        <dt className="col-sm-3">Mobile No</dt>
        <dd className="col-sm-9">{selectedEmployee.mobileNo}</dd>
        <dt className="col-sm-3">Email</dt>
        <dd className="col-sm-9">{selectedEmployee.email}</dd>
        <dt className="col-sm-3">Address</dt>
        <dd className="col-sm-9">{selectedEmployee.address}</dd>
        <dt className="col-sm-3">Blood Group</dt>
        <dd className="col-sm-9">{selectedEmployee.bloodGroup}</dd>
        <dt className="col-sm-3">Gender</dt>
        <dd className="col-sm-9">{selectedEmployee.gender}</dd>
        <dt className="col-sm-3">Immediate Manager</dt>
        <dd className="col-sm-9">{selectedEmployee.immediateManager}</dd>
      </dl>
    </div>
  );
}

export default EmployeeDetails;
