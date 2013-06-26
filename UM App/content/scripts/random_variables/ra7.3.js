//**********************************************************
// Script to create random variables and questions for Topic 7.2
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,o,p,t,u,v
// variables products = (k,m,n),(a,b,t),(a,c,u)
// variables sums = (t,c,g),(u,d,h),(n,1,p)
// variables positive values = a,b,c,d,k,m
// variables not equal to one = b,d,k,m,n
// variables max values = (k,4)
// end restrictions

var a,b,c,d,g,h,j,k,m,n,o,p,t,u,v;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    //No Restrictions
    for (var i = 0;i<3; i++ ){
	random = 0;
	while (random == 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    j = variables[0];
    o = variables[1];
    v = variables[2];
    
    for (var i = 3;i<5; i++ ){
	random = 0;
	while (random <= 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    c = variables[3]; //+
    a = variables[4]; //+
    
    for (var i = 5;i<8; i++ ){
	random = 0;
	while (random <= 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    b = variables[5]; //+, !=1
    d = variables[6]; //+, !=1
    m = variables[7]; //+, !=1
    
    random = 0;
    while (random <= 1 || random>4){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    k = random; //+, !=1, max=4
    
    //Products
    n = k*m; //!=1
    t = a*b;
    u = a*c;
    
    //Sums
    g = t+c;
    h = u+d;
    p = n+1;
    
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\("+b+"x^2+"+g+"x +"+h+" = "+d+"\\)";
    document.getElementById("q2").innerHTML ="\\("+m+"(x+"+k+")^2 = "+p+"(x+"+k+") \\)";
}
