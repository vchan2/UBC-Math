//**********************************************************
// Script to create random variables and questions for Topic 10.2
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m
// variables positive values = a,b,c,d,g,j
// variables not equal to one = b,j
// variables not equal = (d,g),(k,m)
// end restrictions

var a,b,c,d,g,h,j,k,m;
	    
function randomize(){
    
    var variables = new Array();
    var random;
    
    for (var i = 0;i<4; i++ ){
	random = 0;
	while (random <= 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    
    a = variables[0]; //+
    c = variables[1]; //+
    d = variables[2]; //+, !=g
    g = variables[3]; //+
    
    if(d == g){
	random = 0;
	while (random <= 0 || random == g){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	d = random;
    }
    
    for (var i = 4;i<6; i++ ){
	random = 0;
	while (random <= 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    j = variables[4]; //+, !=1
    b = variables[5]; //+, !=1
    
    for (var i = 6;i<9; i++ ){
	random = 0;
	while (random == 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    h = variables[6];
    m = variables[7];
    k = variables[8]; // !=m
    
    if(k == m){
	random = 0;
	while (random == 0 || random == m){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	k = random;
    }
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\(f(x) = \\frac{"+a+"x+"+b+"}{"+c+"x+1}\\)";
    document.getElementById("q1a").innerHTML ="\\(a = "+d+"\\)";
    document.getElementById("q1b").innerHTML ="\\(b = "+g+"\\)";
    document.getElementById("q2").innerHTML ="\\(f(x) = "+h+"x + x(x - "+j+")\\)";
    document.getElementById("q2a").innerHTML ="\\(a = "+k+"\\)";
    document.getElementById("q2b").innerHTML ="\\(b = "+m+"\\)";
}
