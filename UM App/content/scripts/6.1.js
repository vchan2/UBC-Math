// javascript for precalculus tutorial section 6.1
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
    checkPrac3(f);
}

function checkPrac1(f) {
// answer is (a-b) + (1-b) ln(x)
    var aans = f.aAns1.value;
    var bans = f.bAns1.value;

    var errs = '';
    if ( aans != (a-b) || (aans != '' && (a-b)==1) ) {
        errs = pracError(errs, 'a');
    }
    if ( bans != (1-b) || (bans != '' && (1-b)==1) ) {
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
// answer is ln(cd/(2g^h))
    var aval = evalFrac(f.aAns2.value);
    var corr = roundTo(c*d/(2*Math.pow(g,h)), mathPrecision);

    if ( aval != corr ) {
        var errs = 'Not correct; try again.';
        document.getElementById("ansTxt2").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}

function checkPrac3(f) {
// answer is j + (k-m) log(x)
    var aans = f.aAns3.value;
    var bans = f.bAns3.value;

    var errs = '';
    if ( aans != j || ( aans != '' && j == 1 ) ) {
        errs = pracError(errs,'a');
    }
    if ( bans != (k-m) || ( bans != '' && (k-m) == 1 ) ) {
        errs = pracError(errs,'b');
    }
    if ( errs != '' ) {
        document.getElementById("ansTxt3").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt3").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}
