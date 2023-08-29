import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import WeaponRoutes from "./routes/WeaponRoutes";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        {WeaponRoutes}
      </Routes>
    </>
  );
}

export default App;
