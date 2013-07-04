// javascript for precalculus tutorial section 13.1
function checkPracQ(f){
    checkPrac1(f);
    checkPrac2(f);
    checkPrac3(f);
    checkPrac4(f);
    checkPrac5(f);
    checkPrac6(f);
    checkPrac7(f);
    checkPrac8(f);
    checkPrac9(f);
}

function checkPrac1(f) {
// f(x) = 3x^2 + 1
    var errors;
    if ( isChecked(1,'qua','pol','rat') ) {
	document.getElementById("ansTxt1").setAttribute("value", 'Correct!  Try the next problem!');
    } else {
        if ( eval('document.forms[0].p1_lin').checked ) {
	    errors = "Nope: f(x) isn't linear b/c of the x^2 term.";
        } else if ( eval('document.forms[0].p1_cub').checked ) {
	    errors = "Nope: f(x) isn't cubic b/c there's no x^3 term.";
	} else if ( eval('document.forms[0].p1_pow').checked ) {
	    errors= "Nope: f(x) isn't a power fxn b/c of the +1.";
	} else if ( eval('document.forms[0].p1_exp').checked ) {
	    errors = "Nope: f(x) isn't an exp fxn b/c it's x^(constant).";
	} else if ( eval('document.forms[0].p1_log').checked ) {
	    errors= "Nope: f(x) doesn't include a log function.";
	} else {
	    errors = "Nope: more answers are correct";
	}
	document.getElementById("ansTxt1").setAttribute("value", errors);
    }
    return 1;
}

function checkPrac2(f) {
// f(x) = 3^(x-1) + 4
    var errors;
    if ( isChecked(2) ) {
	document.getElementById("ansTxt2").setAttribute("value", 'Correct!  Try the next problem!');
    } else {
        if ( eval('document.forms[0].p2_lin').checked ) {
	    errors = "f(x) isn't linear b/c it's not in the form " +
	                      "mx + b.";
        } else if ( eval('document.forms[0].p2_qua').checked ) {
	    errors = "f(x) isn't quadratic: its form isn't " +
			      "ax^2 + bx + c.";
        } else if ( eval('document.forms[0].p2_cub').checked ) {
	    errors = "f(x) isn't cubic: it isn't " + 
 	                      "ax^3 + bx^2 + cx + d.";
	} else if ( eval('document.forms[0].p2_pol').checked ) {
	    errors = "f(x) isn't a polynomial b/c of the " +
			      "3^(variable)."
	} else if ( eval('document.forms[0].p2_rat').checked ) {
	    errors = "f(x) isn't a rational fxn b/c of the " +
			      "3^(variable)."
	} else if ( eval('document.forms[0].p2_pow').checked ) {
	    errors = "f(x) isn't a power fxn b/c of the " +
			      "3^(variable)."
	} else if ( eval('document.forms[0].p2_exp').checked ) {
	    errors = "f(x) isn't an exponential fxn only b/c of " +
			      "the +4.";
	} else if ( eval('document.forms[0].p2_log').checked ) {
	    errors = "Nope: f(x) doesn't include a log function.";
	}
	document.getElementById("ansTxt2").setAttribute("value", errors);
    }
    return 1;
}

function checkPrac3(f) {
// g(t) = 4t^3 + 1/pi
    var errors;
    if ( isChecked(3,'cub','pol','rat') ) {
        document.getElementById("ansTxt3").setAttribute("value", 'Correct!  Try the next problem!');
    } else {
        if ( eval('document.forms[0].p3_lin').checked ) {
	    errors = "g(t) isn't linear b/c of the t^3.";
        } else if ( eval('document.forms[0].p3_qua').checked ) {
	    errors = "g(t) isn't quadratic b/c of the t^3.";
	} else if ( eval('document.forms[0].p3_pow').checked ) {
	    errors = "g(t) isn't a power fxn b/c of the " +
			      "+1/pi."
	} else if ( eval('document.forms[0].p3_exp').checked ) {
	    errors = "g(t) isn't an exponential fxn b/c it's " +
			      "t^(const)";
	} else if ( eval('document.forms[0].p3_log').checked ) {
	    errors = "Nope: g(t) doesn't include a log function.";
	} else {
	    errors = "More answers are correct.";
	}
	document.getElementById("ansTxt3").setAttribute("value", errors);
    }
    return 1;
}

