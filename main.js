//generate the fortune for the ball
let answers = [
	//array of fortunes
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes - definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'Yes',
	'Signs point to yes',
	"Don't count on it",
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful',
	'Reply hazy, try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Focus! Ask again',
	"I don't think so",
	'Cannot predict now'
];

window.onload = function() {
	let eight = document.getElementById('eight');
	let answer = document.getElementById('answer');
	let eightball = document.getElementById('eight-ball');
	let question = document.getElementById('question');

	eightball.addEventListener('click', function() {
		if (question.value.length < 1) {
			alert('You must ask something!!');
		} else {
			//get a random fortune message message
			shake();

			//call the fortune function to get your fortune only after 2sec
			setTimeout(function() {
				eight.innerText = '';
				let num = Math.floor(Math.random() * Math.floor(answers.length));
				answer.innerText = answers[num];
			}, 2000);
		}
	});
};

function shake() {
	let eightBall = document.getElementById('eight-ball');
	let messageText = document.getElementById('eight');

	//remove previous message if it exists
	if (messageText != null) {
		messageText.parentNode.removeChild(messageText);
	}

	//Make the ball shake by adding the css class
	eightBall.classList.add('shake');

	//Remove the shake class after it stops shaking
	setTimeout(function() {
		eightBall.classList.remove('shake');
	}, 2000);
}
