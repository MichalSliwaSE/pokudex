import "./App.css";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <h2>
          <Navbar />
        </h2>
        <section id="core-concepts">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
