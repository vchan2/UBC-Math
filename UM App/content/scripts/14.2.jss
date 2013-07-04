// javascript for precalculus tutorial section 14.2

var intAns = new Array(1,4,8,16,32,9,27,81,16,64,25,125,36,49,64,81,100,
		       1000,10000,121,144);

function checkInt(num) {
    var ans = eval("document.forms[0].i" + num).value;
    ans = ans.replace(/,/g,'');
    var ansMsg = eval("document.forms[0].i" + num + "_msg");
    if ( ans == intAns[num] ) {
        ansMsg.value = 'yes';
    } else {
        ansMsg.value = 'no';
    }
    return 1;
}

var trigAns = new Array(0,1,Math.sqrt(3)/2,1/Math.SQRT2,1/2,0,-1,0,1,
			  0,1/2,1/Math.SQRT2,Math.sqrt(3)/2,1,0,-1,0,
			  0,1/Math.sqrt(3),1,Math.sqrt(3),'undef',0,'undef',0);

function checkTrig(num) {
    var ans = new String(eval("document.forms[0].t" + num).value);

    if ( ans.match(/sqrt/) != null || ans.match(/\//) != null ) {
        ans = ans.replace(/sqrt/,'Math.sqrt');
        ans = roundTo(eval(ans), mathPrecision);
    }
    var cAns = trigAns[num];
    if ( cAns != 'undef' ) {
        cAns = roundTo(cAns, mathPrecision);
    }

    var ansMsg = eval("document.forms[0].t" + num + "_msg");
    if ( ans == cAns ) {
        ansMsg.value = 'yes';
    } else {
        ansMsg.value = 'no';
    }
    return 1;
}