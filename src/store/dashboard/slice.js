import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lamps: [
    { id: 1, power: false },
    { id: 2, power: true },
    { id: 3, power: false },
    { id: 4, power: false },
  ],
  radio: { genre: "classic rock", power: true },
  thermostat: 20,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    onOff: (state, action) => {
      const updatedLamps = state.lamps.map((l) =>
        l.id === action.payload ? { ...l, power: !l.power } : l
      );
      state.lamps = updatedLamps;
    },
    radioToggle: (state) => {
      state.radio.power = !state.radio.power;
    },
    changeStation: (state, { payload }) => {
      state.radio.genre = payload;
    },
    adjustTemp: (state, { payload }) => {
      state.thermostat = payload;
    },
  },
});

export const { onOff, radioToggle, changeStation, adjustTemp } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
