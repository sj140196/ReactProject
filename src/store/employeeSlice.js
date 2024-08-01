import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    list: [],
    selectedEmployee: null,
    hierarchy: [],  // Add this line
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
    selectEmployee: (state, action) => {
      state.selectedEmployee = state.list.find(
        (employee) => employee.employeeId === action.payload
      );
    },
    setHierarchy: (state, action) => {
      state.hierarchy = action.payload; // Add this line
    },
  },
});

export const { addEmployee, selectEmployee, setHierarchy } = employeeSlice.actions;
export default employeeSlice.reducer;
