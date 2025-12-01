// Quiz quess array
const quizquess = [
    { ques: "What is the capital of India?", ans: "new delhi" },
    { ques: "Who is known as the father of computers?", ans: "charles babbage" },
    { ques: "What is the largest planet in our solar system?", ans: "jupiter" },
    { ques: "Which language is used to style web pages?", ans: "css" },
    { ques: "How many days are there in a leap year?", ans: "366" },
    { ques: "Which gas do plants absorb during photosynthesis?", ans: "carbon dioxide" },
    { ques: "How many continents are there in the world?", ans: "7" },
    { ques: "Who wrote the play 'Romeo and Juliet'?", ans: "william shakespeare" },
    { ques: "What is the boiling point of water in Celsius?", ans: "100" },
    { ques: "Which device is used to store permanent data in a computer?", ans: "hard disk" },
];

// Function to run the quiz
function runquiz() {
    let score = 0;

    for (let i = 0; i < quizquess.length; i++) {
        let userans = prompt(quizquess[i].ques);

        // Normalize input
        userans = userans.toLowerCase().trim();

        // Check the ans
        if (userans === quizquess[i].ans) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! \nThe correct ans is: " + quizquess[i].ans);
        }
    }

    // Final score
    alert("Quiz Finished!\nYour Final Score: " + score + "/" + quizquess.length);
}

//  Start the quiz
runquiz();
