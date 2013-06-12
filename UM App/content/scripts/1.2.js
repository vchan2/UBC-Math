function checkPracQ(f){
    clearScore();
    checkPrac1(f);
    checkPrac2(f);
    checkPrac3(f);
    checkPrac4(f);
    checkPrac5(f);
    updateScore();
}

function checkPrac1(f) {
    if ( f.iAns1.value == 16 ) {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    } else {
	document.getElementById("ansTxt1").setAttribute("value", "Oops...  Not quite; try again!");
    }
}

function checkPrac2(f) {
    if ( f.iAns2.value == 32 ) {
        document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    } else {
	document.getElementById("ansTxt2").setAttribute("value", "Oops...  Not quite; try again!");
    }
}

function checkPrac3(f) {
    var cAns = roundTo( a*Math.pow(d,j)*1., mathPrecision );
    var pAns = roundTo( (b/c)*1.+j*(g/h), mathPrecision );

// deal with possible fractions in ans1
    var cVal = evalFrac(f.cAns3.value);
    var pVal = evalFrac(f.pAns3.value);
    
    if ( cVal == cAns && pVal == pAns ) {
        document.getElementById("ansTxt3").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    } else {
	var points = 1;
        var wrongAns = '';
        if ( cVal != cAns ) { wrongAns = 'c'; points -= 0.5; }
        if ( pVal != pAns ) {  
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', p';
	    } else {
	        wrongAns = 'p';
            }
	    points -= 0.5;
        }
	var string = "Not quite... check your value(s) for " + wrongAns;
        document.getElementById("ansTxt3").setAttribute("value", string);
	if(points>0){
	    addPoint(points);
	}
    }
}

function checkPrac4(f) {
    var cAns = roundTo( k*1./Math.pow(r,u), mathPrecision );
    var pAns = roundTo( (m/n)*(p/q), mathPrecision );
    var qAns = roundTo( o*(p/q)-(s/t)*u, mathPrecision );
    console.log("c: "+cAns);
    console.log("p: "+pAns);
    console.log("q: "+qAns);
    
// deal with possible fractions
    var cVal = evalFrac(f.cAns4.value);
    var pVal = evalFrac(f.pAns4.value);
    var qVal = evalFrac(f.qAns4.value);
    
    if ( cVal == cAns && pVal == pAns && qVal == qAns ) {
        document.getElementById("ansTxt4").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    } else {
	var points = 1;
        var wrongAns = '';
        if ( cVal != cAns ) { wrongAns = 'c'; points -= 0.3; }
        if ( pVal != pAns ) {  
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', p';
	    } else {
	        wrongAns = 'p';
            }
	    points -= 0.3;
        }
        if ( qVal != qAns ) { 
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', q';
	    } else {
	        wrongAns = 'q';
            }
	    points -= 0.3;
	}
        var string = "Not quite... check your value(s) for " + wrongAns;
        document.getElementById("ansTxt4").setAttribute("value", string);
	if(points>0.1){
	    addPoint(points);
	}
    }
}

function checkPrac5(f) {
    var pAns = roundTo( ((v/w)*1.+(1/2)*1.-(bb/cc)*1.), mathPrecision );
    var qAns = roundTo( (z/aa)*1.-(1/3)*1., mathPrecision );

// deal with possible fractions in ans
    var pVal = evalFrac(f.pAns5.value);
    var qVal = evalFrac(f.qAns5.value);

    if ( pVal == pAns && qVal == qAns ) {
        document.getElementById("ansTxt5").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    } else {
	var points = 1;
        var wrongAns = '';
        if ( pVal != pAns ) { wrongAns = 'p'; points -= 0.5;}
        if ( qVal != qAns ) { 
	    if ( wrongAns != '' ) {
	        wrongAns = wrongAns + ', q';
	    } else {
	        wrongAns = 'q';
            }
	    points -= 0.5;
	}
        var string = "Not quite... check your value(s) for " + wrongAns;
        document.getElementById("ansTxt5").setAttribute("value", string);
	if(points > 0){
	    addPoint(points);
	}
    }
}

