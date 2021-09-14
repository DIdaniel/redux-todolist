import React, { useState } from "react";
import Activity from "./Activity";
import { useSelector } from "react-redux";
import AddActivity from "./AddActivity";

const Workouts = () => {
  const allActivities = useSelector((state) => state.activities);
  const [add, setAdd] = useState(false);

  // console.log(allActivities);

  return (
    <div className={"workouts-wrapper"}>
      <h2>My Workouts</h2>
      <button onClick={() => setAdd(!add)}>Add ACTIVITY</button>
      {add && <AddActivity />}
      {allActivities.map((activity) => {
        console.log(activity);
        return (
          <Activity
            key={activity.id}
            id={activity.id}
            name={activity.name}
            duration={activity.duration}
          />
        );
      })}
    </div>
  );
};

export default Workouts;
