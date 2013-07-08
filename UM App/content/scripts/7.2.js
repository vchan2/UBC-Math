// javascript for precalculus tutorial section 7.2
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
}

function checkPrac1(f) {
// answer is (k-j-a+bg)/(1-bc-bd-h)
    var aans = evalFrac(f.aAns1.value);
    var corr = roundTo((k-j-a-b*d*g)/(1-b*c-b*d-h), mathPrecision);

    if ( aans != corr ) {
        document.getElementById("ansTxt1").setAttribute("value", 'Not correct; try again!');
    } else {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}

function checkPrac2(f) {
// answer is (mnpq+rstu)/((r-rs+rst)-(m+mn+mnp))
    var aans = evalFrac(f.aAns2.value);
    var corr = roundTo((m*n*p*q+1.*r*s*t*u)/(r-r*s+1.*r*s*t-m-m*n-m*n*p),
                       mathPrecision);

    if ( aans != corr ) {
        document.getElementById("ansTxt2").setAttribute("value", 'Not correct; try again!');
    } else {
        document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}

