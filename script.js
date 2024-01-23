document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Define correct answers for each question
    var correctAnswers = [
        { question: 'firstQuestion', answer: 'paris' },
        { question: 'secondQuestion', answer: 'mars' },
        { question: 'thirdQuestion', answer: 'bluewhale' }
    ];

    // Get form values
    var selectedValues = [];
    var score = 0;

    // Function to validate if a radio button is selected
    function validateRadioButton(questionName) {
        var radioButton = document.querySelector('input[name="' + questionName + '"]:checked');
        return radioButton ? radioButton.value : null;
    }

    var firstQuestion = validateRadioButton('first-question');
    var secondQuestion = validateRadioButton('second-question');
    var thirdQuestion = validateRadioButton('third-question');

    selectedValues.push(firstQuestion);
    selectedValues.push(secondQuestion);
    selectedValues.push(thirdQuestion);

    correctAnswers.forEach(function (item) {
        var correctAnswer = item.answer;
        var selectedValue = selectedValues.find(function (value) {
            return value === correctAnswer;
        });
        if (selectedValue !== undefined) {
            // Increment the score only if the selected value is found
            score++;
        }
    });

    //To clear the form after submitting
    var radioButtons1 = document.getElementsByName("first-question");
    for (var i = 0; i < radioButtons1.length; i++) {
        radioButtons1[i].checked = false;
    }

    var radioButtons2 = document.getElementsByName("second-question");
    for (var i = 0; i < radioButtons2.length; i++) {
        radioButtons2[i].checked = false;
    }

    var radioButtons3 = document.getElementsByName("third-question");
    for (var i = 0; i < radioButtons3.length; i++) {
        radioButtons3[i].checked = false;
    }
    //Hide quiz
    var quizElement = document.getElementById("quiz-card");
    quizElement.style.display = "none"; // Hide the element

    //Show result
    var scoreElement = document.getElementById("score-card");
    scoreElement.style.display = "block"; // Show the element

    // Display the score
    // Update the score inside the <p> tag
    document.querySelector('.score').textContent = 'Your Score: ' + score;
});
