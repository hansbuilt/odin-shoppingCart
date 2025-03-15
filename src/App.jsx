import { useState } from "react";

import Homepage from "./pages/Homepage";
import Category1Page from "./pages/Category1Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage></Homepage>
    </>
  );
}

export default App;
