import Heading from "../../components/Heading";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Flashcard from "../../components/Flashcards";
import "../../styles/BoardPages.css";

export function M249_Saw() {
  return (
    <div>
      <div className="head">
        <Heading title="M249 SAW" subtitle="(TC 3-21.76, FM 3-22.)" />
      </div>

      <div className="sidebar">
        <div className="nav">
          <Button variant="outlined" className="home">
            <Link
              to="/ "
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              Home
            </Link>
          </Button>
          <Flashcard />
        </div>

        <div className="scroll">
          <ul>
            <a href="#one">
              <li>What is the maximum range of the M249?</li>
            </a>
            <a href="#two">
              <li>What is the maximum range of the M249?</li>
            </a>
            <li>What is the maximum range of the M249?</li>
            <li>What is the maximum range of the M249?</li>
            <li>What is the maximum range of the M249?</li>
            <li>What is the maximum range of the M249?</li>
            <li>What is the maximum range of the M249?</li>
            <li>What is the maximum range of the M249?</li>
            <li>What is the maximum range of the M249?</li>
            <li>What is the maximum range of the M249?</li>
            <li>What is the maximum range of the M249?</li>
            <li>What is the maximum range of the M249?</li>
          </ul>
        </div>
      </div>

      <div className="card" id="one">
        <h2 className="question">What is the maximum range of the M249?</h2>
        <h2 className="answer">3,600 meters</h2>
      </div>
      <div className="card" id="two">
        <h2 className="question">What is the maximum range of the M249?</h2>
        <h2 className="answer">3,600 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">What is the maximum range of the M249?</h2>
        <h2 className="answer">3,600 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">What is the maximum range of the M249?</h2>
        <h2 className="answer">3,600 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">What is the maximum range of the M249?</h2>
        <h2 className="answer">3,600 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">What is the maximum range of the M249?</h2>
        <h2 className="answer">3,600 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">What is the maximum range of the M249?</h2>
        <h2 className="answer">3,600 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">What is the maximum range of the M249?</h2>
        <h2 className="answer">3,600 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">What is the maximum range of the M249?</h2>
        <h2 className="answer">3,600 meters</h2>
      </div>
    </div>
  );
}
