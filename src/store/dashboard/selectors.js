import { powerCons } from "../../constants";

export const totalPower = ({ dashboard }) => {
  const lampPower = dashboard.lamps.reduce(
    (acc, l) => (l.power ? acc + powerCons["lamps"] : acc),
    0
  );

  const radioPower = dashboard.radio.power ? powerCons["radio"] : 0;

  return lampPower + radioPower + powerCons["thermo"](dashboard.thermostat);
};
