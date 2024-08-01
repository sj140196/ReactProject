import { createSlice } from '@reduxjs/toolkit';

const hierarchySlice = createSlice({
  name: 'hierarchy',
  initialState: {
    hierarchy: [],  // Initialize as an empty array
  },
  reducers: {
    setHierarchy: (state, action) => {
      state.hierarchy = action.payload;  // Expecting an array
    },
  },
});

export const { setHierarchy } = hierarchySlice.actions;
export default hierarchySlice.reducer;