function checkPrac4(f) {
// h(y) = 3y^(-2)
    var errors;
    if ( isChecked(4,'rat','pow') ) {
        document.getElementById("ansTxt4").setAttribute("value", 'Correct!  Try the next problem!');
    } else {
        if ( eval('document.forms[0].p4_lin').checked ) {
	    errors = "h(y) isn't linear b/c it's not in the form " +
	                      "mx + b.";
        } else if ( eval('document.forms[0].p4_qua').checked ) {
	    errors = "h(y) isn't quadratic b/c it's y^(-2) not " +
			      "y^2.";
        } else if ( eval('document.forms[0].p4_cub').checked ) {
	    errors = "h(y) isn't cubic: it isn't " + 
 	                      "ax^3 + bx^2 + cx + d.";
	} else if ( eval('document.forms[0].p4_pol').checked ) {
	    errors = "h(y) isn't a polynomial b/c of the " +
			      "negative exponent."
	} else if ( eval('document.forms[0].p4_exp').checked ) {
	    errors = "h(y) isn't an exponential fxn b/c it's " +
			      "(variable)^(constant).";
	} else if ( eval('document.forms[0].p4_log').checked ) {
	    errors = "Nope: h(y) doesn't include a log function.";
	} else {
	    errors = "More answers are correct.";
	}
	document.getElementById("ansTxt4").setAttribute("value", errors);
    }
    return 1;
}

function checkPrac5(f) {
// P(phi) = 4phi + 5e
    var errors;
    if ( isChecked(5,'lin','pol','rat') ) {
        document.getElementById("ansTxt5").setAttribute("value", 'Correct!  Try the next problem!');
    } else {
        if ( eval('document.forms[0].p5_qua').checked ) {
	    errors = "P isn't quadratic: it has no squared" +
			      " term.";
        } else if ( eval('document.forms[0].p5_cub').checked ) {
	    errors = "P isn't cubic: it has no cubed term.";
	} else if ( eval('document.forms[0].p5_pow').checked ) {
	    errors = "P isn't a power fxn b/c of the +5e."
	} else if ( eval('document.forms[0].p5_exp').checked ) {
	    errors = "P isn't an exponential fxn b/c it's " +
			      "not  a b^x";
	} else if ( eval('document.forms[0].p5_log').checked ) {
	    errors = "Nope: P doesn't include a log function.";
	} else {
	    errors = "More answers are correct.";
	}
	document.getElementById("ansTxt5").setAttribute("value", errors);
    }
    return 1;
}

function checkPrac6(f) {
// R(t) = 12(1 - 0.04)^(t-1)
    var errors;
    if ( isChecked(6,'exp') ) {
        document.getElementById("ansTxt6").setAttribute("value", 'Correct!  Try the next problem!');
    } else {
        if ( eval('document.forms[0].p6_lin').checked ) {
	    errors = "R(t) isn't linear b/c it's not in the form " +
	                      "mt + b.";
        } else if ( eval('document.forms[0].p6_qua').checked ) {
	    errors = "R(t) isn't quadratic: its form isn't " +
			      "at^2 + bt + c.";
        } else if ( eval('document.forms[0].p6_cub').checked ) {
	    errors = "R(t) isn't cubic: it isn't " + 
 	                      "at^3 + bt^2 + ct + d.";
	} else if ( eval('document.forms[0].p6_pol').checked ) {
	    errors = "R(t) isn't a polynomial b/c of the " +
			      "(const)^(variable)."
	} else if ( eval('document.forms[0].p6_rat').checked ) {
	    errors = "R(t) isn't a rational fxn b/c of the " +
			      "(const)^(variable)."
	} else if ( eval('document.forms[0].p6_pow').checked ) {
	    errors = "R(t) isn't a power fxn b/c of the " +
			      "(const)^(variable)."
	} else if ( eval('document.forms[0].p6_log').checked ) {
	    errors = "Nope: R(t) doesn't include a log function.";
	} else {
	    errors = "More answers are correct.";
	}
	document.getElementById("ansTxt6").setAttribute("value", errors);
    }
    return 1;
}

function checkPrac7(f) {
// f(z) = (2z)^(1-0.04)
    var errors;
    if ( isChecked(7,'pow') ) {
       document.getElementById("ansTxt7").setAttribute("value", 'Correct!  Try the next problem!');
    } else {
        if ( eval('document.forms[0].p7_lin').checked ) {
	    errors = "f(z) isn't linear b/c it's not in the form " +
	                      "mz + b.";
        } else if ( eval('document.forms[0].p7_qua').checked ) {
	    errors = "f(z) isn't quadratic: its form isn't " +
			      "az^2 + bz + c.";
        } else if ( eval('document.forms[0].p7_cub').checked ) {
	    errors = "f(z) isn't cubic: it isn't " + 
 	                      "az^3 + bz^2 + cz + d.";
	} else if ( eval('document.forms[0].p7_pol').checked ) {
	    errors = "f(z) isn't a polynomial b/c of the decimal " +
			      "exponent."
	} else if ( eval('document.forms[0].p7_rat').checked ) {
	    errors = "f(z) isn't a rational fxn b/c of the decimal " +
			      "exponent."
	} else if ( eval('document.forms[0].p7_exp').checked ) {
	    errors = "f(z) isn't an exponential fxn b/c it's " +
			      "(variable)^(constant).";
	} else if ( eval('document.forms[0].p7_log').checked ) {
	    errors = "Nope: f(z) doesn't include a log function.";
	} else {
	    errors = "More answers are correct.";
	}
	document.getElementById("ansTxt7").setAttribute("value", errors);
    }
    return 1;
}

