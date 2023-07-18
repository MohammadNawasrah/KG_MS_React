import React from "react";

const Failed = props => {
  const msg = "Login Failed";
  console.log(JSON.parse(sessionStorage.getItem("data")));
  return (
    <div>
      <h1>{msg}</h1>
    </div>
  );
};

export default Failed;
