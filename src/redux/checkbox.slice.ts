import { createSlice } from "@reduxjs/toolkit";

interface CheckBoxState {
  character: boolean;
  location: boolean;
  episodes: boolean;
}

const initialState: CheckBoxState = {
  character: false,
  location: false,
  episodes: false,
};

export const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    toggleCheckboxCharacter: (state, action) => {
      state.character = action.payload;
    },
    toggleCheckboxLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleCheckboxEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
  },
});

export const {
  toggleCheckboxCharacter,
  toggleCheckboxLocation,
  toggleCheckboxEpisodes,
} = checkboxSlice.actions;

export default checkboxSlice.reducer;
