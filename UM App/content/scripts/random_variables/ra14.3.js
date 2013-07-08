//**********************************************************
// Script to create random variables and questions for Topic 14.3
//
//**********************************************************
// variables used = a,b,c,d,e,g,h,j,k,l,m,n,o,p,q,r,s,t
// variables positive values = a,b,c,d,e,g,h,j,k,l,m
// variables max values = (m,4)
// variables not equal = (n,p),(r,t)
// variables products = (a,2,b)
// end restrictions

var a,b,c,d,e,g,h,j,k,l,m,n,o,p,q,r,s,t;
	    
function randomize(){
    
    var variables = new Array();
    var random;
    
    //No Restrictions
    for (var i = 0;i<7; i++ ){
	random = 0;
	while (random == 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    n = variables[0]; //!=p
    o = variables[1]; 
    p = variables[2]; 
    q = variables[3]; 
    r = variables[4]; //!=t
    s = variables[5]; 
    t = variables[6];
    
    if( r == t){
	random = 0;
	while (random == 0 || random == t){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	r = random;
    }
    
    if(n == p){
	random = 0;
	while (random == 0 || random == p){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	n = random;
    }
    

    
    for (var i = 7;i<16; i++ ){
	random = 0;
	while (random <= 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    a = variables[7]; //+
    c = variables[8]; //+
    d = variables[9]; //+
    e = variables[10]; //+
    g = variables[11]; //+
    h = variables[12]; //+
    j = variables[13]; //+
    k = variables[14]; //+
    l = variables[15]; //+
    
    random = 0;
    while (random <= 0 || random>4){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    m = random; //+, max =4
    
    //Products
    b = a*2;
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="radius "+a+" and diameter "+b;
    document.getElementById("q2").innerHTML ="length "+c+" and width "+g;
    document.getElementById("q3").innerHTML ="base "+e+" and width "+g;
    document.getElementById("q4").innerHTML ="radius "+h+" and height "+j;
    document.getElementById("q5").innerHTML ="radius "+k+" and height "+l;
    document.getElementById("q6").innerHTML ="radius "+m;
    document.getElementById("q7").innerHTML ="("+n+","+o+") and ("+p+","+q+")";
    document.getElementById("q8").innerHTML ="("+r+","+s+") and ("+t+","+s+")";
}
