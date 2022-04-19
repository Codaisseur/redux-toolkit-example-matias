export const powerCons = {
  lamps: 25,
  radio: 25,
  thermo: (temp) => (temp - 20 > 0 ? (temp - 20) * 10 : 0),
};
