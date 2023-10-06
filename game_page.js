// Retrieve player names from local storage
player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

// Initialize player scores to zero
player1Score = 0;
player2Score = 0;

// Display player names and scores on the HTML page
document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

// Set initial turn information in HTML
document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

// Function to handle sending a word
function send() {
    // Get the word from the input field and convert it to lowercase
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();

    // Extract characters from the word
    charAt1 = word.charAt(1);
    lenghtDivide2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(lenghtDivide2);
    lenghtMinus1 = word.length - 1;
    charAt3 = word.charAt(lenghtMinus1);

    // Replace characters in the word with underscores
    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");

    // Create HTML elements for displaying the modified word, input field, and check button
    questionWord = "<h4 id='wordDisplay'> Word: " + removeCharAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    // Combine the HTML elements and display them on the HTML page
    row = questionWord + input_box + checkButton;
    document.getElementById("output").innerHTML = row;

    // Clear the input field for the next player
    document.getElementById("word").value = "";
}

// Initialize turn information
questionTurn = "player1";
answerTurn = "player2";

// Function to check the answer
function check() {
    // Get the answer from the input field and convert it to lowercase
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();

    // Check if the answer matches the word
    if (answer == word) {
        // If correct, update the score of the current player
        if (answerTurn == "player1") {
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        } else {
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }

    // Toggle question and answer turns
    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player2Name;
    } else {
        questionTurn = "player1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player1Name;
    }

    if (answerTurn == "player1") {
        answerTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player2Name;
    } else {
        answerTurn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player1Name;
    }

    // Clear the output area for the next player's turn
    document.getElementById("output").innerHTML = "";
}
