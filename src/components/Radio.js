import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { radioToggle, changeStation } from "../store/dashboard/slice";

const Radio = () => {
  const radioState = useSelector((state) => state.dashboard.radio);
  const [playing, setPlaying] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Radio controls</h3>
      <div>
        <label>Power</label>
        <input
          type="checkbox"
          checked={radioState.power}
          onClick={() => dispatch(radioToggle())}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <label>Now Playing: {"  "}</label>
        <b>{radioState.genre}</b>
      </div>
      <div style={{ marginTop: 10 }}>
        <input
          type="text"
          value={playing}
          onChange={(e) => setPlaying(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(changeStation(playing));
            setPlaying("");
          }}
        >
          Change Station
        </button>
      </div>
    </div>
  );
};

export default Radio;
