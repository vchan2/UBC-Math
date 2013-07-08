//**********************************************************
// Script to create random variables and questions for Topic 1.1
//
//**********************************************************
var a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v,w,z;

function randomize(){
    var variables = new Array();
        for (var i = 0;i<20; i++ ){
            var random = 0;
            while (random == 0){
                random = Math.floor(Math.random()*(6+6))-6;   
            }
            variables[i] = random;
        }
        a = variables[0];  b = variables[1];  c = variables[2];   d = variables[3];  g =variables[4];
        h = variables[5];  j = variables[6];   k = variables[7];   m = variables[8];  n =variables[9];
        o = variables[10];  p = variables[11];   q = variables[12];   r = variables[13];  s =variables[14];
        t = variables[15];  u = variables[16];   v = variables[17];   w = variables[18];  z =variables[19];
    }

function createQ(){
    //Set variables for question
    document.getElementById("q1").innerHTML ="\\("+a+"x^{"+b+"}(x^{"+c+"}y^{"+d+"})^{"+o+ "}= \t{} \\)";
    document.getElementById("q2").innerHTML ="\\(("+g+"x^{"+h+"}y^{"+j+"})^{"+k+"}(x^{"+m+"}y^{"+n+"})^{"+p+"}= \t{}\\)";
    document.getElementById("q3").innerHTML = "\\(\\frac{y^{"+q+"}(x^{"+r+"}y^{"+s+"})^{"+t+"}}{({"+u+"}x^{"+v+"}y^{"+w+"})^{"+z+"}}= \t{}\\)";
}