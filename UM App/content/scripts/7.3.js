// javascript for precalculus tutorial section 7.3
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
}

function checkPrac1(f) {
// answers are x=-a and -c/b
    var aans = evalFrac(f.aAns1.value);
    var bans = evalFrac(f.bAns1.value);

    var errs = '';
    if ( aans == -1*a ) {
        if ( bans != roundTo(-1*c/b,mathPrecision) ) {
            errs = 'Not correct; check your second answer.';
        }
    } else if ( aans == roundTo(-1*c/b,mathPrecision) ) {
        if ( bans != -1*a ) {
            errs = 'Not correct; check your second answer.';
        }
    } else {
        if ( bans == -1*a || bans == roundTo(-1*c/b,mathPrecision) ) {
            errs = 'Not correct; check your first answer.';
        } else {
            errs = 'Not correct; check both of your answers.';
        }
    }
    if ( errs != '' ) {
        document.getElementById("ansTxt1").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}

function checkPrac2(f) {
// answers are x=1/m and -k              // originally this was supposed
    var aans = evalFrac(f.aAns2.value);  // to be x=1 and -k, but someone
    var bans = evalFrac(f.bAns2.value);  // made a small error...

    ans1 = roundTo(1./m,mathPrecision);
    var errs = '';
    if ( aans == ans1 ) {
        if ( bans != -1*k ) {
            errs = 'Not correct; check your second answer.';
        }
    } else if ( aans == -1*k ) {
        if ( bans != ans1 ) {
            errs = 'Not correct; check your second answer.';
        }
    } else {
        if ( bans == ans1 || bans == -1*k ) {
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
