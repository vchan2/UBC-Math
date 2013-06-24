// javascript for precalculus tutorial section 7.6

function checkPrac1(f) {
// answer is y = (c-ag)/(b-ad) and x = g - dy
    var xans = evalFrac(f.aAns1.value);
    var yans = evalFrac(f.bAns1.value);

    var yvar = (c-a*g)/(b-a*d);
    var ycor = roundTo(yvar, mathPrecision);
    var xcor = roundTo((g-d*yvar), mathPrecision);

    var errs = '';
    if ( xans != xcor ) {
        errs = pracError(errs, 'x');
    }
    if ( yans != ycor ) {
        errs = pracError(errs, 'y');
    }
    if ( errs != '' ) {
        f.ansTxt1.value = errs;
    } else {
        f.ansTxt1.value = 'Correct!  Try the next practice problem!';
    }
    return 1;
}

function checkPrac2(f) {
// answers are x = -q, -m, and y = 0, m^2 - qm
    var xans1 = f.aAns2.value;
    var yans1 = f.bAns2.value;
    var xans2 = f.cAns2.value;
    var yans2 = f.dAns2.value;

    var xcor1 = -1*q;
    var xcor2 = -1*m;
    var ycor1 = 0;
    var ycor2 = m*(m-q);

    var errs = checkIt(xans1,xcor1,yans1,ycor1,xans2,xcor2,yans2,ycor2,
                       'x1','y1','x2','y2');

    if ( errs != '' ) {
        f.ansTxt2.value = errs;
    } else {
        f.ansTxt2.value = 'Correct!  Click "Refresh" for more practice!';
    }
    return 1;
}
