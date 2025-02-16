import React from "react";
import "./Navigation.module.css";

function Navigation() {
  return (
    <nav>
      <div className="logo">
        <img src="./images/Frame.png" alt="" />
      </div>
      <ul className="nav-list ">
        <li className="font-bold hover:cursor-pointer">Home</li>
        <li className="font-bold hover:cursor-pointer">About</li>
        <li className="text-red-700 font-bold hover:cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
