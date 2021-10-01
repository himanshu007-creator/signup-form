import React from "react";

const Inp = (props) => {
  return (
    <div>
      <input
        type={props.type}
        onChange={props.onChange}
        placeholder={props.dummy}
      />
    </div>
  );
};

export default Inp;
