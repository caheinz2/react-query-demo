import React, { useState } from "react";
import "./App.css";
import { HomeScreen } from "./screens/Home";
import { ProfileScreen } from "./screens/Profile";
import { ProductScreen } from "./screens/Product";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const showHome = !showProfile && !showProducts;

  return (
    <div className="App">
      <header className="App-header">
        {showProfile && (
          <ProfileScreen setShowProfile={setShowProfile}></ProfileScreen>
        )}
        {showProducts && (
          <ProductScreen setShowProducts={setShowProducts}></ProductScreen>
        )}
        {showHome && (
          <HomeScreen
            setShowProfile={setShowProfile}
            setShowProducts={setShowProducts}
          ></HomeScreen>
        )}
      </header>
    </div>
  );
}

export default App;
