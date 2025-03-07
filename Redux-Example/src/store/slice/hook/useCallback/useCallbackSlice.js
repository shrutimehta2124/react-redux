import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  width: window.innerWidth, // Example3 needs window width
  count: 0,                 // Example1 might need a counter
  inputValue: "",           // Example2 might handle input fields
  theme: "light",           // Example4 could be a theme switcher
  isVisible: true,          // Example5 might toggle visibility
  items: [],                // Example6 could manage an array
  value: 0,                 // Example7 might need numerical updates
  isActive: false,          // Example8 could handle active/inactive states
  text: "Hello",            // Example9 might update a text
  user: null,               // Example10 might fetch user data
};

const useCallbackSlice = createSlice({
  name: "useCallback",
  initialState,
  reducers: {
    setWidth: (state, action) => { state.width = action.payload; },
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    setInputValue: (state, action) => { state.inputValue = action.payload; },
    toggleTheme: (state) => { state.theme = state.theme === "light" ? "dark" : "light"; },
    toggleVisibility: (state) => { state.isVisible = !state.isVisible; },
    addItem: (state, action) => { state.items.push(action.payload); },
    updateValue: (state, action) => { state.value = action.payload; },
    toggleActive: (state) => { state.isActive = !state.isActive; },
    setText: (state, action) => { state.text = action.payload; },
    setUser: (state, action) => { state.user = action.payload; },
  },
});

export const { 
  setWidth, increment, decrement, setInputValue, toggleTheme, 
  toggleVisibility, addItem, updateValue, toggleActive, setText, setUser 
} = useCallbackSlice.actions;

export default useCallbackSlice.reducer;
