import { configureStore } from "@reduxjs/toolkit";
import notification from "./slices/notification";

export const store = configureStore({
  reducer: {
    notification,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
