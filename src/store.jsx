import { configureStore } from "@reduxjs/toolkit";
import trainerSice from "./trainerSlice";

const store = configureStore({
  reducer: {
    trainer: trainerSice,
  },
});

export { store };
