//**********************************************************
// Script to create random variables and questions for Topic 10.1
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m
// variables positive values = b,c,g,j
// variables not equal to one = b,c,j
// variables products = (g,c,m)
// variables sums = (m,1,a)
// end restrictions

var a,b,c,d,g,h,j,k,m;
	    
function randomize(){
    
    var variables = new Array();
    var random;
    
    for (var i = 0;i<3; i++ ){
	random = 0;
	while (random <= 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    
    b = variables[0]; //+, !=1
    c = variables[1]; //+, !=1
    j = variables[2]; //+, !=1
    
    //No restrictions
    for (var i = 3;i<6; i++ ){
	random = 0;
	while (random == 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    d = variables[3];
    h = variables[4];
    k = variables[5];
    
    random = 0;
    while (random <= 0){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    g = random; //+
    
    //Products
    m = g*c;
    
    //Sums
    a = m+1;
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\(f(x) = \\frac{"+a+"x+"+b+"}{"+c+"x+1}\\)";
    document.getElementById("q1a").innerHTML ="\\(x = "+d+"\\)";
    document.getElementById("q1b").innerHTML ="\\(f(x) = "+g+"\\)";
    document.getElementById("q2").innerHTML ="\\(f(x) = "+h+"x+x(x-"+j+")\\)";
    document.getElementById("q2a").innerHTML ="\\(x = "+k+"\\)";
    
}
