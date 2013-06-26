//**********************************************************
// Script to create random variables and questions for Topic 7.6
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,o,p,q
// variables positive values = a,b,d,h,j,m,n,q
// variables not equal = (m,q),(j,k)
// variables not equal to one = c,g,k
// variables products = (j,q,k),(k,m,p),(j,m,n)
// variables sums = (h,1,b)
// variables max values = (j,3),(q,4),(m,4)
// end restrictions

var a,b,c,d,g,h,j,k,m,n,o,p,q;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    //No Restrictions
    random = 0;
    while (random == 0){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    o = random;
    
    for (var i = 0;i<4; i++ ){
	random = 0;
	while (random <= 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    a = variables[0]; //+
    d = variables[0]; //+
    h = variables[0]; //+
    
    for (var i = 4;i<6; i++ ){
	random = 0;
	while (random == 0 || random == 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    c = variables[4]; //!=1
    g = variables[5]; //!=1
    
    for (var i = 6;i<8; i++ ){
	random = 0;
	while (random <= 0 || random>4){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    m = variables[6]; //+, max=4
    q = variables[7]; //+, max=4
    
    random = 0;
    while (random <= 0 || random>3){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    j = random; //+, max=3
    
    //Products
    k = j*q;
    p = k*m;
    n = j*m;
    
    //Sums
    b = h+1;
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\(\\begin{align} &"+a+"x + "+b+"y = "+c+"\\\\ &x + "+d+"y = "+g+"\\end{align}\\)";
    document.getElementById("q2").innerHTML ="\\(\\begin{align} &"+n+"x + "+j+"y = "+p+"\\\\ &y - x^2 = "+q+"x\\end{align}\\)";
}
