import { createSlice } from "@reduxjs/toolkit";

export interface NotificationState {
  isShowNotify: boolean;
}

const initialState: NotificationState = {
  isShowNotify: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    turnOnNotification: (state) => {
      state.isShowNotify = true;
    },
    turnOffNotification: (state) => {
      state.isShowNotify = false;
    },
  },
});

export const { turnOnNotification, turnOffNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
