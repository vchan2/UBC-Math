// javascript for precalculus tutorial section 7.2

function checkPrac1(f) {
// answer is (k-j-a+bg)/(1-bc-bd-h)
    var aans = evalFrac(f.aAns1.value);
    var corr = roundTo((k-j-a-b*d*g)/(1-b*c-b*d-h), mathPrecision);

    if ( aans != corr ) {
        f.ansTxt1.value = 'Not correct; try again!';
    } else {
        f.ansTxt1.value = 'Correct!  Try the next practice problem!';
    }
    return 1;
}

function checkPrac2(f) {
// answer is (mnpq+rstu)/((r-rs+rst)-(m+mn+mnp))
    var aans = evalFrac(f.aAns2.value);
    var corr = roundTo((m*n*p*q+1.*r*s*t*u)/(r-r*s+1.*r*s*t-m-m*n-m*n*p),
                       mathPrecision);

    if ( aans != corr ) {
        f.ansTxt2.value = 'Not correct; try again!';
    } else {
        f.ansTxt2.value = 'Correct!  Click "Refresh" for more practice!';
    }
    return 1;
}

