import { Button } from "@mui/material";

export default function Flashcard() {
  const answer = document.getElementsByClassName("answer");

  function hideAnswer() {
    for (let i = 0; i < answer.length; i++) {
      answer[i].style.visibility = "hidden";
    }
  }

  function showAnswer() {
    for (let i = 0; i < answer.length; i++) {
      answer[i].style.visibility = "visible";
    }
  }

  return (
    <div>
      <Button onClick={hideAnswer} variant="contained">
        Hide Answer
      </Button>
      <Button onClick={showAnswer} variant="contained">
        Show Answer
      </Button>
    </div>
  );
}
