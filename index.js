const questionObj = {
    category: 'Food & Drink',
    id: 'qa-1',
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question: "How many piece of bun are in a Mcdonald's Big Mac?",


};

//Destructing the object


const {
    correctAnswer,
    options,
    question,
} = questionObj;

let score = 0;



//Accessing all the elements
const questionEl = document.getElementById(
    'question'
);
const optionsEl = document.getElementById(
    'options'
);

const scoreEl = document.getElementById(
    'score'
);

// Manipulating the dom
// setting questiontext content
questionEl.textContent = question;
const shuffleOptions = shuffleOptions(options);

//Populating the Optons div with the buttons

shuffledOptions.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    optionEl.appendChild(btn);

    //Event handling on the button
    btn.addEventListener('click', () => {

        if (opt === correctAnswer) {
            score++
        } else {
            score = score - 0.25;
        }
        console.log(score);
        scoreEl.textContent = `Score: ${score}`;
        questionEl.textContent = "Quiz Completed!!";
        optionsEl.textContent = '';

    });
});
//Shuffling the Options
function shuffleOptions(options) {
    for (leti = options.length - 1; i > 0; i--) {
        const j = math.floor(math.random() * i + 1);
        [options[i], options[j]] = [
            options[j],
            options[i],
        ];
    }
    return options;

}