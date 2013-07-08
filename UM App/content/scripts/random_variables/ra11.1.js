//**********************************************************
// Script to create random variables and questions for Topic 11.1
//
//**********************************************************
// variables used = a,b,c,d,e,l,g,h,k,m,o,p
// variables positive values = a,b,c,d,l,h,k,m,o
// variables not equal = (l,h)
// variables not equal to one = a,b,c,d,k
// variables max values = (c,3),(d,3),(o,2)
// variables not divisible = (a,b)
// variables products = (a,-1,a),(c,o,m),(m,o,e),(d,o,p),(l,h,g)
// variables sums = (m,d,m),(e,p,e),(g,k,g)
// end restrictions

var a,b,c,d,e,l,g,h,k,m,o,p;
	    
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
    a = variables[0]; //+, !=1, !/b
    b = variables[1]; //+, !=1
    h = variables[2]; //+, !=1
    
    if ( a%b == 0){
	random = 0;
	while (random <= 1 || random%b == 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	a = random;
    }
    
    for (var i = 3;i<5; i++ ){
	random = 0;
	while (random <= 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    l = variables[3]; //+, !=k
    k = variables[4]; //+
    
    if (l == k){
	random = 0;
	while (random <= 0 || random == k){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	l = random;
    }
    
    random = 0;
    while (random <= 0 ||random>2){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    o = random; //+, max=2
    
    for (var i = 5;i<7; i++ ){
	random = 0;
	while (random <= 1 || random>3){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    c = variables[5]; //+, !=1, max=3
    d = variables[6]; //+, !=1, max=3
    
    //Products
    a = a*-1;
    m = c*o;
    e = m*o;
    p = d*o;
    g = l*h;
    
    //Sums
    m = m+d;
    e = e+p;
    g = g+k;
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\(y = "+a+"x + "+b+"\\)";
    document.getElementById("q2").innerHTML ="\\(y = "+c+"x^2+"+d+"-"+e+"\\)";
    document.getElementById("q3").innerHTML ="\\(y = -x^2 + "+l+"x + "+g+"\\)";
    document.getElementById("q3a").innerHTML ="\\(y = "+h+"x + "+k+"\\)";
}
