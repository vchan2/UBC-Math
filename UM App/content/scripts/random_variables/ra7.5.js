//**********************************************************
// Script to create random  and questions for Topic 7.5
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k
// variables not equal = (h,k)
// variables not equal to one = c,d
// variables positive values = a,b,c,d,g,h,j,k
// end restrictions

var a,b,c,d,g,h,j,k;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    for (var i = 0;i<6; i++ ){
	random = 0;
	while (random <= 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    
    a = variables[0]; //+
    b = variables[1]; //+
    g = variables[2]; //+
    j = variables[3]; //+
    k = variables[4]; //+
    h = variables[5]; //+, !=k
    
    for (var i = 6;i<8; i++ ){
	random = 0;
	while (random <= 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    c = variables[5]; //+,!=1
    d = variables[6]; //+,!=1
    
    if(h==k){
	random = 0;
	while (random <= 0 || random == k){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	h = random;
    }
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\("+a+"e^{"+b+"x+"+c+"} ="+d+"\\)";
    document.getElementById("q2").innerHTML ="\\("+g+"(10^{"+h+"x})= "+j+"(10^{"+k+"x}) \\)";
}
