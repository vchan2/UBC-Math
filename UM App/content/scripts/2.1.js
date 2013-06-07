function checkPracQ(f){
    clearScore();
    checkPrac1(f);
    checkPrac2(f);
    checkPrac3(f);
    updateScore();
}

function checkPrac1(form) {
 // find (ax^b + c)(dx^g + h) = c1 x^p1 + c2 x^p2 + c3 x^p3 + c4
    var ans = new Array(4);
    ans[0] = new Array( a*d, b+g*1. );
    ans[1] = new Array( c*d, g );
    ans[2] = new Array( a*h, b );
    ans[3] = new Array( c*h, 0 );

    var inp = new Array(4);
    inp[0] = new Array( form.aAns1.value, form.pAns1.value );
    inp[1] = new Array( form.bAns1.value, form.qAns1.value );
    inp[2] = new Array( form.cAns1.value, form.rAns1.value );
    inp[3] = new Array( form.dAns1.value, 0 );
    
    var foil = new Array( 'F', 'I', 'O', 'L' );
    var allMatch = true;

    var errs = '';
    for ( var i=0; i<3; i++ ) {
        var match = false;
        for ( var j=0; j<3; j++ ) {
            if ( ans[i][0] == inp[j][0] && ans[i][1] == inp[j][1] ) {
	        match = true;
	    }
        }
	if ( ! match ) {
	    if ( errs != '' ) {
                errs = errs + ', ' + foil[i];
            } else {
                errs = foil[i];
            }
	    allMatch = false;
	}
    }
    if ( ans[3][0] != inp[3][0] ) {
	if ( errs != '' ) {
            errs = errs + ', ' + foil[3];
        } else {
            errs = foil[3];
        }
        allMatch = false;
    }

    if ( allMatch ) {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    } else {
	var string = "Not quite... check your " + errs + " term(s) in FOIL";
        document.getElementById("ansTxt1").setAttribute("value", string);
    }
}

function checkPrac2(form) {
  // sort out any input of exponentials and fractions
    var inpA = evalFrac(clearExp(form.aAns2.value));
    var inpB = evalFrac(clearExp(form.bAns2.value));
    var inpR = form.rAns2.value;
    if ( inpR == '' ) { inpR = 1; }
    var ansA = roundTo((Math.pow(j,k)*Math.pow(m,n)), mathPrecision);  
    var ansB = j;                           // correct answer is 
    var ansR = k*1. + p;                    //   a^x + b^(r x)
    
    if ( inpA == ansA && inpB == ansB && inpR == ansR ) { // were we sensible?
        document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    } else {  // sigh.
      // could they be partially correct?
	var errs = '';
	if ( inpR == 1 ) {                  // why would they make r=1, I ask?
	    var ansB2 = Math.pow(j,ansR);
	    if ( inpA != ansA ) {           // if a is wrong, are a & b swapped?
	        if ( inpA != ansB2 ) {      // nope; is b right?
		    errs = 'a';
		    if ( inpB != ansB2 ) { errs += ', b'; }
		} else {                    // a is b; is b equal to a?
                    if ( inpB != ansA )  { errs = 'b'; }
                }
            } else {                        // a is correct; is b?
                if ( inpB != ansB2 ) { errs = 'b'; }
            }
	    if ( errs == '' ) {  // what, they were right after all?!
	        document.getElementById("ansTxt2").setAttribute("value", "Correct!  Try another practice problem!");
		addPoint(1);
            } else {
		var string = "Not quite... check your value(s) for "+errs;
		document.getElementById("ansTxt2").setAttribute("value", string);
            }
        } else if ( inpA == ansA || inpB == ansB || inpR == ansR ) {
      // if r != 1, then please tell me they can't be swapping b and a...
            if ( inpA != ansA ) { errs = 'a'; }
            if ( inpB != ansB ) { 
	        if ( errs != '' ) { errs += ', b'; }
                else {              errs = 'b'; }
            }
            if ( inpR != ansR ) { 
	        if ( errs != '' ) { errs += ', r'; }
                else {              errs = 'r'; }
            }
	    var string = "Not quite... check your value(s) for "+errs;
	    document.getElementById("ansTxt2").setAttribute("value", string);
      //
      // ok, none of those tests were right.  Anything else?  NO! NO!
        } else {
	    var string = "Hmmm...  those all look off.  Check again.";
	    document.getElementById("ansTxt2").setAttribute("value", string);
        }
    }
}

function checkPrac3(form) {
// problem is (s x - t)(u x^vv + w e^x)
    var coeff = new Array( s*u, -1.*t*u, s*w, -1*t*w );
    var expon = new Array( 1.*v+1., 1.*v, 1. );
    var inCof = new Array( form.aAns3.value, form.bAns3.value, 
			   form.cAns3.value, form.dAns3.value );
    var inExp = new Array( form.rAns3.value, form.sAns3.value,
			   form.tAns3.value );

    if ( ( (inCof[0] == coeff[0] && inExp[0] == expon[0]) &&
           (inCof[1] == coeff[1] && inExp[1] == expon[1]) &&
           (inCof[2] == coeff[2] && (inExp[2] == expon[2] || inExp[2] == "")) &&
           (inCof[3] == coeff[3] ) ) ||
         ( (inCof[0] == coeff[1] && inExp[0] == expon[1]) &&
           (inCof[1] == coeff[0] && inExp[1] == expon[0]) &&
           (inCof[2] == coeff[2] && (inExp[2] == expon[2] || inExp[2] == "")) &&
           (inCof[3] == coeff[3] ) ) ) {
        document.getElementById("ansTxt3").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    } else {
	var errs1 = checkIt(inCof[0], coeff[0], inExp[0], expon[0],
		            inCof[1], coeff[1], inExp[1], expon[1],
		            "a","r","b","s");
	var errs2 = '';
        if ( inCof[2] != coeff[2] ) { errs2 = "c"; }
        if ( inExp[2] != expon[2] ) { errs2 = ((errs2 == "") ? "t" : "c, t"); }
        if ( inCof[3] != coeff[3] ) {
	    if ( errs2 == "" ) {
	        errs2 = "d";
	    } else {
	        errs2 = errs2 + ", d";
            }
	}
	if ( errs2 != "" ) {
            var errs = ( (errs1 == "") ? errs2 : errs1 + ", " + errs2 );
        } else {
	    var errs = errs1;
        }
        if ( errs != '' ) {
	    var string = "Not quite... check your value(s) for "+errs;
	    document.getElementById("ansTxt3").setAttribute("value", string);
	} else {
	    document.getElementById("ansTxt3").setAttribute("value", "Correct!  Try another practice problem!");
	    addPoint(1);
	}
    }
    return 1;
}
