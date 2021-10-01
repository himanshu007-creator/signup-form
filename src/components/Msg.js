import React from "react";
import "../index.css";
const Msg = (props) => {
  const close = (e) => {
    var x = e.target.parentNode;
    x.style.visibility = "hidden";
  };
  const message = (props, e) => {
    var tgt = e.target.parentNode;
    if (props.dsc === "hdn") {
      return "hdn";
    }
    if (props.dsc === "com") {
      console.log(tgt);
      return "haha";
    }
  };
  return (
    <div className={message} id="msg">
      {/* {props.dsc} */}
      <div onClick={close} id="cross">
        ❌
      </div>
    </div>
  );
};
export const ErrMsg = (props) => {
  const close = (e) => {
    var x = e.target.parentNode;
    x.style.visibility = "hidden";
  };

  return (
    <div id="errmsg">
      Form is not filled correctly
      <div onClick={close} id="cross">
        ❌
      </div>
    </div>
  );
};
export const ScsMsg = (props) => {
  const close = (e) => {
    var x = e.target.parentNode;
    x.style.visibility = "hidden";
  };

  return (
    <div id="scsmsg">
      Form is not filled correctly
      <div onClick={close} id="cross">
        ❌
      </div>
    </div>
  );
};

export default Msg;
