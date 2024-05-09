// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import "./App.css"
const App: React.FC = () => {
  return (
    <div>
      <Header />
      {/* <Projects /> */}
      <Profile/>
      {/* Add more sections/components as needed */}
      <Footer/>
    </div>
  );
};

export default App;