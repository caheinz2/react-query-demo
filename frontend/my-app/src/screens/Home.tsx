import React, { useEffect, useState } from "react";
import { Routes } from "../types/routes";
import { getProfileById } from "../data/api";

type Props = {
  setActiveRoute: (newVal: Routes) => void;
};
export function HomeScreen(_props: Props) {
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfileById(1).then((profile) => {
      setFirstName(profile.firstName);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="App-section">
            <h1>Welcome back, {firstName}</h1>
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
      )}
    </>
  );
}
