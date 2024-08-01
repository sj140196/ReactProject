import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setHierarchy } from './store/employeeSlice';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ManagerHierarchyForm() {
  const [level1, setLevel1] = useState('');
  const [level2, setLevel2] = useState('');
  const [level3, setLevel3] = useState('');
  const [level4, setLevel4] = useState('');
  const [level5, setLevel5] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();  // Add useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    const hierarchy = [level1, level2, level3, level4, level5].filter(Boolean);  // Filter out empty levels
    dispatch(setHierarchy(hierarchy));  // Dispatch the hierarchy to the store

    // Navigate to the HierarchyTree page
    navigate('/home/hierarchy-tree');
  };

  return (
    <div className="container mt-5">
      <h2>Manager Hierarchy Form</h2>
      <form onSubmit={handleSubmit}>
        {[level1, level2, level3, level4, level5].map((value, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">Level {index + 1}</label>
            <input
              type="text"
              className="form-control"
              value={value}
              onChange={(e) => {
                if (index === 0) setLevel1(e.target.value);
                else if (index === 1) setLevel2(e.target.value);
                else if (index === 2) setLevel3(e.target.value);
                else if (index === 3) setLevel4(e.target.value);
                else setLevel5(e.target.value);
              }}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ManagerHierarchyForm;
