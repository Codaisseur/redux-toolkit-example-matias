import LightSwitch from "../components/LightSwitch";
import Radio from "../components/Radio";
import Thermostat from "../components/Thermostat";

import { useSelector } from "react-redux";
import { totalPower } from "../store/dashboard/selectors";

const Dashboard = () => {
  const consumption = useSelector(totalPower);
  return (
    <div style={{ paddingTop: 20 }}>
      <h1>Dashboard</h1>
      <h2>Current power consumption: {consumption}</h2>
      <div style={{ border: "2px solid black", paddingBottom: 20 }}>
        <h3>Light Control</h3>
        <LightSwitch />
      </div>
      <div
        style={{
          border: "solid black",
          borderWidth: "0px 2px 2px 2px",
          paddingBottom: 20,
        }}
      >
        <Radio />
      </div>
      <div
        style={{
          border: "solid black",
          borderWidth: "0px 2px 2px 2px",
          paddingBottom: 20,
        }}
      >
        <Thermostat />
      </div>
    </div>
  );
};

export default Dashboard;
