var mathPrecision = 4;  // number of decimal places to check answers to
var fracReg = /^\(?-?\(?(0?\.)?\d+\)?\/\(?\d+\)?$/;
var expReg = /\(?([0-9]+)\)?\^\(?(-?[0-9]+)\)?/;

var smallPrimes = new Array(2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,
                            67,71,73,79,83,89,97);
var smallPrimeString = ",2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61," +
                       "67,71,73,79,83,89,97,";

function scrollToLoc(ref) {
    if ( ref ) {
        if ( navigator.appName == "Netscape" && 
	     parseFloat(navigator.appVersion) < 5 ) {
            var xpos = document.anchors[ref].x;
            var ypos = document.anchors[ref].y;
        } else {
	    var xpos = document.anchors[ref].offsetLeft;
	    var ypos = document.anchors[ref].offsetTop;
        }
        if ( window.scrollTo == null ) { // cover for anyone
	    window.scroll(xpos,ypos);    //   lacking js1.2
        } else {
	    window.scrollTo(xpos,ypos);
        }
    }
    return 1;
}

function clearSpaces(string) {
    var str = new String(string);
    str.replace(/\s*/g,"");
    return(str);
}

function roundTo(x,n) {
    var tens = Math.pow(10,n);
    return( Math.round( x*tens ) / tens );
}

function evalFrac(x) {
    if ( fracReg.test(x) ) {
        return( roundTo( eval("1.*" + x), mathPrecision ) );
    } else {
        return x;
    }
}

function clearExp(x) {  // look for expressions of the form a^b & eval them
    if ( expReg.test(x) ) {
        var n = 0;  var m;
        while ( (m = expReg.exec(x)) != null && n < 2 ) {  // only replace 2ce
	    var val = Math.pow(m[1],m[2]);
	    var xString = new String(x);       // untyped stuff only goes so
	    x = xString.replace(expReg, val);  //   far; introduce string to
	    n++;                               //   get replace function
	}
	return x;
    } else {
        return x;
    }
}

function pracError(err, v) { // create or append error message
    if ( err != '' ) {
        err += ', and ' + v;
    } else {
        err = 'Not quite; check your value(s) for ' + v;
    }
    return err;
}

// function to check ordered pairs of answers (an1, an3) and (an2, an4)
function checkIt ( in1, an1, in2, an2, in3, an3, in4, an4, v1, v2, v3, v4 ) {
// catch things that might be 1
    if ( in1 == '' && ( an1 == 1 || an3 == 1) ) { in1 = 1; }
    if ( in2 == '' && ( an2 == 1 || an4 == 1) ) { in2 = 1; }
    if ( in3 == '' && ( an1 == 1 || an3 == 1) ) { in3 = 1; }
    if ( in4 == '' && ( an2 == 1 || an4 == 1) ) { in4 = 1; }
// then check the answers
    if ( in1 == an1 || in2 == an2 ) {
        var cerrs = sCheckIt(in1, an1, in2, an2, in3, an3, in4, an4, v1, v2, 
                             v3, v4 );
	if ( cerrs != '' && an1 == an3 ) {
	    var cerrs2 = sCheckIt(in1, an3, in2, an4, in3, an1, in4, an2, v1, 
                                  v2, v3, v4 );
	    if ( cerrs2 == '' ) { cerrs = ''; }
        }
    } else if ( in1 == an3 || in2 == an4 ) {
        var cerrs = sCheckIt(in1, an3, in2, an4, in3, an1, in4, an2, v1, v2, 
                             v3, v4 );
    } else {
        var cerrs = v1 + ", " + v2 + ", " + v3 + ", " + v4;
    }
    return cerrs;
}

function sCheckIt ( in1, an1, in2, an2, in3, an3, in4, an4, v1, v2, v3, v4 ) {
    var serrs = "";
    if ( in1 != an1 ) { serrs = v1; }
    if ( in2 != an2 ) {
        if ( serrs == "" ) { serrs = v2; }
        else               { serrs += ", " + v2; }
    }
    if ( in3 != an3 ) {
        if ( serrs == "" ) { serrs = v3; }
        else               { serrs += ", " + v3; }
    }
    if ( in4 != an4 ) {
        if ( serrs == "" ) { serrs = v4; }
        else               { serrs += ", " + v4; }
    }
    return serrs;
}

function reduceFrac( num, den ) {
// reduce the fraction num/den to lowest terms, return reduced numerator
// and denominator as an array.  if num/den < 0, num is returned as 
// negative.

    var sign = Math.round(num*den/Math.abs(num*den)); // round to be sure
    num = Math.abs(num);                              // to get 1
    den = Math.abs(den);

    var denFacs = getFactors( den );
    if ( denFacs.length == 1 ) {
        var frac = num/den;
        if ( frac == Math.floor(frac) ) {
	    return( new Array(sign*frac, 1) );
        } else {
            return( new Array(sign*num, den) );
        }
    } else {
        var numFacs = getFactors( num );
        den = 1;
        for ( var j=0; j<denFacs.length; j++ ) {
	    var cancel = 0;
	    for ( var i=0; i<numFacs.length; i++ ) {
	        if ( denFacs[j] == numFacs[i] ) {
		    numFacs.splice(i,1);
		    cancel = 1;
		    break;
		}
	    }
	    if ( cancel == 0 ) {
		den = den*denFacs[j];
	    }
        }
	num = 1;
	for ( i=0; i<numFacs.length; i++ ) {
	    num = num*numFacs[i];
	}
	return( new Array(sign*num, den) );
    }
}

function getFactors( n ) {
    var nReg = new RegExp("," + n + ",");
    if ( n >= smallPrimes[smallPrimes.length-1] || n < 4 ||
         nReg.test(smallPrimeString) ) {
        return( [ n ] );
    } else {
        var top = n/2.;
        var factors = new Array();
        var i = 0;
        while ( i < smallPrimes.length && smallPrimes[i] < top ) {
	    var frac;
	    while ( frac=n/smallPrimes[i], frac==Math.floor(frac) ) {
	        factors[factors.length] = smallPrimes[i];
	        var testReg = new RegExp("," + frac + ",");
	        if ( testReg.test(smallPrimeString) ) {
                    factors[factors.length] = frac;
                    return( factors );
                }
                n = frac;
            }
            i++;
        }
    }
}