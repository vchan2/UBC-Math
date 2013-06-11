var scorm = pipwerks.SCORM;
var lmsConnected = false;

//Error Handling
function handleError(msg){
    alert(msg);
    window.close();
}

//Initialize connection with LMS
function initCourse(){
    //scorm.init returns a boolean
    lmsConnected = scorm.init();
    
    if(lmsConnected){
        
        //Get the completion status of the course
        var completionStatus = scorm.get("cmi.completion_status");
        
        //Check if course has been completed
        if (completionStatus == "completed"){
            handleError("You have already completed this section. Your don't need to continue");
        }
        
        //SPACE TO GET OR SET INFORMATION IN THE LMS--------    
        
        
    }else{
        //Alert user that LMS failed to connect
        handleError("Error: Could not connect with the LMS");
    }
    
}

//================================
//	Load & Unload Functions
//================================

var processedUnload = false;
var reachedEnd = false;

function doStart(){
        
        //Initialize communication with LMS
        initCourse();
        
        //Add bookmark capability....**********
        
        
}

function doUnload(pressedExit){
    //Don't call the function twice
    if (processesUnload == true){return;}
    
    processedUnload = true;
    
    scorm.set("cmi.exit","suspend");
    
    scorm.quit();
}

//==========================
// Window load functions
//==========================
window.onload = function (){
        doStart();
}

window.onbeforeunload = function(){
    doUnload(false);
}

//Pressed Exit
window.onunload = function(){
    doUnload();
}