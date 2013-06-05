function checkPrac1(f) {
    if ( f.iAns1.value == 16 ) {
        f.ansTxt1.value = "Correct!  Try another practice problem!";
    } else {
        f.ansTxt1.value = "Oops...  Not quite; try again!";
    }
}

function checkPrac2(f) {
    if ( f.iAns2.value == 32 ) {
        f.ansTxt2.value = "Correct!  Try another practice problem!";
    } else {
        f.ansTxt2.value = "Oops...  Not quite; try again!";
    }
}

function checkPrac3(f) {
    var cAns = roundTo( a*Math.pow(d,j)*1., mathPrecision );
    var pAns = roundTo( (b/c)*1.+j*(g/h), mathPrecision );

// deal with possible fractions in ans1
    var cVal = evalFrac(f.cAns3.value);
    var pVal = evalFrac(f.pAns3.value);

    if ( cVal == cAns && pVal == pAns ) {
        f.ansTxt3.value="Correct!  Try another practice problem!";
    } else {
        var wrongAns = '';
        if ( cVal != cAns ) { wrongAns = 'c'; }
        if ( pVal != pAns ) {  
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', p';
	    } else {
	        wrongAns = 'p';
            }
        }
        f.ansTxt3.value="Not quite... check your value(s) for " + wrongAns;
    }
}

function checkPrac4(f) {
    var cAns = roundTo( k*1./Math.pow(r,u), mathPrecision );
    var pAns = roundTo( (m/n)*(p/q), mathPrecision );
    var qAns = roundTo( o*(p/q)-(s/t)*u, mathPrecision );

// deal with possible fractions
    var cVal = evalFrac(f.cAns4.value);
    var pVal = evalFrac(f.pAns4.value);
    var qVal = evalFrac(f.qAns4.value);

    if ( cVal == cAns && pVal == pAns && qVal == qAns ) {
        f.ansTxt4.value="Correct!  Try another practice problem!";
    } else {
        var wrongAns = '';
        if ( cVal != cAns ) { wrongAns = 'c'; }
        if ( pVal != pAns ) {  
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', p';
	    } else {
	        wrongAns = 'p';
            }
        }
        if ( qVal != qAns ) { 
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', q';
	    } else {
	        wrongAns = 'q';
            }
	}
        f.ansTxt4.value="Not quite... check your value(s) for " + wrongAns;
    }
}

function checkPrac5(f) {
    var pAns = roundTo( ((v/w)*1.+(1/2)*1.-(bb/cc)*1.), mathPrecision );
    var qAns = roundTo( (z/aa)*1.-(1/3)*1., mathPrecision );

// deal with possible fractions in ans
    var pVal = evalFrac(f.pAns5.value);
    var qVal = evalFrac(f.qAns5.value);

    if ( pVal == pAns && qVal == qAns ) {
        f.ansTxt5.value="Correct!  Click Refresh for more practice!";
    } else {
        var wrongAns = '';
        if ( pVal != pAns ) { wrongAns = 'p'; }
        if ( qVal != qAns ) { 
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', q';
	    } else {
	        wrongAns = 'q';
            }
	}
        f.ansTxt5.value="Not quite... check your value(s) for " + wrongAns;
    }
}

