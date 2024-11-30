import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Header />
    </>
  );
}

export default App;
