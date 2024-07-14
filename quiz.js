// Function Declaration
function checkAnswer() {
    // Correct Answer
    const correctAnswer = "4";

    // Retrieve the User's Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer is selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }
    
    const userAnswer = selectedOption.value;

    // Compare the User's Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
