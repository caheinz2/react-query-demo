import React, { useState } from "react";
import "./App.css";
import { HomeScreen } from "./screens/Home";
import { ProfileScreen } from "./screens/Profile";
import { ProductScreen } from "./screens/Product";
import { Routes } from "./types/routes";
import { Button } from "react-bootstrap";

function App() {
  const [activeRoute, setActiveRoute] = useState(Routes.HOME);

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="secondary" onClick={() => setActiveRoute(Routes.HOME)}>
          To Home Screen
        </Button>
      </header>
      <div className="App-body">
        {activeRoute === Routes.PROFILE && <ProfileScreen></ProfileScreen>}
        {activeRoute === Routes.PRODUCT && <ProductScreen></ProductScreen>}
        {activeRoute === Routes.HOME && (
          <HomeScreen setActiveRoute={setActiveRoute}></HomeScreen>
        )}
      </div>
    </div>
  );
}

export default App;
