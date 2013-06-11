//**************************************************
//Script to calculate the score of the topic quizzes
//
//**************************************************

//Global,total and student Score
var gScore = 0 ,totalScore = 0,studentScore = 0;

function setTotal(t){
    totalScore = t;
}

function addPoint(p){
    console.log("adding point " + p);
    gScore += p;
}

function reducePoint(p){
    console.log("reducing point " + p);
    gScore -= p;
}

function calcScore(){
    console.log("total score: "+totalScore);
    console.log("gScore: "+gScore);
    if(gScore != undefined){
        studentScore = gScore/totalScore;   
    }
}
//    function getCalcScore(){
//	return studentScore;
//    }
function clearScore(){
    console.log("clearing bro");
    gScore = 0;
    studentScore = 0;
}

function updateScore(){
    calcScore();
    console.log("I am getting called bro and score is = "+studentScore);
    document.getElementById("score").innerHTML = studentScore.toFixed(2);
}
function send_score(){
            // Set Blackboard value
            console.log("sending..."+studentScore.toFixed(2))
            doSetValue("cmi.score.scaled",studentScore.toFixed(2));
}