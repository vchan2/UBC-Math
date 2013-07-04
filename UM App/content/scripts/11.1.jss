// javascript for precalculus tutorial section 11.1

function checkPrac1(f) {
// answers are (0,b) and (-b/a,0)
    var aans = evalFrac(f.aAns1.value);
    var bans = evalFrac(f.bAns1.value);
    var cans = evalFrac(f.cAns1.value);
    var dans = evalFrac(f.dAns1.value);

    var xint = roundTo(-1*b/a, mathPrecision);

    var errs = '';
    if ( aans != 0 ) {
        errs = 'x ';
    }
    if ( bans != b ) {
        if ( errs != '' ) {
            errs = errs + 'and y ';
        } else {
	    errs = 'y ';
        }
    }
    if ( errs != '' ) {
        errs = errs + 'coord of P ';
    }

    var errs2 = '';
    if ( cans != xint ) {
        if ( errs != '' ) {
	    errs2 = errs2 + 'and x ';
        } else { 
	    errs2 = 'x ';
        }
    }
    if ( dans != 0 ) {
        if ( errs != '' || errs2 != ''  ) {
	    errs2 = errs2 + 'and y ';
        } else {
	    errs2 = 'y ';
        }
    }
    if ( errs2 != '' ) {
        errs2 = errs2 + 'coord of Q ';
    }
    if ( errs != '' || errs2 != '' ) {
        errs = 'Error in ' + errs + errs2;
    }

    if ( errs != '' ) {
        f.ansTxt1.value = errs;
    } else {
        f.ansTxt1.value = 'Correct!  Try the next practice problem!';
    }
    return 1;
}

function checkPrac2(f) {
// answers are (-m/c,0), (0,e) and (o,0)
    var aans = evalFrac(f.aAns2.value);
    var bans = evalFrac(f.bAns2.value);
    var cans = evalFrac(f.cAns2.value);
    var dans = evalFrac(f.dAns2.value);
    var eans = evalFrac(f.eAns2.value);
    var fans = evalFrac(f.fAns2.value);

    var xint1 = roundTo(-1*m/c, mathPrecision);

    var errs = '';
    if ( aans != xint1 ) {
        errs = 'x ';
    }
    if ( bans != 0 ) {
        if ( errs != '' ) {
            errs = errs + 'and y ';
        } else {
	    errs = 'y ';
        }
    }
    if ( errs != '' ) {
        errs = errs + 'coord of P ';
    }

    var errs2 = '';
    if ( cans != 0 ) {
        if ( errs != '' ) {
	    errs2 = 'and x ';
        } else { 
	    errs2 = 'x ';
        }
    }
    if ( dans != -1*e ) {
        if ( errs != '' || errs2 != ''  ) {
	    errs2 = errs2 + 'and y ';
        } else {
	    errs2 = 'y ';
        }
    }
    if ( errs2 != '' ) {
        errs2 = errs2 + 'coord of Q ';
    }

    var errs3 = '';
    if ( eans != o ) {
        if ( errs != '' || errs2 != '' ) {
	    errs3 = 'and x ';
        } else { 
	    errs3 = 'x ';
        }
    }
    if ( fans != 0 ) {
        if ( errs != '' || errs2 != '' || errs3 != ''  ) {
	    errs3 = errs3 + 'and y ';
        } else {
	    errs3 = 'y ';
        }
    }
    if ( errs3 != '' ) {
        errs3 = errs3 + 'coord of R ';
    }

    if ( errs != '' || errs2 != '' || errs3 != '' ) {
        errs = 'Error in ' + errs + errs2 + errs3;
    }

    if ( errs != '' ) {
        f.ansTxt2.value = errs;
    } else {
        f.ansTxt2.value = 'Correct!  Try the next practice problem!';
    }
    return 1;
}

function checkPrac3(f) {
// answers are (-h,-h^2+k) and (l,hl+k)
    var aans = f.aAns3.value;
    var bans = f.bAns3.value;
    var cans = f.cAns3.value;
    var dans = f.dAns3.value;

    var errs = '';
    if ( aans != -1.*h ) {
        errs = 'x ';
    }
    if ( bans != -1.*h*h+k ) {
        if ( errs != '' ) {
            errs = errs + 'and y ';
        } else {
	    errs = 'y ';
        }
    }
    if ( errs != '' ) {
        errs = errs + 'coord of P ';
    }

    var errs2 = '';
    if ( cans != l ) {
        if ( errs != '' ) {
	    errs2 = 'and x ';
        } else { 
	    errs2 = 'x ';
        }
    }
    if ( dans != h*l+1.*k ) {
        if ( errs != '' || errs2 != ''  ) {
	    errs2 = errs2 + 'and y ';
        } else {
	    errs2 = 'y ';
        }
    }
    if ( errs2 != '' ) {
        errs2 = errs2 + 'coord of Q ';
    }

    if ( errs != '' || errs2 != '' ) {
        errs = 'Error in ' + errs + errs2;
    }

    if ( errs != '' ) {
        f.ansTxt3.value = errs;
    } else {
        f.ansTxt3.value = 'Correct!  Click "Refresh" for more practice!';
    }
    return 1;
}

