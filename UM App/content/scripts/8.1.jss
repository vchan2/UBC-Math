// javascript for precalculus tutorial section 8.1

function checkPrac1(f) {
// answer is x < (dg-h-bc)/(a-b-d), or >, depending on if a-b-d > 0 or < 0
    var aans = evalFrac(f.aAns1.value);
    var bans = evalFrac(f.bAns1.value);

    var val = roundTo((d*g-h-b*c)/(a-b-d), mathPrecision);
    var errs = '';
    if ( a - b - d > 0 ) {
        acor = val;
	bcor = 'x';
        if ( aans != val || bans != 'x' ) {
	    if ( aans == 'x' && bans == val ) {
	        errs = 'Not quite: check the direction of your inequality.';
	    } else {
	        if ( bans == 'x' ) {
	            errs = 'Not quite: check the value in your inequality.';
                } else {
		    errs = 'Incorrect: recheck your inequality.';
                }
            }
        }
    } else {
        acor = 'x'; 
	bcor = val;
        if ( bans != val || aans != 'x' ) {
	    if ( bans == 'x' && aans == val ) {
	        errs = 'Not quite: check the direction of your inequality.';
	    } else {
	        if ( aans == 'x' ) {
	            errs = 'Not quite: check the value in your inequality.';
                } else {
		    errs = 'Incorrect: recheck your solution.';
                }
            }
        }
    }

    if ( errs == '' ) {
        f.ansTxt1.value = 'Correct!  Try the other practice problem!';
    } else {
        f.ansTxt1.value = errs;
    }
    return 1;
}

function checkPrac2(f) {
// answer is x <= (nop-jkm)/(1+n+jk-j-no)  (variables are chosen to 
//    select this direction of the inequality)
    var vans = evalFrac(f.aAns2.value);
    var xans = evalFrac(f.bAns2.value); 

    var val = roundTo((n*o*p-j*k*m)/(1+n+j*k-j-n*o), mathPrecision);
    var errs = '';
    if ( vans == 'x' ) {
        if ( xans == val ) {
	    errs = 'Not quite: check the direction of your inequality.';
	} else {
	    errs = 'Incorrect: recheck your solution.';
	}
    } else if ( vans == val ) {
        if ( xans != 'x' ) {
	    errs = 'Huh?  Is your independent variable x?';
        }
    } else {  // vans is neither val nor x
        errs = 'Incorrect: recheck your solution.';
    }

    if ( errs == '' ) {
        f.ansTxt2.value = 'Correct!  Click "Refresh" for more practice!';
    } else {
        f.ansTxt2.value = errs;
    }
    return 1;
}