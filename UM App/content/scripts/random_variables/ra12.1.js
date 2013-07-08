//**********************************************************
// Script to create random variables and questions for Topic 12.1
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k
// variables not equal to one = a,b,d,g,h
// variables positive values = b,c,d,j
// end restrictions

var a,b,c,d,g,h,j,k;
	    
function randomize(){
    
    var variables = new Array();
    var random;
    
    random = 0;
    while (random == 0){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    k = random;
    
    for (var i = 0;i<2; i++ ){
	random = 0;
	while (random <= 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    b = variables[0]; //!=1, +
    d = variables[1]; //!=1, +
    
    for (var i = 2;i<5; i++ ){
	random = 0;
	while (random == 0 || random == 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    a = variables[2]; //!=1
    g = variables[3]; //!=1
    h = variables[4]; //!=1
    
    for (var i = 5;i<7; i++ ){
	random = 0;
	while (random <= 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    c = variables[5]; // +
    j = variables[6]; // +
    
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="if \\(\\; f(x) = "+a+"x + "+b+"\\)";
    document.getElementById("q2").innerHTML ="\\(f(x) = "+c+"x^2 + "+d+"x\\)";
    document.getElementById("q2a").innerHTML ="\\(\\frac{f("+g+" + h) - f("+g+")}{h}\\)";
    document.getElementById("q3").innerHTML ="\\(f(x) = "+h+"x + "+j+"\\)";
    document.getElementById("q3a").innerHTML ="\\(\\frac{f("+k+"x)}{"+k+"x}\\)";
    document.getElementById("q3b").innerHTML ="\\(\\frac{f("+k+"x)}{"+k+"x}\\)";
}
