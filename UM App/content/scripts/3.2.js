// javascript for precalculus tutorial section 3.2
function checkPracQ(f){
    clearScore();
    checkPrac1(f);
    checkPrac2(f);
    checkPrac3(f);
    updateScore();
}

function checkPrac1(f) {
// answer is (ax + b)^2, where it happens that b is always 1
    var aans = f.aAns1.value;
    var bans = f.bAns1.value;

    var errs = '';
    if ( ! (aans == a || (a == 1 && aans == '')) ) {
        errs = pracError(errs, 'a');
    }
    if ( bans != 1 && bans != '' ) {
        errs = pracError(errs, 'b');
    }
    if ( errs != '' ) {
        document.getElementById("ansTxt1").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    }
    return 1;
}

function checkPrac2(f) {
// answer is (x^c - d x^g)^2
    var cans = f.pAns2.value;
    var dans = f.aAns2.value;
    var gans = f.qAns2.value;

    var errs = '';
    if ( ! (dans == d || (d == 1 && dans == '')) ) {
        errs = pracError(errs, 'b');
    }
    if ( ! (cans == c || (c == 1 && cans == '')) ) {
        errs = pracError(errs, 'm');
    }
    if ( ! (gans == g || (g == 1 && gans == '')) ) {
        errs = pracError(errs, 'n');
    }
    if ( errs != '' ) {
        document.getElementById("ansTxt2").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    }
    return 1;
}

function checkPrac3(f) {
// answer is (h x^j + y^k) (hx^j - y^k)
    var hans = f.aAns3.value;
    var jans = f.pAns3.value;
    var kans = f.qAns3.value;
    var h2ans = f.bAns3.value;
    var j2ans = f.rAns3.value;
    var k2ans = f.sAns3.value;

    var errs = ''
    if ( hans != h2ans ) {
        errs = 'Check your value(s) of a, which should be the same.';
    } else if ( jans != j2ans ) {
        errs = 'Check your value(s) of m, which should be the same.';
    } else if ( kans != k2ans ) {
        errs = 'Check your value(s) of n, which should be the same.';
    }
    if ( errs != '' ) {
        document.getElementById("ansTxt3").setAttribute("value", errs);
        return 1;
    } else {
        if ( hans != h ) {
	    errs = pracError(errs, 'a');
	}
	if ( ! (jans == j || ( j == 1 && jans == '' )) ) {
	    errs = pracError(errs, 'm');
	}
	if ( ! (kans == k || ( k == 1 && kans == '' )) ) {
	    errs = pracError(errs, 'n');
	}
	if ( errs != '' ) {
        document.getElementById("ansTxt3").setAttribute("value", errs);
	} else {
	    document.getElementById("ansTxt3").setAttribute("value", "Correct!  Try another practice problem!");
	    addPoint(1);
        }
    }
}

function update(to,from) {
    to.value = from.value;
    return 1;
}