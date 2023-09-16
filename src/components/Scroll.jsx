import { useEffect, useRef } from "react";

function Scroll() {
  // Use a ref to track if the initial setup has already been done
  const initialSetupDone = useRef(false);

  useEffect(() => {
    // Counter to generate unique IDs
    let questionCounter = 0;

    // Get all .question elements excluding the button
    const questionElements = document.querySelectorAll(".question:not(.home)");

    // Get the .sidebar element
    const sidebarElement = document.querySelector(".sidebar");

    // Create a mapping between IDs and question elements
    const questionIdToElementMap = new Map();

    // Check if the .sidebar element exists
    if (sidebarElement) {
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

        // Create a link in the sidebar that scrolls to the question
        const questionLink = document.createElement("a");
        questionLink.href = `#${questionId}`;
        questionLink.textContent = `Question ${questionCounter}`;
        sidebarElement.appendChild(questionLink);

        // Map the ID to the question element
        questionIdToElementMap.set(questionId, questionElement);
      });
    }

    // Add smooth scrolling behavior to the links
    const sidebarLinks = sidebarElement.querySelectorAll("a");
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const questionId = link.getAttribute("href").substring(1);
        const questionElement = questionIdToElementMap.get(questionId);
        if (questionElement) {
          questionElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Mark the initial setup as done
    initialSetupDone.current = true;
  }, []); // Empty dependency array ensures this runs once on component mount

  // Return a cleanup function to remove the appended elements when the component unmounts
  useEffect(() => {
    return () => {
      // Check if the initial setup has been done before cleaning up
      if (initialSetupDone.current) {
        // Get all .question elements
        const questionElements = document.querySelectorAll(".question");

        // Get the .sidebar element
        const sidebarElement = document.querySelector(".sidebar");

        // Loop through each .question element
        questionElements.forEach((questionElement) => {
          // Remove the unique ID class from the .question element
          const questionId = Array.from(questionElement.classList).find(
            (className) => className.startsWith("question-")
          );
          if (questionId) {
            questionElement.classList.remove(questionId);
          }
        });

        // Remove the appended elements from the .sidebar
        sidebarElement.innerHTML = "";
      }
    };
  }, []);

  // Return any JSX content if needed
  return null;
}

export default Scroll;
