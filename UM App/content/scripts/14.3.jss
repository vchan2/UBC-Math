// javascript for precalculus tutorial section 14.3

var piIn = /pi/;

function unpi(s) {
    st = new String(s);
    st = st.replace(/pi/,'');
    if ( st == '' ) {
        return 1;
    } else {
        return st;
    }
}

function checkPrac1(f) {
    var aAns = unpi(f.cirarea.value);
    var cAns = unpi(f.circirc.value);

    var errs = '';
    if ( aAns != a*a || ! piIn.test(f.cirarea.value) ) {
        errs = 'Error in area';
    }
    if ( cAns != b || ! piIn.test(f.circirc.value) ) {
        if ( errs == '' ) {
	    errs = 'Error in circumference';
        } else {
	    errs = errs + ' and circumference';
        }
    }
    if ( errs == '' ) {
        f.ansTxt1.value = 'Correct!  Try the next problem!';
    } else {
        f.ansTxt1.value = errs;
    }
    return 1;
}

function checkPrac2(f) {
    var aAns = unpi(f.recarea.value);
    var cAns = unpi(f.reccirc.value);

    var errs = '';
    if ( aAns != c*d || piIn.test(f.recarea.value) ) {
        errs = 'Error in area';
    }
    if ( cAns != 2*c+2*d || piIn.test(f.reccirc.value) ) {
        if ( errs == '' ) {
	    errs = 'Error in perimeter';
        } else {
	    errs = errs + ' and perimeter';
        }
    }
    if ( errs == '' ) {
        f.ansTxt2.value = 'Correct!  Try the next problem!';
    } else {
        f.ansTxt2.value = errs;
    }
    return 1;
}

function checkPrac3(f) {
    var aAns = evalFrac(unpi(f.triarea.value));

    if ( aAns != e*g/2 || piIn.test(f.triarea.value) ) {
        f.ansTxt3.value = 'Error in area';
    } else {
        f.ansTxt3.value = 'Correct!  Try the next problem!';
    }
    return 1;
}

function checkPrac4(f) {
    var aAns = evalFrac(unpi(f.conevol.value));

    if ( aAns != roundTo(h*h*j/3,mathPrecision) || 
         ! piIn.test(f.conevol.value) ) {
        f.ansTxt4.value = 'Error in volume';
    } else {
        f.ansTxt4.value = 'Correct!  Try the next problem!';
    }
    return 1;
}

function checkPrac5(f) {
    var aAns = evalFrac(unpi(f.cylivol.value));

    if ( aAns != k*k*l || ! piIn.test(f.cylivol.value) ) {
        f.ansTxt5.value = 'Error in volume';
    } else {
        f.ansTxt5.value = 'Correct!  Try the next problem!';
    }
    return 1;
}

function checkPrac6(f) {
    var aAns = evalFrac(unpi(f.sphevol.value));

    if ( aAns != roundTo(4*m*m*m/3,mathPrecision) || 
         ! piIn.test(f.sphevol.value) ) {
        f.ansTxt6.value = 'Error in volume';
    } else {
        f.ansTxt6.value = 'Correct!  Try the next problem!';
    }
    return 1;
}

function checkPrac7(f) {
    var dist = new String(f.distance.value);
    var slop = evalFrac(f.slope.value);

    if ( dist.match(/sqrt/) != null || dist.match(/\//) != null ) {
        dist = dist.replace(/sqrt/,'Math.sqrt');
        dist = roundTo(eval(dist), mathPrecision);
    }

    var cdist = Math.sqrt((n-p)*(n-p)+(o-q)*(o-q));

    var errs = '';
    if ( dist != roundTo(cdist,mathPrecision) ) {
        errs = 'Error in distance';
    } 
    if ( slop != roundTo((q-o)/(p-n),mathPrecision) ) {
        if ( errs != '' ) {
	    errs = errs + ' and slope';
        } else {
	    errs = 'Error in slope';
	}
    }

    if ( errs != '' ) {
        f.ansTxt7.value = errs;
    } else {
        f.ansTxt7.value = 'Correct!  Try the next problem!';
    }
    return 1;
}

function checkPrac8(f) {
    var dist = new String(f.distance2.value);
    var slop = f.slope2.value;

    if ( dist.match(/sqrt/) != null || dist.match(/\//) != null ) {
        dist = dist.replace(/sqrt/,'Math.sqrt');
        dist = roundTo(eval(dist), mathPrecision);
    }
    var cdist = Math.abs(t-r);

    if ( slop.match(/undef/) != null ) {
        slop = evalFrac(slop);
    }

    var errs = '';
    if ( dist != roundTo(cdist,mathPrecision) ) {
        errs = 'Error in distance';
    } 
    if ( slop != 0 ) {  // difference in y values is always 0
        if ( errs != '' ) {
	    errs = errs + ' and slope';
        } else {
	    errs = 'Error in slope';
	}
    }

    if ( errs != '' ) {
        f.ansTxt8.value = errs;
    } else {
        f.ansTxt8.value = 'Correct!  Click "Refresh" for more practice!';
    }
    return 1;
}
