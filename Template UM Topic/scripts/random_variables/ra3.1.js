//**********************************************************
// Script to create random variables and questions for Topic 3.1
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v,w,z,aa,bb,cc
// variables sums = (b,g,m),(c,j,p),(u,1,aa)
// variables products = (a,d,k),(a,h,n),(q,t,w),(s,t,z),(q,v,bb),(s,v,cc)
// variables not equal = (d,h),(q,s),(t,v)
// variables positive values = a,b,c,d,g,h,j,q,r,s,t,u,v
// variables max values = (a,3),(b,5),(c,5),(d,3),(g,4),(h,3),(j,4),(u,8),(q,4),(t,2),(s,4),(v,2)
// end restrictions


var a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v,w,z,aa,bb,cc;

function randomize(){
    
    var variables = new Array();
    var random;
    
    random = 0;
        while (random <= 0){
            random = Math.floor(Math.random()*(6+6))-6;   
        }
    o = random;
    
    // +
    random = 0;
    while (random <= 0){
        random = Math.floor(Math.random()*(6+6))-6;   
    }
    r = random;   // +
    
    // + ,max=3
    for (var i = 0;i<3; i++ ){
        random = 0;
        while (random <= 0 || random >3){
            random = Math.floor(Math.random()*(6+6))-6;   
        }
        variables[i] = random;
    }
    a = variables[0];   // + , max=3
    h = variables[1];   // + , max=3
    d = variables[2];   // + , max=3 !=h
    
    if(Math.abs(d) == Math.abs(h)){
        random = 0;
        while (random <= 0 || random >3 || random == h){
            random = Math.floor(Math.random()*(6+6))-6;   
        }
        d = random;
    }
    
    // + ,max=5
    for (var i = 3;i<5; i++ ){
        random = 0;
        while (random <= 0 || random >5){
            random = Math.floor(Math.random()*(6+6))-6;   
        }
        variables[i] = random;
    }
    b = variables[3];   // + , max=5
    c = variables[4];   // + , max=5
    
    // + ,max=4
    for (var i = 5;i<9; i++ ){
        random = 0;
        while (random <= 0 || random >4){
            random = Math.floor(Math.random()*(6+6))-6;   
        }
        variables[i] = random;
    }
    g = variables[5];   // + , max=4
    j = variables[6];   // + , max=4
    q = variables[7];   // + , max=4 !=s
    s = variables[8];   // + , max=4 
    
    if(Math.abs(q) == Math.abs(s)){
        random = 0;
        while (random <= 0 || random >4 || random == s){
            random = Math.floor(Math.random()*(6+6))-6;   
        }
        q = random;
    }
    
    // +, max=8
    random = 0;
    while (random <= 0 || random >8){
        random = Math.floor(Math.random()*(6+6))-6;   
    }
    u = random;   // + , max=8
    
    // + ,max=2
    for (var i = 9;i<11; i++ ){
        random = 0;
        while (random <= 0 || random >2){
            random = Math.floor(Math.random()*(6+6))-6;   
        }
        variables[i] = random;
    }
    v = variables[9];   // + , max=2
    t = variables[10];   // + , max=2 !=v
    
    if(Math.abs(v) == Math.abs(t)){
        random = 0;
        while (random <= 0 || random >2 || random == t){
            random = Math.floor(Math.random()*(6+6))-6;   
        }
        v = random;
    }
    
    //Sums and products
    k = a*d;
    m = b+g;
    n = a*h;
    p = c+j;   
    w = q*t;
    z = s*t;
    aa = u+1;
    bb = q*v;
    cc = s*v;
        
    }
    
    function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\("+k+"x^{"+m+"}y^{"+c+"}+"+n+"x^{"+b+"}y^{"+p+"}= \\  \\)";
    document.getElementById("q2").innerHTML ="\\("+w+"x^{"+r+"}y^{"+u+"}+"+z+"y^{"+aa+"}+"+bb+"x^{"+r+"}+"+cc+"y= \\ \\)";
    }