import { useSelector, useDispatch } from "react-redux";
import { adjustTemp } from "../store/dashboard/slice";

const Thermostat = () => {
  const thermoState = useSelector((state) => state.dashboard.thermostat);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Thermostat</h3>
      <h4>Current Temperature: {thermoState}</h4>
      <input
        type="range"
        min={0}
        max={30}
        value={thermoState}
        onChange={(e) => dispatch(adjustTemp(Number(e.target.value)))}
      />
    </div>
  );
};

export default Thermostat;
