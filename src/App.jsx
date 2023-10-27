import { Routes } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import WeaponRoutes from "./routes/WeaponRoutes";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {AdminRoutes}
        {WeaponRoutes}
      </Routes>
    </>
  );
}

export default App;
