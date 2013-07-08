//**********************************************************
// Script to create answer spaces.
//
// Variables:
// qNum = Question Number
// type = Type of answer box
// variable = Variable that is represented by the answer box
//
//**********************************************************

// Draw answer portion
function answer_space(qNum,type,variable){
    
    switch (type) {
        case 1:
            document.write('<div style=\"float: left; padding-top: 10px;\"><input type=\"text\" id=\"'+variable+'Ans'+qNum+'\" name=\"'+variable+'Ans'+qNum+' \" style=\"width: 40px;\"/></div>');
            break;
        case 2:
            document.write('<div style=\"float: left; padding-top: 10px; margin-left:5px;\">\\(x\\)</div>');
            document.write('<div style=\"float: left; width: 40px; height: 30px; padding-bottom:10px;\"><input id=\"'+variable+'Ans'+qNum+'\"name=\"'+variable+'Ans'+qNum+'\" type=\"text\" style=\" width: 40px;\"/></div>');
            break;
        case 3:
            document.write('<div style=\"float: left; padding-top: 10px; margin-left:8px;\">\\(y\\)</div>');
            document.write('<div style=\"float: left; width: 40px; height: 30px; padding-bottom:10px;\"><input id=\"'+variable+'Ans'+qNum+'\"name=\"'+variable+'Ans'+qNum+'\" type=\"text\" style=\" width: 40px;\"/></div>');
            break;
        case 4:
            document.write('<div style=\"float: left; padding-bottom: 10px; height: 30px; margin-left:7px; \">\\(x\\)</div>');
            break;
        case 5:
            document.write('<div style=\"float: left; padding-bottom: 10px; height: 30px; margin-left:7px; \"><input id=\"'+variable+'Ans'+qNum+'\"name=\"'+variable+'Ans'+qNum+'\" type=\"text\" style=\" width: 40px;\"/></div>');
            break;
    }		
}

// Make symbols to complete the answer space structure
function symbol_space(symbol){
    document.write('<div style=\"float: left; padding-top: 10px; margin-left:7px; margin-right:5px;\">\\('+symbol+'\\)</div>');
}