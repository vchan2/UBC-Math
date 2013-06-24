// javascript for precalculus tutorial section 7.5

function checkPrac1(f) {
// answer is (ln(d/a)-c)/b
    aans = roundTo(f.aAns1.value, 3);  // precision of 3 is arbitrary

    corr = roundTo((Math.log(d/a)-c)/b,3);

    if (aans != corr) {
        f.ansTxt1.value = 'Incorrect.  Try again!';
    } else {
        f.ansTxt1.value = 'Correct!  Try the next practice problem!';
    }
    return 1;
}

function checkPrac2(f) {
// answer is log(j/g)/(h-k)
    aans = roundTo(f.aAns2.value, 3);  // precision of 3 is arbitrary

    corr = roundTo(Math.log(j/g)*Math.LOG10E/(h-k),3);

    if (aans != corr) {
        f.ansTxt2.value = 'Incorrect.  Try again!';
    } else {
        f.ansTxt2.value = 'Correct!  Click "Refresh" or more practice!';
    }
    return 1;
}

