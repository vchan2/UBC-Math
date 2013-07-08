//**********************************************************
// Script to create random variables and questions for Topic 7.4
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,p,q,r,w,y,z
// variables values = (w,1)
// variables positive values = a,b,c,n,p,q,w,y,z
// variables not equal to one = a,b,c
// variables max values = (b,2),(y,4),(z,5)
// variables products = (a,c,k),(-1,b,m),(b,c,g),(w,w,y,p),(w,w,z,q),(p,z,r)
// variables sums = (k,m,d),(d,-1,h),(g,-1,j),(p,q,n)
// end restrictions

var a,b,c,d,g,h,j,k,m,n,p,q,r,w,y,z;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    w = 1;
    b = 2; //+, !=1, max=2
    
    for (var i = 0;i<3; i++ ){
	random = 0;
	while (random <= 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    a = variables[0]; //+, !=1
    c = variables[1]; //+, !=1

    random = 0;
    while (random <= 0 || random>4){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    y = random; //+, max=4
    
    random = 0;
    while (random <= 0 || random>5){
	random = Math.floor(Math.random()*(6+6))-6;   
    }
    z = random; //+, max 5
    
    //Products
    k=a*c;
    m=b*-1;
    g=b*c;
    p=w*w*y;
    q=w*w*z;
    r=p*z;
    
    //Sums
    d= k+m;
    h=d-1;
    j=g-1;
    n=p+q;
    
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\(\\frac{"+a+"x^2}{"+h+"x-"+j+"}+1=\\frac{1-x}{"+h+"x-"+j+"}\\)";
    document.getElementById("q2").innerHTML ="\\(x-\\sqrt{"+n+"x-"+r+"}= 0\\ \\)";
}
