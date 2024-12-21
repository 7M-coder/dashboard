import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-slate-100">
        <Nav />
        <Header />
        <Content />
      </main>
    </>
  );
}

export default App;
