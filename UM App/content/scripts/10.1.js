// javascript for precalculus tutorial section 10.1
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
}

function checkPrac1(f) {
// aans is b; bans is (ad+b)/(cd+1); cans = (g-b)/(a-gc)
    var aans = f.aAns1.value;
    var bans = evalFrac(f.bAns1.value);
    var cans = evalFrac(f.cAns1.value);

    var errs = '';
    if ( aans != b ) {
        errs = 'Check your y-intercept';
    }
    if ( bans != roundTo((a*d+1*b)/(c*d+1*1), mathPrecision) ) {
        if ( errs == '' ) {
	    errs = 'Check your 2nd answer';
        } else {
	    errs = errs + ', 2nd answer';
        }
    }
    if ( cans != roundTo((g-b)/(a-g*c), mathPrecision) ) {
        if ( errs == '' ) {
	    errs = 'Check your 3rd answer';
	} else {
	    errs = errs + ', and 3rd answer';
        }
    }

    if ( errs == '' ) {
	document.getElementById("ansTxt1").setAttribute("value", 'Correct!  Try the next practice problem!');
    } else {
	document.getElementById("ansTxt1").setAttribute("value", errs);
    }
    return 1;
}

function checkPrac2(f) {
// aans is 0, bans is j-h, c and dans are zero, and eans is hk+k(k-j)
    var aans = f.aAns2.value;  // x-intercept
    var bans = f.bAns2.value;  // x-intercept
    var cans = f.cAns2.value;  // y-intercept
    var dans = f.dAns2.value;  // y-intercept
    var eans = f.eAns2.value;  // f(k)

    var errs = '';
    if ( j-h == 0 ) {
        var ans2 = '';
    } else {
        var ans2 = j-h;
    }
    if ( aans != 0 && aans != ans2 ) {
        errs = 'Check your ';
        if ( bans != 0 && bans != ans2 ) {
            errs = errs + 'intercepts';
        } else {
            errs = errs + '1st intercept';
        }
    } else if ( aans == 0 ) {
        if ( bans != ans2 ) {
            errs = 'Check your 2nd intercept';
        }
    } else if ( aans == ans2 ) {
        if ( bans != 0 ) {
            errs = 'Check your 2nd intercept';
        }
    }

    if ( (ans2 == '' && (cans == '' && dans == '')) ||
         (ans2 != '' && (cans == '' || dans == '')) ||
         (ans2 == '' && (cans != 0 && dans != 0)) ||
	 (ans2 != '' && (cans != 0 || dans != 0)) ) {
        if ( errs == '' ) {
            errs = 'Check your y-values: recall at x-intercepts y=0';
        } else {
            errs = errs + ', y-values';
        }
    }

    if ( eans != h*k+k*(k-j) ) {
	if ( errs == '' ) {
	    errs = 'Check your last answer';
	} else {
	    errs = errs + ', and last answer';
	}
    }

    if ( errs == '' ) {
	document.getElementById("ansTxt2").setAttribute("value", 'Correct!  Click "Refresh" for more practice!');
    } else {
	document.getElementById("ansTxt2").setAttribute("value", errs);
	
    }
    return 1;
}