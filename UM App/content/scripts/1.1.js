//Script requires score.js script!!
//=================================

function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
    checkPrac3(f);
}

function checkPrac1(f) {
    var cAns = a*1.;
    var pAns = b*1. + c*o*1.;
    var qAns = d*o*1.;

// did someone put in leading spaces?
    var cVal = clearSpaces(f.cAns1.value);
// deal with possible fractions in ans1
    cVal = evalFrac(cVal);

    if ( ( cVal == cAns || ( cAns == 1 && cVal == '' ) ||
           ( cAns == -1 && cVal == '-' ) ) && 
         f.pAns1.value == pAns && f.qAns1.value == qAns ) {
	document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
    } else {
        var wrongAns = '';
        if ( cVal != cAns || ( cAns != 1 && cVal == '' ) ||
             ( cAns != -1 && cVal == '-' ) ) { wrongAns = 'c'; points-= 0.3;}
        if ( f.pAns1.value != pAns ) {  
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', p';
	    } else {
	        wrongAns = 'p';
            }
        }
        if ( f.qAns1.value != qAns ) { 
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', q';
	    } else {
	        wrongAns = 'q';
            }
	}
        var string = "Not quite... check your value(s) for " + wrongAns;
	document.getElementById("ansTxt1").setAttribute("value", string);
    }
}

function checkPrac2(f) {
    var cAns = roundTo(Math.pow(g,k), mathPrecision);
    var pAns = h*k*1. + m*p;
    var qAns = j*k*1. + n*p;

// did someone put in leading spaces?
    var cVal = clearSpaces(f.cAns2.value);
// deal with possible fractions in cVal
    cVal = evalFrac(cVal);

    if ( ( cVal == cAns || ( cAns == 1 && cVal == '' ) ||
           ( cVal == -1 && cVal == '-' ) ) && 
         f.pAns2.value == pAns && f.qAns2.value == qAns ) {
	document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
    } else {
        var wrongAns = '';
        if ( cVal != cAns || ( cAns != 1 && cVal == '' ) ||
             ( cAns != -1 && cVal == '-' ) ) { wrongAns = 'c'; points-= 0.3; }
        if ( f.pAns2.value != pAns ) {  
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', p';
	    } else {
	        wrongAns = 'p';
            }
        }
        if ( f.qAns2.value != qAns ) { 
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', q';
	    } else {
	        wrongAns = 'q';
            }
	}
        var string = "Not quite... check your value(s) for " + wrongAns;
	document.getElementById("ansTxt2").setAttribute("value", string);
    }
}

function checkPrac3(f) {
    var cAns = roundTo(Math.pow(u,-1.*z), mathPrecision);
    var pAns = r*t*1. - v*z;
    var qAns = q*1. + s*t*1. - w*z;

// did someone put in leading spaces?
    var cVal = clearSpaces(f.cAns3.value);
// deal with possible fractions in ans1
    cVal = evalFrac(cVal);

    if ( ( cVal == cAns || ( cAns == 1 && cVal == '' ) ||
           ( cVal == -1 && cVal == '-' ) ) && 
         f.pAns3.value == pAns && f.qAns3.value == qAns ) {
	document.getElementById("ansTxt3").setAttribute("value", "Correct!  Try another practice problem!");
    } else {
	var points = 1;
        var wrongAns = '';
        if ( cVal != cAns || ( cAns != 1 && cVal == '' ) ||
             ( cAns != -1 && cVal == '-' ) ) { wrongAns = 'c'; points-= 0.3;}
        if ( f.pAns3.value != pAns ) {  
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', p';
	    } else {
	        wrongAns = 'p';
            }
        }
        if ( f.qAns3.value != qAns ) { 
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', q';
	    } else {
	        wrongAns = 'q';
            }
	}
	var string = "Not quite... check your value(s) for " + wrongAns;
	document.getElementById("ansTxt3").setAttribute("value", string);
    }
}

