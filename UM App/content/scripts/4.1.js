// javascript for precalculus tutorial section 4.1
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
    checkPrac3(f);
    checkPrac4(f);
}
function checkPrac1(f) {
// answer is ((a+g)x + (b+h))/(cx + d)
    var aans = f.aAns1.value;
    var bans = f.bAns1.value;
    var cans = f.cAns1.value;
    var dans = f.dAns1.value;

    var errs = '';
    if ( aans != (a + g) ) {
        errs = pracError(errs, 'a');
    }
    if ( bans != (b + h) ) {
        errs = pracError(errs, 'b');
    }
    if ( ! (cans == c || (c == 1 && cans == '')) ) {
        errs = pracError(errs, 'c');
    }
    if ( dans != d ) {
        errs = pracError(errs, 'd');
    }
    if ( errs != '' ) {
	document.getElementById("ansTxt1").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}

function checkPrac2(f) {
// answer is ((jm-kc)x + (nj-kd))/(cm x^2 + (cn+dm)x + dn)
    var aans = f.aAns2.value;
    var bans = f.bAns2.value;
    var cans = f.cAns2.value;
    var dans = f.dAns2.value;
    var eans = f.eAns2.value;

    var errs = '';
    if ( aans != (j*m-k*c) ) {
        errs = pracError(errs, 'a');
    }
    if ( bans != (n*j-k*d) ) {
        errs = pracError(errs, 'b');
    }
    if ( cans != (c*m) ) {
        errs = pracError(errs, 'c');
    }
    if ( dans != (c*n+d*m) ) {
        errs = pracError(errs, 'd');
    }
    if ( eans != (d*n) ) {
        errs = pracError(errs, 'g');
    }
    if ( errs != '' ) {
        document.getElementById("ansTxt2").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}

function checkPrac3(f) {
// answer is (o(q + r) - ps)/(q + r)
    var aans = f.aAns3.value;
    var bans = f.bAns3.value;
    if ( aans*bans < 0 ) {           // ensure uniform treatment of negative
        aans = -1*Math.abs(aans);    // answers
	bans = Math.abs(bans);
    }

    var ans = new Array;
    ans = reduceFrac( (o*(q+r)-p*s), (q+r) );

    var errs = '';
    if ( aans != ans[0] ) {
        errs = pracError(errs, 'a');
    }
    if ( bans != ans[1] ) {
        errs = pracError(errs, 'b');
    }
    if ( errs != '' ) {
        document.getElementById("ansTxt3").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt3").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}

function checkPrac4(f) {
// answer is 1 + (0x + (v-w))/(ux + w)
//    var aans = f.aAns4.value;  // took out option of entering a
    var bans = f.bAns4.value;
    var cans = f.cAns4.value;
    var dans = f.dAns4.value;

    var errs = '';
//    if ( aans != 0 ) {                // took out option of entering 
//        errs = pracError(errs, 'a');  //   0 x
//    }
    if ( bans != (v-w) ) {
        errs = pracError(errs, 'b');
    }
    if ( cans != u ) {
        errs = pracError(errs, 'c');
    }
    if ( dans != w ) {
        errs = pracError(errs, 'd');
    }
    if ( errs != '' ) {
	document.getElementById("ansTxt4").setAttribute("value", errs);
    } else {
        document.getElementById("ansTxt4").setAttribute("value", "Correct!  Try another practice problem!");
    }
    return 1;
}
