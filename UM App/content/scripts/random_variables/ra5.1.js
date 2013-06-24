//**********************************************************
// Script to create random variables and questions for Topic 5.1
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n
// variables not equal to one = a,c,j
// variables not equal = (g,m)
// variables positive values = a,c,h,j
// variables max values = (a,3),(b,2),(c,2),(h,4),(j,2)
// variables powers = (h,j,n)
// end restrictions

var a,b,c,d,g,h,j,k,m,n;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    //No restrictions
    for (var i = 0;i<4; i++ ){
	random = 0;
	while (random == 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    
    k = variables[0];
    m = variables[1];
    d = variables[2];
    g = variables[3]; // !=m
    
    if(g == m){
	random = 0;
	while (random == 0 || random == m){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	g =random;
    }
    
    //!=1,+, max=2
    for (var i = 4;i<6; i++ ){
	random = 0;
	while (random <= 1 || random>2){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    c = variables[4]; //!=1,+, max=2
    j = variables[5]; //!=1, +, max=2
    
    random = 0;
    while (random <= 1 || random>3){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    
    a = random; //!=1,+, max=3
    
    random = 0;
    while (random == 0 || random>2){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    b = random; //max=2
    
    
    random = 0;
    while (random <= 0 || random>4){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    h = variables[0]; //+, max=4
    
    n = Math.pow(h,j);
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\("+a+"^{"+b+"(x+"+c+")}= \\  \\)";
    document.getElementById("q2").innerHTML ="\\(\\frac{"+d+"x^{"+g+"}+("+n+"x)^{1/"+j+"}}{"+k+"x^{"+m+"}}= \\ \\)";
}
