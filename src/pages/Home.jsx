import "../styles/Home.css";
import WeaponsMenu from "../components/WeaponsMenu";
// import { Navbar } from "./components/Navbar";

function Header() {
  return (
    <div className="header">
      <h1>Army WebStudy</h1>
      <h2>A (Semi) Complete Encyclopedia of Army Trivia</h2>
    </div>
  );
}

export function Home() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <WeaponsMenu />
    </>
  );
}
