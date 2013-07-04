// javascript for precalculus tutorial section 13.1

function checkPrac1(f) {
// f(x) = 3x^2 + 1

    if ( isChecked(1,'qua','pol','rat') ) {
        f.ansTxt1.value = 'Correct!  Try the next problem!';
    } else {
        if ( eval('document.forms[0].p1_lin').checked ) {
	    f.ansTxt1.value = "Nope: f(x) isn't linear b/c of the x^2 term.";
        } else if ( eval('document.forms[0].p1_cub').checked ) {
	    f.ansTxt1.value = "Nope: f(x) isn't cubic b/c there's no x^3 term.";
	} else if ( eval('document.forms[0].p1_pow').checked ) {
	    f.ansTxt1.value = "Nope: f(x) isn't a power fxn b/c of the +1.";
	} else if ( eval('document.forms[0].p1_exp').checked ) {
	    f.ansTxt1.value = "Nope: f(x) isn't an exp fxn b/c it's x^(constant).";
	} else if ( eval('document.forms[0].p1_log').checked ) {
	    f.ansTxt1.value = "Nope: f(x) doesn't include a log function.";
	} else {
	    f.ansTxt1.value = "Nope: more answers are correct";
	}
    }
    return 1;
}

function checkPrac2(f) {
// f(x) = 3^(x-1) + 4

    if ( isChecked(2) ) {
        f.ansTxt2.value = 'Correct!  Try the next problem!';
    } else {
        if ( eval('document.forms[0].p2_lin').checked ) {
	    f.ansTxt2.value = "f(x) isn't linear b/c it's not in the form " +
	                      "mx + b.";
        } else if ( eval('document.forms[0].p2_qua').checked ) {
	    f.ansTxt2.value = "f(x) isn't quadratic: its form isn't " +
			      "ax^2 + bx + c.";
        } else if ( eval('document.forms[0].p2_cub').checked ) {
	    f.ansTxt2.value = "f(x) isn't cubic: it isn't " + 
 	                      "ax^3 + bx^2 + cx + d.";
	} else if ( eval('document.forms[0].p2_pol').checked ) {
	    f.ansTxt2.value = "f(x) isn't a polynomial b/c of the " +
			      "3^(variable)."
	} else if ( eval('document.forms[0].p2_rat').checked ) {
	    f.ansTxt2.value = "f(x) isn't a rational fxn b/c of the " +
			      "3^(variable)."
	} else if ( eval('document.forms[0].p2_pow').checked ) {
	    f.ansTxt2.value = "f(x) isn't a power fxn b/c of the " +
			      "3^(variable)."
	} else if ( eval('document.forms[0].p2_exp').checked ) {
	    f.ansTxt2.value = "f(x) isn't an exponential fxn only b/c of " +
			      "the +4.";
	} else if ( eval('document.forms[0].p2_log').checked ) {
	    f.ansTxt2.value = "Nope: f(x) doesn't include a log function.";
	}
    }
    return 1;
}

function checkPrac3(f) {
// g(t) = 4t^3 + 1/pi

    if ( isChecked(3,'cub','pol','rat') ) {
        f.ansTxt3.value = 'Correct!  Try the next problem!';
    } else {
        if ( eval('document.forms[0].p3_lin').checked ) {
	    f.ansTxt3.value = "g(t) isn't linear b/c of the t^3.";
        } else if ( eval('document.forms[0].p3_qua').checked ) {
	    f.ansTxt3.value = "g(t) isn't quadratic b/c of the t^3.";
	} else if ( eval('document.forms[0].p3_pow').checked ) {
	    f.ansTxt3.value = "g(t) isn't a power fxn b/c of the " +
			      "+1/pi."
	} else if ( eval('document.forms[0].p3_exp').checked ) {
	    f.ansTxt3.value = "g(t) isn't an exponential fxn b/c it's " +
			      "t^(const)";
	} else if ( eval('document.forms[0].p3_log').checked ) {
	    f.ansTxt3.value = "Nope: g(t) doesn't include a log function.";
	} else {
	    f.ansTxt3.value = "More answers are correct.";
	}
    }
    return 1;
}

