import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const HierarchyTree = () => {
  const hierarchy = useSelector((state) => state.employees.hierarchy);

  const renderTree = (levels) => {
    return (
      <ul>
        {levels.map((level, index) => (
          <li key={index}>
            {level}
            {index < levels.length - 1 && (
              <ul>
                {levels.slice(index + 1).map((subLevel, subIndex) => (
                  <li key={subIndex}>{subLevel}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container mt-5">
      <h2>Manager Hierarchy</h2>
      {hierarchy.length ? renderTree(hierarchy) : <p>No hierarchy available</p>}
    </div>
  );
};

export default HierarchyTree;
