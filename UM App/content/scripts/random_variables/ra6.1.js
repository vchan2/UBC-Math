//**********************************************************
// Script to create random variables and questions for Topic 6.1
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,(n=2)
// variables not equal to one = a,b,c,d,g,h,k,n
// variables positive values = c,d,g,n
// variables max values = (g,3),(h,3),(n,2)
// variables not divisible = (n,d)
// end restrictions

var a,b,c,d,g,h,j,k,m;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    //No restrictions
    for (var i = 0;i<2; i++ ){
	random = 0;
	while (random == 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    j = variables[0];
    m = variables[1];
    
    for (var i = 2;i<5; i++ ){
	random = 0;
	while (random == 1 || random ==0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    a = variables[2]; //!=1
    b = variables[3]; //!=1
    k = variables[4]; //!=1
     
    
    for (var i = 5;i<7; i++ ){
	random = 0;
	while (random <= 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    c = variables[5]; //!=1 , +
    d = variables[6]; //!=1 , + , !/n
    
    random = 0;
    while (random <= 1 || random >3){
	random = Math.floor(Math.random()*(6+6))-6;   
    } 
    g = random; //!=1 , + , max=3
    
    random = 0;
    while (random == 1 || random >3 || random == 0){
	random = Math.floor(Math.random()*(6+6))-6;   
    } 
    h = variables[0]; //!=1 , max=3
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\(ln\\left(\\frac{e^{"+a+"}x}{(ex)^{"+b+"}}\\right)= \\ \\)";
    document.getElementById("q2").innerHTML ="\\(ln("+c+")+ln(\\frac{"+d+"}{2})-ln("+g+"^{"+h+"})= \\ \\)";
    document.getElementById("q3").innerHTML ="\\(log(10^{"+j+"}x^{"+k+"}) - log(x^{"+m+"})= \\ \\)";
}
