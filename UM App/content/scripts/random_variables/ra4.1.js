//**********************************************************
// Script to create random variables and questions for Topic 4.1
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v,w
// variables not equal to one = b,d,h,j,k,n,o,p,q,r,s,t,v,w
// variables not equal = (q,r),(v,w)
// variables not divisible = (q,s),(r,s),(p,t),(u,w)
// variables positive values = b,c,d,h,n,q,r,s,t,v,w
// variables sums = (q,r,t)
// end restrictions

var a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v,w;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    //No restrictions
    for (var i = 0;i<3; i++ ){
	random = 0;
	while (random == 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    
    a = variables[0]; 
    g = variables[1];
    m = variables[2];
    
    // != 1, +
    for (var i = 3;i<12; i++ ){
	random = 0;
	while (random <= 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    
    w = variables[3]; // != 1, +
    b = variables[4]; // != 1, +
    d = variables[5]; // != 1, +
    h = variables[6]; // != 1, +
    n = variables[7]; // != 1, +
    s = variables[8]; // != 1, +
    r = variables[9]; // != 1, + , !/s
    v = variables[10]; // != 1, +, != w
    q = variables[11]; // != 1, + , !=r, !/s
    
    if(r%s == 0){
	random = 0;
	while (random <= 1 || random%s == 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	r = random;
    }
    
    if(v == w){
	random = 0;
	while (random <= 1 || random == w){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	v = random;
    }
    
    if(q == r || q%s == 0){
	random = 0;
	while (random <= 1 || random == r || random%s == 0){
	    random = Math.floor(Math.random()*(6+6))-6;
	}
	q = random;	
    }
    
    random = 0;
    while (random <= 0){
	random = Math.floor(Math.random()*(6+6))-6;
    }
    c = random; // +
    
    // != 1
    for (var i = 12;i<16; i++ ){
	random = 0;
	while (random == 0 || random == 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    j = variables[12]; // != 1
    k = variables[13]; // != 1
    o = variables[14]; // != 1
    p = variables[15]; // != 1 , !/t
    
    if(p%t == 0){
	random = 0;
	while (random == 0 || random == 1 || random%r == 0){
	    random = Math.floor(Math.random()*(6+6))-6;
	}
	p =random;
    }
    
    random = 0;
    while (random == 0 || random%w == 0){
	random = Math.floor(Math.random()*(6+6))-6;
    }
    
    u = random; // !/w
    
    t = q + r;
    
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\(\\frac{"+a+"x+"+b+"}{"+c+"x+"+d+"} + \\frac{"+g+"x+"+h+"}{"+c+"x+"+d+"}= \\  \\)";
    document.getElementById("q2").innerHTML ="\\(\\frac{"+j+"}{"+c+"x+"+d+"} - \\frac{"+k+"}{"+m+"x+"+n+"}= \\ \\)";
    document.getElementById("q3").innerHTML ="\\("+o+"-\\frac{"+p+"}{\\frac{"+q+"}{"+s+"}+\\frac{"+r+"}{"+s+"}}= \\ \\)";
    document.getElementById("q4").innerHTML ="\\(\\frac{"+u+"x + "+v+"}{"+u+"x + "+w+"}= \\ \\)";
}
