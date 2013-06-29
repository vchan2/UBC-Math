//**********************************************************
// Script to create random variables and questions for Topic 8.2
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,t,u,v,w,x
// variables positive values = a,b,h,j,k,m,t
// variables not equal to one = a,b,k
// variables max values = (a,4),(b,3),(h,3),(k,3),(t,3)
// variables products = (a,-1,c),(a,a,x),(a,t,d),(h,k,u),(u,k,v),(m,k,w)
// variables sums = (a,t,b),(x,d,d),(b,c,c),(u,m,j),(v,w,n)
// end restrictions

var a,b,c,d,g,h,j,k,m,n,t,u,v,w,x;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    //No Restricitons
    random = 0;
    while (random == 0){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    g = random;
    
    for (var i = 0;i<2; i++ ){
	random = 0;
	while (random <= 0 || random>3){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    t = variables[0]; //+, max=3
    h = variables[1]; //+, max=3
    
    random = 0;
    while (random <= 1 || random>4){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    a = random; //+, !=1 , max=4
    
    random = 0;
    while (random <= 1 || random>3){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    k = random; //+, !=1, max=3
    
    random = 0;
    while (random <= 0){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    m = random; //+
    
    //Products
    c = a*-1;
    x = a*a;
    d = a*t;
    u = h*k;
    v = u*k;
    w = m*k;
    
    //Sums
    b = a+t; //+, !=1, max=3
    d = d+x;
    c = b+c;
    j = u+m; //+
    n = v+w;
   
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\(x^2+"+c+"x \\lt "+d+"\\)";
    document.getElementById("q2").innerHTML ="\\(x^2("+h+"x+"+m+") \\gt "+n+"x\\)";
}
