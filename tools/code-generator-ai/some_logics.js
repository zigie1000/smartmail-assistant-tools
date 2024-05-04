let text = "```john hii i am john i am a software engineer ```  is anything else i can help you ```alice hello i'm alice and I work as a designer ```";

// Define a regular expression pattern to extract name and description
let pattern = /```(\w+)\s+([^`]+)```/g;

// Array to store all matches
let matches = [];
let match;

// Loop through all matches using RegExp.exec() in a while loop
while ((match = pattern.exec(text)) !== null) {
    let codeName = match[1];
    let code = match[2];
 var editorDiv = document.createElement("div");
    editorDiv.id = "editor";
    var aceEditor = ace.edit(editorDiv);
    aceEditor.setReadOnly(true)
    aceEditor.session.setMode(`ace/mode/${codeName}`)
    aceEditor.setValue(code)
    document.append(editorDiv);
}

if (matches.length > 0) {
    console.log("Matches:");
    console.log(matches);
} else {
    console.log("No valid pattern found in the text.");
}


let codePattern = /```(\w+)\s+([^`]+)```/g;
let _matchesFound = [];
let _match;
function parseResponse(text){
if(!text || text.trim() === ""){
return "No raw text Was Provided!";
}
  
}
