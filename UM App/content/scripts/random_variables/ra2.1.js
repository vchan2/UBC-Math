//**********************************************************
// Script to create random variables and questions for Topic 1.2
//
//**********************************************************
// variables used = a,b,c,d,g,h,j,k,m,n,o,p,s,t,u,v,w
// variables not equal = (b,g),(j,m),(k,n),(k,p)
// variables positive values = a,c,d,h,j,m,t,w
// variables not equal to one = c,h,j,k,m,n,p,t
// variables max values = (j,3),(k,3),(m,3),(n,3)
// end restrictions

var a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v,w,z;
        
function randomize(){
    
        var variables = new Array();
        var random;
        for (var i = 0;i<7; i++ ){
            random = 0;
            while (random == 0){
                random = Math.floor(Math.random()*(6+6))-6;   
            }
            variables[i] = random;
        }
        
        b = variables[0];
        // /=
        g =variables[1];
        
        while( b == g){
            random = 0;
            while(random == 0){
                random = Math.floor(Math.random()*(6+6))-6;  
            }
            b = random;
        }
        
        //No restrictions
        o = variables[2];
        s =variables[3];
        u = variables[4];
        v = variables[5];
        w = variables[6];
        
        // !=1
        for (var i = 7;i<9; i++ ){
            random = 0;
            while (random == 0 || random == 1){
                random = Math.floor(Math.random()*(6+6))-6;   
            }
            variables[i] = random;
        }
        p = variables[7];  // !=1 , !=k
        t = variables[8];   // !=1
        
        for (var i = 9;i<11; i++ ){
            random = 0;
            while (random == 1 || random <= 0){
                random = Math.floor(Math.random()*(6+6))-6;   
            }
            variables[i] = random;
        }
        c = variables[9];   // !=1 , +
        h = variables[10];   // !=1, +
        
        for (var i = 11;i<13; i++ ){
            random = 0;
            while (random == 1 || random <= 0 || random>3){
                random = Math.floor(Math.random()*(6+6))-6;   
            }
            variables[i] = random;
        }
        j = variables[11];   // !=1, +, max = 3
        // /=
        m = variables[12];   // !=1, +, max = 3
                    
        while (j == m){
            random = 0;
            while (random == 1 || random <= 0 || random>3){
                random = Math.floor(Math.random()*(6+6))-6;   
            }
            j = random;
        }
        
        random = 0;
            while (random == 1 || random<3){
                random = Math.floor(Math.random()*(6+6))-6;   
            }
        n =random;    // !=1, max = 3
        
        random = 0;
        while (random == 1 || random<3 || random == n || random == p){
            random = Math.floor(Math.random()*(6+6))-6;   
        }
        
        k = random; // !=1, max = 3
        
        // variables > 0
        var variables6 = new Array();
        for (var i = 13;i<17; i++ ){
            var random = 0;
            while (random<=0){
                random = Math.floor(Math.random()*(6+6))-6;   
            }
            variables6[i] = random;
        }
        a = variables6[13]; 
        d = variables6[14];
        t = variables6[15];
        w = variables6[16];
        
    }

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\(("+a+"x^{"+b+"}+"+c+")("+d+"x^{"+g+"}+"+h+")= \\  \\)";
    document.getElementById("q2").innerHTML ="\\("+j+"^{"+k+"x}("+m+"^{"+n+"x}+"+j+"^{"+p+"x})= \\ \\)";
    document.getElementById("q3").innerHTML = "\\(("+s+"x-"+t+")("+u+"x^{"+v+"}+"+w+"e^x)= \\ \\)";
}