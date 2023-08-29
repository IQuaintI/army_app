import { Link } from "react-router-dom";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function WeaponsMenu() {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Weapons</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <ul>
              <li>
                <Link
                  to="../board_information/weapons/M249_Saw"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  M249 SAW
                </Link>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default WeaponsMenu;
