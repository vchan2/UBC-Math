function checkPracQ(f){
    clearScore();
    checkPrac1(f);
    checkPrac2(f);
    updateScore();
}

var xReg = /x/;  var yReg = /y/;

function checkPrac1(f) {
    var inCoef = f.aAns1.value;  // input is 
    var inXexp = f.pAns1.value;  //   inCoef x^inXexp y^inYexp (inTerm[0] + 
    var inYexp = f.qAns1.value;  //             inTerm[1])
    var inTerm = new Array(f.bAns1.value, f.cAns1.value);

    var errs = new String("[1] x^[2] y^[3] ( [4] + [5] )");
    
// easy stuff: did they get the right factored term?
    if ( (inCoef == '' && a != 1) || (inCoef != '' && inCoef != a) ) { 
        errs = errs.replace(/1/, "*"); 
    }
    if ( (inXexp == '' && b != 1) || (inXexp != '' && inXexp != b) ) { 
        errs = errs.replace(/2/, "*"); 
    }
    if ( (inYexp == '' && c != 1) || (inYexp != '' && inYexp != c) ) { 
        errs = errs.replace(/3/, "*"); 
    }

// now try to figure out what's going on with the rest of the problem
//    correct terms are d x^g and h y^j
    var matched = 0;
    if ((matched = checkTerm(inTerm[0], d, g, h, j, matched)) == 0) {
        errs = errs.replace(/4/, "*");
    } 
    if ((matched = checkTerm(inTerm[1], d, g, h, j, matched)) == 0) {
        errs = errs.replace(/5/, "*");
    } 

    errs = errs.replace( /[0-9]/g, " " );
    if ( errs.match(/\*/) != null ) {
        var string = 'Hmm... Check "*"s: ' + errs;
        document.getElementById("ansTxt1").setAttribute("value", string);
	
    } else {
        document.getElementById("ansTxt1").setAttribute("value", "Correct!  Try another practice problem!");
	addPoint(1);
    }
}

function checkTerm(ans,c1,r1,c2,r2,match) {
  // check to see if term looks like c1 x^r1 or c2 y^r2

  // special case: one of the terms is constant
    var xReg2 = xReg;  var yReg2 = yReg;
    if ( r1 == 0 ) { 
        xReg2 = /^[0-9]$/;
    } else if ( r2 == 0 ) {
        yReg2 = /^[0-9]$/;
    }

    if ( (xReg2.test(ans) && yReg2.test(ans)) ||
         (! xReg2.test(ans) && ! yReg2.test(ans)) ) { return 0; }

    var term = /(-?[0-9]+)? *[xy](\^([0-9]+))?/;

    if ( (xReg2.test(ans) && match == 1) || (yReg2.test(ans) && match == 2) ) {
        return 0;
    } else if ( xReg2.test(ans) ) {
	var matches;
	matches = term.exec(ans);
	if ( matches == null ) {
	    if ( r1 != 0 || (r1 == 0 && ans != c1) ) {
	        return 0;
            } else {
		return 1;
	    }
        } else {
            if ( ( matches[1] == c1 || 
	           ((matches[1] == null || matches[1] == '') && c1 == 1) ) && 
 	         ( matches[3] == r1 || (matches[2] == null && r1 == 1) ) ) {
                return 1;
	    } else { return 0; }
        }
    } else if ( yReg2.test(ans) ) {
	var matches;
	matches = term.exec(ans);
	if ( matches == null ) {
	    if ( r2 != 0 || (r2 == 0 && ans != c2) ) {
	        return 0;
	    } else {
	        return 2;
            }
        } else {
            if ( ( matches[1] == c2 || 
	           ((matches[1] == null || matches[1] == '') && c2 == 1) ) && 
	         ( matches[3] == r2 || 
		   ((matches[2] == null || matches[2] == '') && r2 == 1) ) ) {
	        return 2; 
	    } else { return 0; }
        }
    } else {
        return 0;
    }
}

function checkPrac2(f) {
    var inTerms = 
        new Array(f.aAns2.value, f.bAns2.value, f.cAns2.value, f.dAns2.value);
  // the answer is (q x^r + s y)(t y^u + v): check each pair against
  //    the corresponding possible pairs of values from inTerms
    var matched = 0;  var ok = false;
    errs = '([1] + [2])([3] + [4])';

  // first case: first input term matches one of the first binomial answers
    if ( (matched = checkTerm(inTerms[0],q,r,s,1,matched)) > 0 ) {
	var which = 3 - matched;
	var mpat = new RegExp(matched);
	errs = errs.replace(mpat, " ");
  // then check to see if the second matches or not
        if ( checkTerm(inTerms[1],q,r,s,1,matched) > 0 ) {
	    var mpat = new RegExp(which);
	    errs = errs.replace(mpat, " ");
        }
	errs = errs.replace(/[12]/g, "*");
  // and then check the second binomial
        matched = 0;
        if ( (matched = checkTerm(inTerms[2],v,0,t,u,matched)) > 0 ) {
	    which = 2 + 1*(matched%2 + 1);
	    var mpat = new RegExp(which);
	    errs = errs.replace(mpat, " ");
        }
	if ( (matched = checkTerm(inTerms[3],v,0,t,u,matched)) > 0 ) {
	    which = 2 + 1*(matched%2 + 1);
	    var mpat = new RegExp(which);
	    errs = errs.replace(mpat, " ");
        }
	errs = errs.replace(/[34]/g, "*");
    } else {
  // ok, so the first input term didn't match the first binomial.  
        if ( (matched = checkTerm(inTerms[0],v,0,t,u,matched)) > 0 ) {
	    var which = matched%2 + 1*1;    // we swapped x & y in the call to
	    var mpat = new RegExp(which);   //   checkTerm to keep "y" in the
	    errs = errs.replace(mpat, " "); //   right place
	} 
	if ( (matched = checkTerm(inTerms[1],v,0,t,u,matched)) > 0 ) {
	    var which = matched%2 + 1*1;
	    var mpat = new RegExp(which);
	    errs = errs.replace(mpat, " ");
        }
	errs = errs.replace(/[12]/g, "*");
        matched = 0;
        if ( (matched = checkTerm(inTerms[2],q,r,s,1,matched)) > 0 ) {
	    var which = matched+1*2;
	    var mpat = new RegExp(which);
	    errs = errs.replace(mpat, " ");
        }
	if ( (matched=checkTerm(inTerms[3],q,r,s,1,matched)) > 0 ) {
	    var which = matched+1*2;
	    var mpat = new RegExp(which);
	    errs = errs.replace(mpat, " ");
        }
	errs = errs.replace(/[34]/g, "*");
    }
    if ( errs.match(/\*/) != null ) {
	var string = 'Hmm... Check "*"s: ' + errs;
        document.getElementById("ansTxt2").setAttribute("value", string);
    } else {
	document.getElementById("ansTxt2").setAttribute("value", "Correct!  Click \"Refresh\" for more practice!");
	addPoint(1);
    }
}