function checkPrac8(f) {
// h(x) = (5x - x^(-1/2))/(x+4)
    var errors;
    if ( isChecked(8) ) {
        document.getElementById("ansTxt8").setAttribute("value", 'Correct!  Try the next problem!');
    } else {
        if ( eval('document.forms[0].p8_lin').checked ) {
	    errors = "h(x) isn't linear b/c it's not in the form " +
	                      "mx + b.";
        } else if ( eval('document.forms[0].p8_qua').checked ) {
	    errors = "h(x) isn't quadratic: its form isn't " +
			      "ax^2 + bx + c.";
        } else if ( eval('document.forms[0].p8_cub').checked ) {
	    errors = "h(x) isn't cubic: it isn't " + 
 	                      "ax^3 + bx^2 + cx + d.";
	} else if ( eval('document.forms[0].p8_pol').checked ) {
	    errors = "h(x) isn't a polynomial b/c of the fractional " +
			      "exp and ratio.";
	} else if ( eval('document.forms[0].p8_rat').checked ) {
	    errors = "h(x) isn't a rational fxn b/c of the " +
			      "fractional exponent.";
	} else if ( eval('document.forms[0].p8_pow').checked ) {
	    errors = "h(x) isn't a power fxn b/c it's not " +
			      "h(x) = a x^b.";
	} else if ( eval('document.forms[0].p8_exp').checked ) {
	    errors = "h(x) isn't an exponential fxn b/c it's not " +
			      "h(x) = a b^x.";
	} else if ( eval('document.forms[0].p8_log').checked ) {
	    errors = "Nope: h(x) doesn't include a log function.";
	}
	document.getElementById("ansTxt8").setAttribute("value", errors);
    }
    return 1;
}

function checkPrac9(f) {
// f(x) = (x+2)^(-2)/(x-1)^(-3)
    var errors;
    if ( isChecked(9, 'rat') ) {
        document.getElementById("ansTxt9").setAttribute("value", 'Correct!  Try the next problem!');
    } else {
        if ( eval('document.forms[0].p9_lin').checked ) {
	    errors = "f(x) isn't linear b/c it's not in the form " +
	                      "mx + b.";
        } else if ( eval('document.forms[0].p9_qua').checked ) {
	    errors = "f(x) isn't quadratic: its form isn't " +
			      "ax^2 + bx + c.";
        } else if ( eval('document.forms[0].p9_cub').checked ) {
	    errors = "f(x) isn't cubic: it isn't " + 
 	                      "ax^3 + bx^2 + cx + d.";
	} else if ( eval('document.forms[0].p9_pol').checked ) {
	    errors = "f(x) isn't a polynomial b/c it's a ratio " +
			      "of polynomials."
	} else if ( eval('document.forms[0].p9_pow').checked ) {
	    errors = "f(x) isn't a power fxn b/c it's not " +
			      "f(x) = a x^b.";
	} else if ( eval('document.forms[0].p9_exp').checked ) {
	    errors = "f(x) isn't an exponential fxn b/c it's not " +
			      "f(x) = a b^x.";
	} else if ( eval('document.forms[0].p9_log').checked ) {
	    errors = "Nope: f(x) doesn't include a log function.";
	} else {
	    errors = "More answers are correct.";
	}
	document.getElementById("ansTxt9").setAttribute("value", errors);
    }
    return 1;
}

var opts = new Array('lin', 'qua', 'cub', 'pol', 'rat', 'pow', 'exp', 'log');
function isChecked() {
    var j=1;
    var pnum = arguments[0];

    for ( var i=0; i<opts.length; i++ ) {
        if ( j < arguments.length && arguments[j] == opts[i] ) {
	    if ( ! eval('document.forms[0].p' + pnum + '_' +
	         arguments[j++]).checked ) {  
  	        return false;
            }
        } else {
	    if ( eval('document.forms[0].p' + pnum + '_' + opts[i]).checked ) {
  	        return false;
            }
        }
    }
    return true;
}