//**********************************************************
// Script to create a jQuery UI dialog box and tooltips
//
//**********************************************************

$(function(){
    $("#dialog").dialog({
        autoOpen: false,
        show: {
                effect: "blind",
                duration: 600
        },
        width: 520
    });
    
    $("#checkAns").click(function(){
        $("#dialog").dialog("open");
    });

    //$(document).tooltip();
});