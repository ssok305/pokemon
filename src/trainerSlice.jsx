import { createSlice } from "@reduxjs/toolkit";

import Ash from "./images/Ash.png";
import Clair from "./images/clair.png";
import Cynthia from "./images/Cynthia.webp";

const trainerSlice = createSlice({
  name: "trainer",
  initialState: [
    {
      name: "Ash ",
      age: 10,
      region: "Kanto",
      hometown: "Pallet Town",
      sprite: Ash,
      id: 1,
    },
    {
      name: "Clair",
      age: 19,
      region: "Johto",
      hometown: "Blackthorn City",
      sprite: Clair,
      id: 2,
    },
    {
      name: "Cynthia",
      age: 33,
      region: "Sinnoh",
      hometown: "Celestic Town",
      sprite: Cynthia,
      id: 3,
    },
  ],
  reducers: {
    handleAdd(state, action) {
      state.push(action.payload);
      console.log(JSON.stringify(state));
    },
    handleReset() {
      return [];
    },
  },
});

export const { handleAdd, handleReset } = trainerSlice.actions;
export default trainerSlice.reducer;
