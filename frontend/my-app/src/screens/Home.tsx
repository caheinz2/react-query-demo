import React from "react";

type Props = {
  setShowProfile: (newVal: boolean) => void;
  setShowProducts: (newVal: boolean) => void;
};
export function HomeScreen(_props: Props) {
  return (
    <>
      <div className="App-section">
        <button
          className="App-button"
          onClick={() => {
            _props.setShowProfile(true);
          }}
        >
          View Profile
        </button>
      </div>
      <div className="App-section">
        <button
          className="App-button"
          onClick={() => _props.setShowProducts(true)}
        >
          View Products
        </button>
      </div>
    </>
  );
}
