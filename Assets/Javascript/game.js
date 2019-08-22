// Score variables
var wins = 0;
var losses = 0;
var scoreTotal = 0;

// Crystal variables
var blueCrystal = $("blue_crystal.png");
var orangeCrystal = $("orange_crystal.png");
var pinkCrystal = $("pink_crystal.png");
var purpleCrystal = $("purple_crystal.png");

// Variables for number generator
var min = 19;
var max = 120;

// Execution of first number generator
var targetNumber = getRandomInt(min, max);
$("#target-number").html(targetNumber);

// Function for number generator
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Crystal number variables
var crystalNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var crystalChoiceBlue = crystalCreation(crystalNumber);
var crystalChoiceOrange = crystalCreation(crystalNumber);
var crystalChoicePink = crystalCreation(crystalNumber);
var crystalChoicePurple = crystalCreation(crystalNumber);

// Crystal Array
$("img").on("click", function () {
    var myClass = $(this).attr("id");
    if (myClass === "blue-crystal") {
        var blueCrystal = crystalChoiceBlue;
        blueCrystal = parseInt(blueCrystal);
        scoreTotal += blueCrystal;
        $("#score-number").html(scoreTotal);
    }
    if (myClass === "orange-crystal") {
        var orangeCrystal = crystalChoiceOrange;
        orangeCrystal = parseInt(orangeCrystal);
        scoreTotal += orangeCrystal;
        $("#score-number").html(scoreTotal);
    }
    if (myClass === "pink-crystal") {
        var pinkCrystal = crystalChoicePink;
        pinkCrystal = parseInt(pinkCrystal);
        scoreTotal += pinkCrystal;
        $("#score-number").html(scoreTotal);
    }
    if (myClass === "purple-crystal") {
        var purpleCrystal = crystalChoicePurple;
        purpleCrystal = parseInt(purpleCrystal);
        scoreTotal += purpleCrystal;
        $("#score-number").html(scoreTotal);
    }
    if (scoreTotal > targetNumber) {
        losses++;
        $("#loss-number").html(losses);
        reset();
        targetNumber = getRandomInt(min, max);
        console.log(targetNumber);
        $("#target-number").html(targetNumber);
    }
    if (scoreTotal === targetNumber) {
        wins++;
        $("#win-number").html(wins);
        reset();
        targetNumber = getRandomInt(min, max);
        console.log(targetNumber);
        $("#target-number").html(targetNumber);
    };
});

//Reset crystal values
function reset() {
    scoreTotal = 0;
    $("#score-number").html(scoreTotal);
    crystalNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    crystalChoiceBlue = crystalCreation(crystalNumber);
    $("blue_crystal.png").html(crystalChoiceBlue);
    crystalChoiceOrange = crystalCreation(crystalNumber);
    $("orange_crystal.png").html(crystalChoiceOrange);
    crystalChoicePink = crystalCreation(crystalNumber);
    $("pink_crystal.png").html(crystalChoicePink);
    crystalChoicePurple = crystalCreation(crystalNumber);
    $("purple_crystal.png").html(crystalChoicePurple);
};

// Crystal value generating function
function crystalCreation(crystalNumber) {
    return crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
};