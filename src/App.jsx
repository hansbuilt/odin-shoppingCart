import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Homepage></Homepage>
      <Footer></Footer>
    </>
  );
}

export default App;
