import React from "react";
import Ide from "./Ide";

const Question = () => {
  return (
    <div>
      <input style={{ width: "100%" }} />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "650px", height: "120px", padding: "30px" }}>
          <Ide />
        </div>
        <div style={{ width: "650px", height: "120px", padding: "30px" }}>
          <Ide />
        </div>
      </div>
    </div>
  );
};

export default Question;
