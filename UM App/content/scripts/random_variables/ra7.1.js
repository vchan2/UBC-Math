//**********************************************************
// Script to create random variables and questions for Topic 7.1
//
//**********************************************************
// variables used = a,b,c,d,g
// variables positive values = a,b,c,d,g
// variables not equal to one = a,b,c,d
// variables max values = (a,3),(b,3)
// end restrictions

var a,b,c,d,g;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    for (var i = 0;i<2; i++ ){
	random = 0;
	while (random <= 1 || random >3){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    
    a = variables[0]; //+, !=1, max=3
    b = variables[1]; //+, !=1, max=3
    
    for (var i = 2;i<4; i++ ){
	random = 0;
	while (random <= 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    c = variables[2]; //+, !=1
    d = variables[3]; //+, !=1
    
    random = 0;
    while (random <= 0){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    g = random; //+
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\(x^{\\frac{1}{"+a+"}}- "+b+" =0 \\ \\)";
    document.getElementById("q2").innerHTML ="\\((x+"+c+")("+d+"-"+g+"x)= 0 \\ \\)";
}
