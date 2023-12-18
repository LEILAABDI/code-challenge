// my solution for student generator is here
function determineGrade() {
    // Prompt the user for input
    let userMarks = prompt("Enter the student's marks (between 0 and 100):");

    // Convert the input to a number
    userMarks = parseFloat(userMarks);

    // Check if the input is a valid number
    if (isNaN(userMarks) || userMarks < 0 || userMarks > 100) {
        console.log("Invalid input. Please enter a valid number between 0 and 100.");
        return;
    }

    // Determine the grade based on the specified ranges
    let grade;
    if (userMarks > 79) {
        grade = 'A';
    } else if (userMarks >= 60 && userMarks <= 79) {
        grade = 'B';
    } else if (userMarks >= 50 && userMarks <= 59) {
        grade = 'C';
    } else if (userMarks >= 40 && userMarks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade
    console.log(`The student's grade is: ${grade}`);
}

// Call the function
determineGrade();