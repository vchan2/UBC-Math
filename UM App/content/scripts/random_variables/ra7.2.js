//**********************************************************
// Script to create random variables and questions for Topic 7.2
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u
// variables positive values = b,d,g,j,k,n,p,q,s,t,u
// variables not equal to one = a,g,j,k,q,u
// end restrictions

var a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u;
	    
function randomize(){
    
    
    var variables = new Array();
    var random;
    
    //No Restrictions
    for (var i = 0;i<5; i++ ){
	random = 0;
	while (random == 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    c = variables[0];
    h = variables[1];
    m = variables[2];
    o = variables[3];
    r = variables[4];
    
    for (var i = 5;i<11; i++ ){
	random = 0;
	while (random <= 0){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    b = variables[5]; //+
    d = variables[6]; //+
    n = variables[7]; //+
    p = variables[8]; //+
    s = variables[9]; //+
    t = variables[10]; //+
    
    for (var i = 11;i<16; i++ ){
	random = 0;
	while (random <= 1){
	    random = Math.floor(Math.random()*(6+6))-6;   
	}
	variables[i] = random;
    }
    g = variables[11]; //+,!=1
    j = variables[12]; //+,!=1
    k = variables[13]; //+,!=1
    q = variables[14]; //+,!=1
    u = variables[15]; //+,!=1
    

    random = 0;
    while (random == 0 || random == 1){
	random = Math.floor(Math.random()*(6+6))-6;   
    }    
    a = random; //!=1
    
}

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\("+a+"-"+b+"("+c+"x+"+d+"(x-"+g+")) ="+h+"x-(x+"+j+")+"+k+" \\ \\)";
    document.getElementById("q2").innerHTML ="\\("+m+"(x+"+n+"(x+"+p+"(x+"+q+")))= "+r+"(x-"+s+"(x-"+t+"(x-"+u+")))\\ \\)";
}
