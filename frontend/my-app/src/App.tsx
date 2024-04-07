import React, { useState } from "react";
import "./App.css";
import { HomeScreen } from "./screens/Home";
import { ProfileScreen } from "./screens/Profile";
import { ProductScreen } from "./screens/Product";
import { Routes } from "./types/Routes";

function App() {
  const [activeRoute, setActiveRoute] = useState(Routes.HOME);

  return (
    <div className="App">
      <header className="App-header">
        {activeRoute === Routes.PROFILE && (
          <ProfileScreen setActiveRoute={setActiveRoute}></ProfileScreen>
        )}
        {activeRoute === Routes.PRODUCT && (
          <ProductScreen setActiveRoute={setActiveRoute}></ProductScreen>
        )}
        {activeRoute === Routes.HOME && (
          <HomeScreen setActiveRoute={setActiveRoute}></HomeScreen>
        )}
      </header>
    </div>
  );
}

export default App;
