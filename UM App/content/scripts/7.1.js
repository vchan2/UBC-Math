// javascript for precalculus tutorial section 7.1
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
}

function checkPrac1(f) {
// answer is b^a
    var aans = f.aAns1.value;

    if ( aans != Math.pow(b,a) ) {
	document.getElementById("ansTxt1").setAttribute("value", "Not correct; try again.");
    } else {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}

function checkPrac2(f) {
// answer is -c or d/g
    var aans = evalFrac(f.aAns2.value);
    var bans = evalFrac(f.bAns2.value);

    var errs = '';
    if ( aans == -1*c ) {
        if ( bans != roundTo(d/g,mathPrecision) ) {
	    errs = 'Not correct; check your second answer.';
        }
    } else if ( aans == roundTo(d/g,mathPrecision) ) {
        if ( bans != -1*c ) {
	    errs = 'Not correct; check your second answer.';
        }
    } else {
        if ( bans == -1*c || bans == roundTo(d/g,mathPrecision) ) {
            errs = 'Not correct; check your first answer.';
        } else {
	    errs = 'Not correct; check both of your answers.';
        }
    }
    if ( errs != '' ) {
	document.getElementById("ansTxt2").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}