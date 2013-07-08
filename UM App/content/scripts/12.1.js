// javascript for precalculus tutorial section 11.1
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
    checkPrac3(f);
}

function checkPrac1(f) {
// answer is a
    var aans = f.aAns1.value;

    if ( aans != a ) {
	document.getElementById("ansTxt1").setAttribute("value", "That's not quite right; try again.");
    } else {
	document.getElementById("ansTxt1").setAttribute("value", 'Correct!  Try the next practice problem!');
    }
    return 1;
}

function checkPrac2(f) {
// answer is c h + 2cg + d
    var aans = f.aAns2.value;
    var bans = f.bAns2.value;

    var errs = '';
    if ( aans != c && ( c==1 && aans != '') ) {
        errs = 'Error in your h-coeff ';
    }

    if ( bans != 2*c*g+1*d ) {
        if ( errs != '' ) {
	    errs = errs + 'and 2nd term';
        } else {
	    errs = 'Error in your 2nd term';
        }
    }

    if ( errs != '' ) {
        document.getElementById("ansTxt2").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt2").setAttribute("value", 'Correct!  Try the next practice problem!');
    }
    return 1;
}

function checkPrac3(f) {
// answer is h + (j/k) x^(-1)
    var aans = f.aAns3.value;
    var bans = evalFrac(f.bAns3.value);
    var pans = f.pAns3.value;

    var errs = '';
    if ( aans != h ) {
        errs = 'Error in 1st term';
    } 
    if ( bans != roundTo(j/k,mathPrecision) ) {
        if ( errs == '' ) {
	    errs = 'Error in the coef of 2nd term';
        } else {
	    errs = errs + ', coef of 2nd term';
        }
    }
    if ( pans != -1 ) {
        if ( errs == '' ) {
	    errs = 'Error in the exp of x';
        } else {
	    errs = errs + ', and exp of x';
        }
    }

    if ( errs == '' ) {
	document.getElementById("ansTxt3").setAttribute("value", 'Correct!  Click "Refresh" for more practice');
    } else {
	document.getElementById("ansTxt3").setAttribute("value", errs);
    }
    return 1;
}

