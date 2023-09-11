import { useEffect } from "react";

function Scroll() {
  useEffect(() => {
    // Counter to generate unique IDs
    let questionCounter = 0;

    // Get all .question elements
    const questionElements = document.querySelectorAll(".question");

    // Get the .sidebar element
    const sidebarElement = document.querySelector(".sidebar");

    // Loop through each .question element
    questionElements.forEach((questionElement) => {
      // Increment the counter to generate a unique ID
      questionCounter++;

      // Get the content of .question
      const questionContent = questionElement.textContent;

      // Create a unique ID for the question element
      const questionId = `question-${questionCounter}`;

      // Create a new element to hold the question content
      const questionContentElement = document.createElement("div");
      questionContentElement.textContent = questionContent;

      // Set the unique ID as a class on the .question element
      questionElement.classList.add(questionId);

      // Append the question content to the .sidebar
      sidebarElement.appendChild(questionContentElement);
    });
  }, []); // Empty dependency array ensures this runs once on component mount
}

export default Scroll;
