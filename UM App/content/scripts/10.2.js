// javascript for precalculus tutorial section 10.2
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
}

function checkPrac1(f) {
// answer is (f(g)-f(d))/(g-d)
    var aans = evalFrac(f.aAns1.value);
    aans = roundTo(aans, mathPrecision);  // in case they enter a decimal

    var fa = (a*d+1*b)/(c*d+1*1);
    var fb = (a*g+1*b)/(c*g+1*1);
    var corans = roundTo((fb-fa)/(g-d),mathPrecision);
    if ( aans != corans ) {
        document.getElementById("ansTxt1").setAttribute("value", 'Not quite; recheck your answer.');
    } else {
        document.getElementById("ansTxt1").setAttribute("value", 'Correct!  Try the next practice problem!');
    }
    return 1;
}

function checkPrac2(f) {
// answer is (f(m)-f(k))/(m-k)
    var aans = evalFrac(f.aAns2.value);

    var fa = h*k + k*(k-j);
    var fb = h*m + m*(m-j);
    var corans = roundTo((fb-fa)/(m-k),mathPrecision);

    if ( aans != corans ) {
        document.getElementById("ansTxt2").setAttribute("value", 'Not quite; recheck your answer.');
    } else {
        document.getElementById("ansTxt2").setAttribute("value", 'Correct!  Click "Refresh" for more practice!');
    }
    return 1;
}

