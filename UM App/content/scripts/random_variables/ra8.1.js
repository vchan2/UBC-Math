//**********************************************************
// Script to create random variables and questions for Topic 7.6
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,o,p,q,r,t
// variables positive values = b,h,j,k,m,n,o,p,r,t
// variables max values = (b,3),(d,3),(q,1),(j,3),(o,3)
// variables not equal to one = c,g,h,m,p
// variables products = (7,q,q),(n,o,r),(n,-1,s)
// variables sums = (b,d,q,a),(j,r,-1,s,t,k)
// end restrictions

var a,b,c,d,g,h,j,k,m,n,o,p,q,r,t,s;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    for (var i = 0;i<3; i++ ){
	random = 0;
	while (random <= 0 || random >3){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    b = variables[0]; //+, max=3
    j = variables[1]; //+, max=3
    o = variables[2]; //+, max=3
    
    for (var i = 3;i<6; i++ ){
	random = 0;
	while (random <= 0 || random == 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    h = variables[3]; //+, !=1
    m = variables[4]; //+, !=1
    p = variables[5]; //+, !=1
    
    for (var i = 6;i<8; i++ ){
	random = 0;
	while (random == 0 || random == 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    c = variables[6]; //!=1
    g = variables[7]; //!=1
    
    for (var i = 8;i<10; i++ ){
	random = 0;
	while (random <= 0 ){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    n = variables[8]; //+
    t = variables[9]; //+
    
    random = 0;
    while (random == 0 || random >3){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    d = random; //max=3
    
    random = 0;
    while (random == 0 || random >1){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    q = random; // max=1
    
    //Products
    q = 7*q;
    r = n*o;
    s = (-1)*n;
   
    //Sums
    a = b+d+q;
    k = j+r-1+s+t;
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\("+a+"x + "+b+"("+c+"-x) \\lt "+d+"("+g+"+x)-"+h+" \\)";
    document.getElementById("q2").innerHTML ="\\("+j+"(x - "+k+"(x+"+m+")) \\ge x+"+n+"(x-"+o+"(x+"+p+"))\\)";
}
