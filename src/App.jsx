import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

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
