import { configureStore } from "@reduxjs/toolkit";
import passportReducer from "./passportSlice"

export const store = configureStore({
  reducer: {
    passport: passportReducer,
  },
});

// Type helpers for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
