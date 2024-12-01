//const fs = require("fs"); // Able to read and write to files
let leaderboardList = document.getElementById("leaderboard--list");

// Submit the text from the input box to be written to a file
function submitInput() {
  let inputBox = document.getElementById("test-input");
  let text = inputBox.innerHTML;

  let filename = "testWrite";
  console.log( readFile(filename));
  writeFile(filename, text);
  console.log( readFile(filename));
}
/*
// Try to read data from the given file
function readFile(filename) {
    fs.writeFile(filename, (err, data) => {
    if(err) {
      console.error(err);
      return;
    }
    console.log("Read file: ");
    return data;
  });
}

// Try writing the given data to the given file
function writeFile(filename, text) {
  fs.writeFile(filename, text, (err) => {
    if(err) {
      console.error(err);
      return;
    }
    console.log("Successfully updated!");
  });
}*/

// Get Scores to put in the leaderboard
function getScores() {
	// TODO: Read scores from a file
	// let readData = readFile("highscores");
	
	let scoreList = [];
	
	// TEMP: List of score maps
	for(let i = 0; i < 5; i++) {
		let newScoreMap = new Map();
		newScoreMap.set('name', "test"+i);
		newScoreMap.set('score', i);
		newScoreMap.set('date', `${i}${i}/${i}${i}/${i}${i}${i}${i}`);
		
		scoreList.push(newScoreMap);
	}
	
	return scoreList;
}

// List the retrieved scores in the leaderboard
function listScores() {
	let scores = getScores();
	
	// From the first to last score,
	for(let i = 0; i < scores.length; i++) {
		// Create a new list item
		let newScore = document.createElement("li");
		newScore.classList.add("leaderboard--score");
		newScore.id = "score" + (i + 1);
		
		// Create each part of the score's display
		let scoreName = document.createElement("h4");
		scoreName.innerHTML = scores[i].get('name');
		
		let scoreScore = document.createElement("h4");
		scoreScore.innerHTML = scores[i].get('score');
		
		let scoreDate = document.createElement("h4");
		scoreDate.innerHTML = scores[i].get('date');
		
		// Connect the created elements
		newScore.appendChild(scoreName);
		newScore.appendChild(scoreScore);
		newScore.appendChild(scoreDate);		
		leaderboardList.appendChild(newScore);
	}
}
