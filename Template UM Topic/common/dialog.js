//**********************************************************
// Script to create a jQuery UI dialog box and tooltips
//
//**********************************************************

$(function(){
    $("#dialog").dialog({
        autoOpen: false,
        show: {
                effect: "blind",
                duration: 1000
        },
        width: 500
    });
    
    $("#checkAns").click(function(){
        $("#dialog").dialog("open");
    });

    $(document).tooltip();
});