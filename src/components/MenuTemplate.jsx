import { Link } from "react-router-dom";
import { Accordion, Button } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function WeaponsMenu() {
  return (
    <div>
      <div className="accordion">
        <Accordion
          sx={{
            backgroundColor: "#fbeaeb",
            marginBottom: ".25rem",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Insert title here</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"} variant={"body2"}>
              <ul>
                <Button>
                  <li>
                    <Link
                    //   to="../board_information/weapons/M249_Saw"
                    //   onClick={() => {
                    //     window.scroll(0, 0);
                    //   }} // Demo of how to scroll to top of page on click
                    >
                      Insert title here
                    </Link>
                  </li>
                </Button>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default WeaponsMenu;
