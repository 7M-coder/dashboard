import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Header />
      <Content />
    </>
  );
}

export default App;