function checkPrac4(f) {
// h(y) = 3y^(-2)

    if ( isChecked(4,'rat','pow') ) {
        f.ansTxt4.value = 'Correct!  Try the next problem!';
    } else {
        if ( eval('document.forms[0].p4_lin').checked ) {
	    f.ansTxt4.value = "h(y) isn't linear b/c it's not in the form " +
	                      "mx + b.";
        } else if ( eval('document.forms[0].p4_qua').checked ) {
	    f.ansTxt4.value = "h(y) isn't quadratic b/c it's y^(-2) not " +
			      "y^2.";
        } else if ( eval('document.forms[0].p4_cub').checked ) {
	    f.ansTxt4.value = "h(y) isn't cubic: it isn't " + 
 	                      "ax^3 + bx^2 + cx + d.";
	} else if ( eval('document.forms[0].p4_pol').checked ) {
	    f.ansTxt4.value = "h(y) isn't a polynomial b/c of the " +
			      "negative exponent."
	} else if ( eval('document.forms[0].p4_exp').checked ) {
	    f.ansTxt4.value = "h(y) isn't an exponential fxn b/c it's " +
			      "(variable)^(constant).";
	} else if ( eval('document.forms[0].p4_log').checked ) {
	    f.ansTxt4.value = "Nope: h(y) doesn't include a log function.";
	} else {
	    f.ansTxt4.value = "More answers are correct.";
	}
    }
    return 1;
}

function checkPrac5(f) {
// P(phi) = 4phi + 5e

    if ( isChecked(5,'lin','pol','rat') ) {
        f.ansTxt5.value = 'Correct!  Try the next problem!';
    } else {
        if ( eval('document.forms[0].p5_qua').checked ) {
	    f.ansTxt5.value = "P isn't quadratic: it has no squared" +
			      " term.";
        } else if ( eval('document.forms[0].p5_cub').checked ) {
	    f.ansTxt5.value = "P isn't cubic: it has no cubed term.";
	} else if ( eval('document.forms[0].p5_pow').checked ) {
	    f.ansTxt5.value = "P isn't a power fxn b/c of the +5e."
	} else if ( eval('document.forms[0].p5_exp').checked ) {
	    f.ansTxt5.value = "P isn't an exponential fxn b/c it's " +
			      "not  a b^x";
	} else if ( eval('document.forms[0].p5_log').checked ) {
	    f.ansTxt5.value = "Nope: P doesn't include a log function.";
	} else {
	    f.ansTxt5.value = "More answers are correct.";
	}
    }
    return 1;
}

function checkPrac6(f) {
// R(t) = 12(1 - 0.04)^(t-1)

    if ( isChecked(6,'exp') ) {
        f.ansTxt6.value = 'Correct!  Try the next problem!';
    } else {
        if ( eval('document.forms[0].p6_lin').checked ) {
	    f.ansTxt6.value = "R(t) isn't linear b/c it's not in the form " +
	                      "mt + b.";
        } else if ( eval('document.forms[0].p6_qua').checked ) {
	    f.ansTxt6.value = "R(t) isn't quadratic: its form isn't " +
			      "at^2 + bt + c.";
        } else if ( eval('document.forms[0].p6_cub').checked ) {
	    f.ansTxt6.value = "R(t) isn't cubic: it isn't " + 
 	                      "at^3 + bt^2 + ct + d.";
	} else if ( eval('document.forms[0].p6_pol').checked ) {
	    f.ansTxt6.value = "R(t) isn't a polynomial b/c of the " +
			      "(const)^(variable)."
	} else if ( eval('document.forms[0].p6_rat').checked ) {
	    f.ansTxt6.value = "R(t) isn't a rational fxn b/c of the " +
			      "(const)^(variable)."
	} else if ( eval('document.forms[0].p6_pow').checked ) {
	    f.ansTxt6.value = "R(t) isn't a power fxn b/c of the " +
			      "(const)^(variable)."
	} else if ( eval('document.forms[0].p6_log').checked ) {
	    f.ansTxt6.value = "Nope: R(t) doesn't include a log function.";
	} else {
	    f.ansTxt6.value = "More answers are correct.";
	}
    }
    return 1;
}

