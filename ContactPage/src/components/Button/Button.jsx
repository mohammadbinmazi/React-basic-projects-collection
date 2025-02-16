import React from "react";

function Button({ text, icon, bgcolor, Hovercol, Hovercur, onclick }) {
  //   console.log(props);

  return (
    <button
      onClick={onclick}
      className={` ${bgcolor}
     text-white w-200 rounded-sm
    flex  justify-center align-middle items-center justify-items-center gap-1 border-2 border-black text-sm h-12 ${Hovercol} ${Hovercur}`}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
