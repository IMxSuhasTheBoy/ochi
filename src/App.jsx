// import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import About from "./components/About";
import EyesOne from "./components/EyesOne";

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <EyesOne />
    </div>
  );
}

export default App;