function checkPrac7(f) {
// f(z) = (2z)^(1-0.04)

    if ( isChecked(7,'pow') ) {
        f.ansTxt7.value = 'Correct!  Try the next problem!';
    } else {
        if ( eval('document.forms[0].p7_lin').checked ) {
	    f.ansTxt7.value = "f(z) isn't linear b/c it's not in the form " +
	                      "mz + b.";
        } else if ( eval('document.forms[0].p7_qua').checked ) {
	    f.ansTxt7.value = "f(z) isn't quadratic: its form isn't " +
			      "az^2 + bz + c.";
        } else if ( eval('document.forms[0].p7_cub').checked ) {
	    f.ansTxt7.value = "f(z) isn't cubic: it isn't " + 
 	                      "az^3 + bz^2 + cz + d.";
	} else if ( eval('document.forms[0].p7_pol').checked ) {
	    f.ansTxt7.value = "f(z) isn't a polynomial b/c of the decimal " +
			      "exponent."
	} else if ( eval('document.forms[0].p7_rat').checked ) {
	    f.ansTxt7.value = "f(z) isn't a rational fxn b/c of the decimal " +
			      "exponent."
	} else if ( eval('document.forms[0].p7_exp').checked ) {
	    f.ansTxt7.value = "f(z) isn't an exponential fxn b/c it's " +
			      "(variable)^(constant).";
	} else if ( eval('document.forms[0].p7_log').checked ) {
	    f.ansTxt7.value = "Nope: f(z) doesn't include a log function.";
	} else {
	    f.ansTxt7.value = "More answers are correct.";
	}
    }
    return 1;
}

function checkPrac8(f) {
// h(x) = (5x - x^(-1/2))/(x+4)

    if ( isChecked(8) ) {
        f.ansTxt8.value = 'Correct!  Try the next problem!';
    } else {
        if ( eval('document.forms[0].p8_lin').checked ) {
	    f.ansTxt8.value = "h(x) isn't linear b/c it's not in the form " +
	                      "mx + b.";
        } else if ( eval('document.forms[0].p8_qua').checked ) {
	    f.ansTxt8.value = "h(x) isn't quadratic: its form isn't " +
			      "ax^2 + bx + c.";
        } else if ( eval('document.forms[0].p8_cub').checked ) {
	    f.ansTxt8.value = "h(x) isn't cubic: it isn't " + 
 	                      "ax^3 + bx^2 + cx + d.";
	} else if ( eval('document.forms[0].p8_pol').checked ) {
	    f.ansTxt8.value = "h(x) isn't a polynomial b/c of the fractional " +
			      "exp and ratio.";
	} else if ( eval('document.forms[0].p8_rat').checked ) {
	    f.ansTxt8.value = "h(x) isn't a rational fxn b/c of the " +
			      "fractional exponent.";
	} else if ( eval('document.forms[0].p8_pow').checked ) {
	    f.ansTxt8.value = "h(x) isn't a power fxn b/c it's not " +
			      "h(x) = a x^b.";
	} else if ( eval('document.forms[0].p8_exp').checked ) {
	    f.ansTxt8.value = "h(x) isn't an exponential fxn b/c it's not " +
			      "h(x) = a b^x.";
	} else if ( eval('document.forms[0].p8_log').checked ) {
	    f.ansTxt8.value = "Nope: h(x) doesn't include a log function.";
	}
    }
    return 1;
}

function checkPrac9(f) {
// f(x) = (x+2)^(-2)/(x-1)^(-3)

    if ( isChecked(9, 'rat') ) {
        f.ansTxt9.value = 'Correct!  Go on to the section test or next section!';
    } else {
        if ( eval('document.forms[0].p9_lin').checked ) {
	    f.ansTxt9.value = "f(x) isn't linear b/c it's not in the form " +
	                      "mx + b.";
        } else if ( eval('document.forms[0].p9_qua').checked ) {
	    f.ansTxt9.value = "f(x) isn't quadratic: its form isn't " +
			      "ax^2 + bx + c.";
        } else if ( eval('document.forms[0].p9_cub').checked ) {
	    f.ansTxt9.value = "f(x) isn't cubic: it isn't " + 
 	                      "ax^3 + bx^2 + cx + d.";
	} else if ( eval('document.forms[0].p9_pol').checked ) {
	    f.ansTxt9.value = "f(x) isn't a polynomial b/c it's a ratio " +
			      "of polynomials."
	} else if ( eval('document.forms[0].p9_pow').checked ) {
	    f.ansTxt9.value = "f(x) isn't a power fxn b/c it's not " +
			      "f(x) = a x^b.";
	} else if ( eval('document.forms[0].p9_exp').checked ) {
	    f.ansTxt9.value = "f(x) isn't an exponential fxn b/c it's not " +
			      "f(x) = a b^x.";
	} else if ( eval('document.forms[0].p9_log').checked ) {
	    f.ansTxt9.value = "Nope: f(x) doesn't include a log function.";
	} else {
	    f.ansTxt9.value = "More answers are correct.";
	}
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