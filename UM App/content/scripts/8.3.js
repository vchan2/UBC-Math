// javascript for precalculus tutorial section 8.3
function checkPracQ(f){
    checkPrac1(f);
}

function checkPrac1(f) {
// answer is 0 < x < min(b/a, c) and x > max(b/a, c)
//   a = m^2, b = 1, c = o^2, so b/a = 1/m^2 < c in all cases
    var aans = evalFrac(f.aAns1.value);
    var bans = evalFrac(f.bAns1.value);
    var cans = evalFrac(f.cAns1.value);
    var dans = evalFrac(f.dAns1.value);

    var low = roundTo(b/a, mathPrecision);
    var errs = '';
    if ( (bans != '' && dans != '') || (bans == '' && dans == '') ) {
        errs = 'Incorrect; recheck your calculation';
    } else {
        if ( bans == '' ) {
	    var achk = aans;
	    var cchk = cans;
	    var dchk = dans;
	    var one  = '1st';
	    var two  = '2nd';
        } else {
	    var achk = cans;
	    var cchk = aans;
	    var dchk = bans;
	    var one  = '2nd';
	    var two  = '1st';
        }
	if ( achk != c ) {
	    errs = 'Error in ' + one + ' inequality';
	} 
	if ( (cchk != '0') && (dchk == low) ) {
	    if ( errs != '' ) {
	        errs = errs + ', and ' + two + ' (think: the radical)';
	    } else {
		errs = 'Error in ' + two + ' inequality (think: the radical)';
	    }
        } else if ( (cchk != 0) || (dchk != low) ) {
	    if ( errs != '' ) {
	        errs = errs + ', and ' + two;
	    } else {
		errs = 'Error in your ' + two + ' inequality';
	    }
	}
    }
    if ( errs == '' ) {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
    } else {
        document.getElementById("ansTxt1").setAttribute("value", errs);
    }
    return 1;
}
