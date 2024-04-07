import React from "react";
import { Routes } from "../types/Routes";

type Props = {
  setActiveRoute: (newVal: Routes) => void;
};
export function HomeScreen(_props: Props) {
  return (
    <>
      <div className="App-section">
        <h1>Welcome back, Caleb</h1>
        <button
          className="App-button"
          onClick={() => {
            _props.setActiveRoute(Routes.PROFILE);
          }}
        >
          View Profile
        </button>
      </div>
      <div className="App-section">
        <h2>Look at these products:</h2>
        <button
          className="App-button"
          onClick={() => _props.setActiveRoute(Routes.PRODUCT)}
        >
          View Products
        </button>
      </div>
    </>
  );
}
