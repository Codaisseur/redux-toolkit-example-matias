import { useSelector, useDispatch } from "react-redux";
import { onOff } from "../store/dashboard/slice";

const LightSwitch = () => {
  const dispatch = useDispatch();

  const lampState = useSelector((state) => state.dashboard.lamps);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {lampState.map((l, i) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 30,
          }}
        >
          <label>Lamp {i + 1}</label>
          <input
            type="checkbox"
            style={{ marginLeft: 20 }}
            checked={l.power}
            onClick={() => dispatch(onOff(l.id))}
          />
        </div>
      ))}
    </div>
  );
};

export default LightSwitch;
