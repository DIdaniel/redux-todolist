import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddActivity = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [data, setData] = useState({
    name: "",
    duration: "",
  });

  const handleChange = (e) => {
    e.persist();
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const AddActivity = () => {
    dispatch({
      type: "CREATE_ACTIVITY",
      payload: {
        name: data.name,
        duration: data.duration,
      },
    });
  };

  return (
    <div className={"add"}>
      <div className="input-section">
        <p>Activity:</p>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name={"name"}
          placeholder={"Activity Name"}
        />
      </div>

      <div className="input-section">
        <p>Duration:</p>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name={"duration"}
          placeholder={"Activity Name"}
        />
      </div>

      <button onClick={AddActivity}>Add Activity</button>
    </div>
  );
};

export default AddActivity;
