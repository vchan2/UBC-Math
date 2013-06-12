//**********************************************************
// Script to create random variables and questions for Topic 1.2
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v,w,z,aa,bb,cc
// variables not equal to one = b,c,g,h,m,n,p,q,s,t,v,w,z,aa,bb,cc
// variables not divisible = (b,c),(g,h),(m,n),(p,q),(s,t),(v,w),(aa,z),(cc,bb)
// variables positive values = c,h,n,q,t,w,aa,cc
// variables max values = (c,8),(d,3),(h,8),(j,3),(r,4),(u,3)
// variables values = (u,1),(aa,3),(cc,2)
// end restrictions

var a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v,w,z,aa,bb,cc;

function randomize(){
    
    var variables = new Array();
    var random;
    
    //No restrictions
    for(var i =0; i<3; i++){
    random = 0;
    while (random == 0){
        random = Math.floor(Math.random()*(6+6))-6;
    }
    variables[i] = random;
    }
    a = variables[0]; 
    k = variables[1];
    o = variables[2];
    
    // !=1
    for(var i=3; i<11;i++){
    random = 0;
    while(random == 0 || random == 1){
        random = Math.floor(Math.random()*(6+6))-6; 
    }
    variables[i] = random;
    }
    b = variables[3];// !=1 , !b/c
    g = variables[4];// !=1 , !g/h
    m = variables[5];// !=1 , !m/n
    p = variables[6];// !=1 , !p/q   
    s = variables[7];// !=1 , !s/t
    v = variables[8];// !=1 , !v/w
    z = variables[9];// !=1 , !aa/z
    bb = variables[10];// !=1 , !cc/bb
    
    // !=1, max=8 ,+
    for(var i=11; i<13;i++){
    random = 0;
    while(random <= 1 || random>8){
        random = Math.floor(Math.random()*(6+6))-6; 
    }
    variables[i] = random;
    }
    c = variables[11];// !=1 , !b/c , + , max=8
    h = variables[12];// !=1 , !g/h , + , max=8
    
    // max=3
    for(var i=13; i<16;i++){
    random = 0;
    while(random == 0 || random>3){
        random = Math.floor(Math.random()*(6+6))-6; 
    }
    variables[i] = random;
    }
    d = variables[13];//max=3
    j = variables[14];//max=3
    u = variables[15];//max=3 , value=1 (testing)
    
    //max=4
    random = 0;
    while(random == 0 || random>3){
        random = Math.floor(Math.random()*(6+6))-6; 
    }
    r = random;//max=4
    
    // !=1, +
    for(var i=16; i<22;i++){
    random = 0;
    while(random <= 1 ){
        random = Math.floor(Math.random()*(6+6))-6; 
    }
    variables[i] = random;
    }
    n = variables[16];// !=1 , !m/n , +
    q = variables[17];// !=1 , !p/q , +
    t = variables[18];// !=1 , !s/t , +
    w = variables[19];// !=1 , !v/w , +    
    aa = variables[20];// !=1 , !aa/z , + , value=3 (testing)
    cc = variables[21];// !=1 , !cc/bb , + , value=2 (testing)
    
    // Not divisible = (b,c),(g,h),(m,n),(p,q),(s,t),(v,w),(aa,z),(cc,bb)
    
    // !b/c
    if ( b%c == 0){
        random = 0;
        while(random == 0 || random == 1 || random%c == 0){
            random = Math.floor(Math.random()*(6+6))-6; 
        }
        b = random;// !=1
    }
    // !g/h
    if ( g%h == 0){
        random = 0;
        while(random == 0 || random == 1 || random%h == 0){
            random = Math.floor(Math.random()*(6+6))-6; 
        }
        g = random;// !=1
    }
    // !m/n
    if ( m%n == 0){
        random = 0;
        while(random == 0 || random == 1 || random%n == 0){
            random = Math.floor(Math.random()*(6+6))-6; 
        }
        m = random;// !=1 
    }
    // !p/q
    if ( p%q == 0){
        random = 0;
        while(random == 0 || random == 1 || random%q == 0){
            random = Math.floor(Math.random()*(6+6))-6; 
        }
        p = random;// !=1 
    }
    // !s/t
    if ( s%t == 0){
        random = 0;
        while(random == 0 || random == 1 || random%t == 0){
            random = Math.floor(Math.random()*(6+6))-6; 
        }
        s = random;// !=1 
    }
    // !v/w
    if ( v%w == 0){
        random = 0;
        while(random == 0 || random == 1 || random%w == 0){
            random = Math.floor(Math.random()*(6+6))-6; 
        }
        v = random;// !=1
    }
    // !aa/z
    if ( aa%z == 0){
        random = 0;
        while(random <= 1 || random%z == 0){
            random = Math.floor(Math.random()*(6+6))-6; 
        }
        aa= random;
    }
    // !cc/bb
    if ( cc%bb == 0){
         random = 0;
        while(random <= 1 || random%bb == 0){
            random = Math.floor(Math.random()*(6+6))-6; 
        }
        cc= random;
    }
}

function createQ(){
//Set variables for question
document.getElementById("q3").innerHTML ="\\("+a+"x^{"+b+"/"+c+"}("+d+"x^{"+g+"/"+h+"})^{"+j+"}=\t{}\\)";
document.getElementById("q4").innerHTML ="\\(\\frac{"+k+"(x^{"+m+"/"+n+"}y^{"+o+"})^{"+p+"/"+q+"}}{("+r+"y^{"+s+"/"+t+"})^{"+u+"}}=\t{}\\)";	//u is used here
document.getElementById("q5").innerHTML = "\\(\\frac{x^{"+v+"/"+w+"}\\sqrt{x}y^{"+z+"/"+aa+"}}{x^{"+bb+"/"+cc+"}\\sqrt[3]{y}}= \t{}\\)";
}