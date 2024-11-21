import { useState } from "react";
import NavBar from "./assets/components/navbar/navbar";
import "./App.css";
import Banner from "./assets/components/banner/banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Banner></Banner>
    </>
  );
}

export default App;
