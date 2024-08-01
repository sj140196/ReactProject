import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';

import IRequest from './IRequest';
import Status from './Status';
import ManagerHierarchyForm from './ManagerHierarchyForm';
import HierarchyTree from './HierarchyTree';
import './App.css'
import Signup from './SignUp';
import Authentication from './Authentication';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/home" element={<Home />}>
            <Route path="employee-form" element={<EmployeeForm />} />
            <Route path="employee-list" element={<EmployeeList />} />
            <Route path="employee-details" element={<EmployeeDetails />} />
            <Route path="request" element={<IRequest />} />
            <Route path="status" element={<Status />} />
            <Route path="manager-hierarchy-form" element={<ManagerHierarchyForm />} />
            <Route path="hierarchy-tree" element={<HierarchyTree />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
