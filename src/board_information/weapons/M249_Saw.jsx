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
              <li>
                What is the maximum effective range for the M249 on a
                tripod/area target?
              </li>
            </a>
            <a href="#three">
              <li>Describe the M249.</li>
            </a>
            <a href="#four">
              <li>What is the weight of the M249 of barrel and of tripod?</li>
            </a>
            <a href="#five">
              <li>
                What is the maximum effective range for the M249 on a
                bipod/point target?
              </li>
            </a>
            <a href="#six">
              <li>
                What is the maximum effective range for the M249 on a bipod on
                an area target?
              </li>
            </a>
            <a href="#seven">
              <li>
                What is the maximum effective range for the M249 for grazing
                fire?
              </li>
            </a>
            <a href="#eight">
              <li>What is the tracer burnout range for the M249?</li>
            </a>
            <a href="#nine">
              <li> What is the sustained rate of fire for the M249?</li>
            </a>
            <a href="#ten">
              <li>What is the rapid rate of fire for the M249?</li>
            </a>
            <a href="#eleven">
              <li> What is the cyclic rate of fire for the M249?</li>
            </a>
          </ul>
        </div>
      </div>

      <div className="card" id="one">
        <h2 className="question">What is the maximum range of the M249?</h2>
        <h2 className="answer">3,600 meters</h2>
      </div>
      <div className="card" id="two">
        <h2 className="question">
          What is the maximum effective range for the M249 on a tripod/area
          target.
        </h2>
        <h2 className="answer">1,000 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">Describe the M249.</h2>
        <h2 className="answer">
          5.56 mm gas operated magazine or belt-fed automatic squad weapon.
        </h2>
      </div>
      <div className="card">
        <h2 className="question">
          What is the weight of the M249 of barrel and of tripod?
        </h2>
        <h2 className="answer">
          16.41 pounds of barrel and 33 pounds with the tripod.
        </h2>
      </div>
      <div className="card">
        <h2 className="question">
          What is the maximum effective range for the M249 on a bipod/point
          target?
        </h2>
        <h2 className="answer">600 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">
          What is the maximum effective range for the M249 on a bipod on an area
          target?
        </h2>
        <h2 className="answer">800 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">
          What is the maximum effective range for the M249 for grazing fire?
        </h2>
        <h2 className="answer">600 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">
          What is the tracer burnout range for the M249?
        </h2>
        <h2 className="answer">900 meters</h2>
      </div>
      <div className="card">
        <h2 className="question">
          What is the sustained rate of fire for the M249?
        </h2>
        <h2 className="answer">
          50 rounds per minute, 6 to 9 round burst, every 4 to 5 seconds, every
          10 minutes.
        </h2>
      </div>
      <div className="card">
        <h2 className="question">
          What is the rapid rate of fire for the M249?
        </h2>
        <h2 className="answer">
          100 rounds per minute, 6 to 9 round burst, every 2 to 3 seconds, every
          2 minutes.
        </h2>
      </div>
      <div className="card">
        <h2 className="question">
          What is the cyclic rate of fire for the M249?
        </h2>
        <h2 className="answer">850 rounds per minute continuous burst.</h2>
      </div>
    </div>
  );
}
