// javascript for precalculus tutorial section 8.2

function checkPrac1(f) {
// answer is a<x<b
    var aans = f.aAns1.value;
    var bans = f.bAns1.value;
    var cans = f.cAns1.value;
    var dans = f.dAns1.value;

    var errs = '';
    if ( (cans != '' || dans != '') && (aans != '' || bans != '') ) {
        errs = 'Only fill in one of the two answers!';
    } else {
        if ( cans != '' || dans != '' ) {
	    errs = 'Incorrect.  Are you finding the right inequality?';
        } else {
	    if ( aans != -1*b ) {
	        errs = 'Not quite: check your first value';
            }
	    if ( bans != a ) {
	        if ( errs != '' ) {
		    errs = 'Check again: both of your values are incorrect.';
		} else {
		    errs = 'Not quite: check your second value';
                }
            }
        }
    }
    if ( errs != '' ) {
        f.ansTxt1.value = errs;
    } else {
        f.ansTxt1.value = 'Correct!  Try the next practice problem.';
    }
    return 1;
}

function checkPrac2(f) {
// answer is -j/h < x < 0 and x > k
    var aans = evalFrac(f.aAns2.value);
    var bans = evalFrac(f.bAns2.value);
    var cans = evalFrac(f.cAns2.value);
    var dans = evalFrac(f.dAns2.value);

    var errs = '[1] < x < [2], and [3] < [4]';
    if ( aans != roundTo(-1*j/h, mathPrecision) ) {
        errs = errs.replace(/1/, "*");
    }
    if ( bans != 0 ) {
        errs = errs.replace(/2/, "*");
    }
    if ( cans != k ) {
        errs = errs.replace(/3/, "*");
    }
    if ( dans != 'x' ) {
        errs = errs.replace(/4/, "*");
    }
    errs = errs.replace( /[0-9]/g, " " );
    if ( errs.match(/\*/) != null ) {
        f.ansTxt2.value='Hmm...  Check "*"s: ' + errs;
    } else {
        f.ansTxt2.value='Correct!  Click "Refresh" for more practice!';
    }
    return 1;
}
