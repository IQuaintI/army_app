import Heading from "../../components/Heading";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Flashcard from "../../components/Flashcards";
import Scroll from "../../components/Scroll";
import "../../styles/BoardPages.css";

export function MK19() {
  return (
    <>
      <div>
        <div className="head">
          <Heading title="MK19" subtitle="(TC 3-22.19, TC 3-21.76)" />
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
            <div className="scroll">
              <Scroll />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <h2 className="question">Describe the Mark 19 grenade launcher.</h2>
        <h2 className="answer">
          The Mark 19 is a 40mm, belt-fed, blowback operated, air-cooled,
          crew-served, fully automatic weapon that is designed not to cook off
          and can fire a variety of 40mm grenades.
        </h2>
      </div>
    </>
  );
}

/* 
         <div className="scroll">
          <ul>
            <a href="#1">
              <li>Describe the Mark 19 grenade launcher.</li>
            </a>
            <a href="#2">
              <li>
                When engaging a target and looking through the sights, what
                should the gunner focus on?
              </li>
            </a>
            <a href="#3">
              <li> What type of ammunition does the Mark 19 fire?</li>
            </a>
            <a href="#4">
              <li>
                What is the purpose of the High Velocity Canister Cartridge
                MK-19?
              </li>
            </a>
            <a href="#5">
              <li>
                What distance is a field zero performed when using the Mark 19?
              </li>
            </a>
            <a href="#6">
              <li>What does the term overmatch mean?</li>
            </a>
            <a href="#7">
              <li>How many major components are there in the Mark MK-19?</li>
            </a>
            <a href="#8">
              <li>What is the weight of the MK-19 without a feed-throat?</li>
            </a>
            <a href="#9">
              <li>What is the weight of the MK-19 with the feet-throat?</li>
            </a>
            <a href="#10">
              <li>Define minute of angle.</li>
            </a>
            <a href="#11">
              <li> What are the major components of the MK19?</li>
            </a>
            <a href="#12">
              <li>
                Can the 40 millimeter MK19 ammunition be de-linked and fired
                from the M203 or similar launcher?
              </li>
            </a>
            <a href="#13">
              <li> How is the minute of angle used when zeroing?</li>
            </a>
            <a href="#14">
              <li> How many mils are in a circle?</li>
            </a>
            <a href="#15">
              <li> What is the weight of the MK-19 apparel on tripod?</li>
            </a>
            <a href="#16">
              <li>
                What is the maximum effective range of the MK19 for point
                target?
              </li>
            </a>
            <a href="#17">
              <li>
                What is the maximum effective range of the MK19 for an area
                target?
              </li>
            </a>
            <a href="#18">
              <li> What is the sustained rate of fire for the MK19?</li>
            </a>
            <a href="#19">
              <li> What is the rapid rate of fire for the MK19?</li>
            </a>
            <a href="#20">
              <li> What is the cyclic rate of fire for the MK19?</li>
            </a>
            <a href="#21">
              <li> What is the unique about the MK19 barrel?</li>
            </a>
          </ul>
        </div>
      </div> 

        <div className="card" id="1">
          <h2 className="question">What is the maximum range of the M249?</h2>
          <h2 className="answer">3,600 meters</h2>
        </div>
        <div className="card" id="2">
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
            What is the maximum effective range for the M249 on a bipod on an
            area target?
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
            50 rounds per minute, 6 to 9 round burst, every 4 to 5 seconds,
            every 10 minutes.
          </h2>
        </div>
        <div className="card">
          <h2 className="question">
            What is the rapid rate of fire for the M249?
          </h2>
          <h2 className="answer">
            100 rounds per minute, 6 to 9 round burst, every 2 to 3 seconds,
            every 2 minutes.
          </h2>
        </div>
        <div className="card">
          <h2 className="question">
            What is the cyclic rate of fire for the M249?
          </h2>
          <h2 className="answer">850 rounds per minute continuous burst.</h2>
        </div>
        <div className="card">
          <h2 className="question">
            What is the rapid rate of fire for the M249?
          </h2>
          <h2 className="answer">
            100 rounds per minute, 6 to 9 round burst, every 2 to 3 seconds,
            every 2 minutes.
          </h2>
        </div>
        <div className="card">
          <h2 className="question">
            What is the rapid rate of fire for the M249?
          </h2>
          <h2 className="answer">
            100 rounds per minute, 6 to 9 round burst, every 2 to 3 seconds,
            every 2 minutes.
          </h2>
        </div>
      </div>
    </div>
  );
} */
