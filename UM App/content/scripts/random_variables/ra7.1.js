//**********************************************************
// Script to create random variables and questions for Topic 5.2
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,p,q
// variables not equal to one = b,c,h,j,k
// variables positive values = a,b,c,h,j,k,m,n,p,q
// variables products = (2,a,b,d),(2,h,j,m),(a,b,b,p),(h,j,j,q)
// variables sums = (p,c,g),(q,k,n)
// variables max values = (a,1),(b,6),(c,6),(h,5),(j,3),(k,5)
// end restrictions

var a,b,c,d,g,h,j,k,m,n,p,q;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    random = 0;
    while (random <= 0 || random >1){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    a = random;	// + , max=1
    
    for (var i = 0;i<2; i++ ){
	random = 0;
	while (random <= 1 || random >6){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    b = variables[0];	//!=1, + , max=6
    c = variables[1];	//!=1, + , max=6
    
    for (var i = 2;i<4; i++ ){
	random = 0;
	while (random <= 1 || random >5){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    h = variables[2];	//!=1, + , max=5
    k = variables[3];	//!=1, + , max=5
    
    random = 0;
    while (random <= 1 || random >3){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    j = random;	//!=1, + , max=3
    
    // Product
    d = 2*a*b;
    m = 2*h*j;	// +
    p = a*b*b;	// +
    q = h*j*j;	// +
    
    // Sums
    g = p+c;
    n = q+k;	// +
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\("+a+"x^2-"+d+"x+"+g+"= \\ \\)";
    document.getElementById("q2").innerHTML ="\\("+h+"x^2+"+m+"x+"+n+"= \\ \\)";
}
