//**********************************************************
// Script to create random variables and questions for Topic 8.3
//
//**********************************************************
// variables used = a,b,c,m,o,p,q
// variables positive values = b,m,o,p
// variables not equal to one = o
// variables max values = (b,1),(m,4),(o,3)
// variables products = (m,m,a),(o,o,c),(1,o,q),(m,o,p)
// variables sums = (p,1,p)
// end restrictions

var a,b,c,m,o,p,q;
	    
function randomize(){
    
    var random;
    
//    random = 0;
//    while (random <= 0 || random>1){
//	random = Math.floor(Math.random()*(6+6))-6;   
//    }
    b = 1; //+, max=1
    
    random = 0;
    while (random <= 0 || random>4){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    m = random; //+, max=4
    
    random = 0;
    while (random <= 1 || random>3){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    o = random; //+, !=1, max=3
    
    //Products
    a = m*m;
    c = o*o;
    q = 1*o;
    p = m*o;
    
    //Sums
    p = p+1; //+
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\("+p+"\\sqrt{x}-"+q+" \\lt "+m+"x\\)";
}
