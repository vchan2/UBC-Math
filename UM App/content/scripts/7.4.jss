// javascript for precalculus tutorial section 7.4

function checkPrac1(f) {
// answers are x=-c and b/a, unless b/a makes the denominator
//    hx - j = (ac - b - 1)x - (cb - 1) = 0
    var aans = evalFrac(f.aAns1.value);
    var bans = evalFrac(f.bAns1.value);

    var errs = '';
    if ( b*c-b*b/a-b/a-c*b+1 == 0 ) {  // case of zero denominator
        if ( (aans == -1*c && bans == '') || (aans == '' && bans == -1*c) ) {
	    errs = '';
        } else {
            if ( aans == -1*c && bans != '' ) {
	        errs = 'Not correct; check your second answer.';
            } else if ( aans == '' && bans != -1*c ) {
	        errs = 'Not correct; check your second answer.';
            } else if ( bans == -1*c && aans != '' ) {
	        errs = 'Not correct; check your first answer.';
            } else if ( bans == '' && aans != -1*c ) {
	        errs = 'Not correct; check your first answer.';
            } else {
                errs = 'Not correct; check both of your answers.';
            }
        }
    } else {
        if ( aans == -1*c ) {
            if ( bans != roundTo(b/a,mathPrecision) ) {
                errs = 'Not correct; check your second answer.';
            }
        } else if ( aans == roundTo(b/a,mathPrecision) ) {
            if ( bans != -1*c ) {
                errs = 'Not correct; check your second answer.';
            }
        } else {
            if ( bans == -1*c || bans == roundTo(b/a,mathPrecision) ) {
                errs = 'Not correct; check your first answer.';
            } else {
                errs = 'Not correct; check both of your answers.';
            }
        }
    }
    if ( errs != '' ) {
        f.ansTxt1.value = errs;
    } else {
        f.ansTxt1.value = 'Correct!  Try the next practice problem!';
    }
    return 1;
}

function checkPrac2(f) {
// answers are x=y and z
    var aans = evalFrac(f.aAns2.value);
    var bans = evalFrac(f.bAns2.value);

    var errs = '';
    if ( aans == y ) {
	if ( bans != z ) {
            errs = 'Not correct; check your second answer.';
        }
    } else if ( aans == z ) {
        if ( bans != y ) {
            errs = 'Not correct; check your second answer.';
        }
    } else {
        if ( bans == y || bans == z ) {
            errs = 'Not correct; check your first answer.';
        } else {
            errs = 'Not correct; check both of your answers.';
        }
    }
    if ( errs != '' ) {
        f.ansTxt2.value = errs;
    } else {
        f.ansTxt2.value = 'Correct!  Click "Refresh" for more practice!';
    }
    return 1;
}

