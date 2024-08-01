import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import hierarchySlice from './hierarchySlice';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    hierarchy:hierarchySlice,
  },
});
