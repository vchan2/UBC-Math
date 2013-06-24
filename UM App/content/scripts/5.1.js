// javascript for precalculus tutorial section 5.1
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
}


function checkPrac1(f) {
// answer is a^(bc) (a^b)^x
    var aans = evalFrac(f.aAns1.value);
    var bans = evalFrac(f.bAns1.value);

    var correctA = roundTo(Math.pow(a,b*c), mathPrecision);
    var correctB = roundTo(Math.pow(a,b), mathPrecision);

    var errs = '';
    if ( aans != correctA ) {
        errs = pracError(errs, 'a');
    }
    if ( bans != correctB ) {
        errs = pracError(errs, 'b');
    }
    if ( errs != '' ) {
        document.getElementById("ansTxt1").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}

function checkPrac2(f) {
// answer is (d/k) x^(g-m) + (h/k) x^(-m + 1/j)
    var aans = evalFrac(f.aAns2.value);
    var mans = evalFrac(f.pAns2.value);
    var bans = evalFrac(f.bAns2.value);
    var nans = evalFrac(f.qAns2.value);

    var correctA = roundTo(d/k, mathPrecision);
    var correctM = g-m;
    var correctB = roundTo(h/k, mathPrecision);
    var correctN = roundTo(-m+1./j, mathPrecision);

    var errs = checkIt( aans, correctA, mans, correctM, bans,
                        correctB, nans, correctN, 'a', 'm', 'b', 'n' );

//    var errs = '';
//    if ( aans != correctA && (aans != '' && correctA != 1) ) {
//        errs = pracError(errs, 'a');
//    }
//    if ( mans != correctM && (mans != '' && correctM != 1) ) {
//        errs = pracError(errs, 'm');
//    }
//    if ( bans != correctB && (bans != '' && correctB != 1) ) {
//        errs = pracError(errs, 'b');
//    }
//    if ( nans != correctN && (nans != '' && correctN != 1) ) {
//        errs = pracError(errs, 'n');
//    }
    if ( errs != '' ) {
        var string = "Not quite: check your value(s) for " + errs;
        document.getElementById("ansTxt2").setAttribute("value", string);
    } else {
        document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}