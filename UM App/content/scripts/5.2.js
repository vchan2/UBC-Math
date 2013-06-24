// javascript for precalculus tutorial section 5.2
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
}

function checkPrac1 (f) {
// answer is a(x-b)^2 + c
    var aans = f.aAns1.value;
    var bans = f.bAns1.value;
    var cans = f.cAns1.value;

    var errs = '';
    if ( aans != a && aans != '' ) {  // a is always 1
        errs = pracError(errs, 'a');
    }
    if ( bans != b ) {
        errs = pracError(errs, 'h');
    }
    if ( cans != c ) {
        errs = pracError(errs, 'k');
    }
    if ( errs != '' ) {
        document.getElementById("ansTxt1").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}

function checkPrac2 (f) {
// answer is h(x-j)^2 + k
    var aans = f.aAns2.value;
    var bans = f.bAns2.value;
    var cans = f.cAns2.value;

    var errs = '';
    if ( aans != h ) {
        errs = pracError(errs, 'a');
    }
    if ( bans != -1.*j ) {
        errs = pracError(errs, 'h');
    }
    if ( cans != k ) {
        errs = pracError(errs, 'k');
    }
    if ( errs != '' ) {
        document.getElementById("ansTxt2").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}
