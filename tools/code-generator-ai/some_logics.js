let text = "```john hii i am john i am a software engineer ```  is anything else i can help you ```alice hello i'm alice and I work as a designer ```";

// Define a regular expression pattern to extract name and description
let pattern = /```(\w+)\s+([^`]+)```/g;

// Array to store all matches
let matches = [];
let match;

// Loop through all matches using RegExp.exec() in a while loop
while ((match = pattern.exec(text)) !== null) {
    // Extract the name and description from the matched groups
    let name = match[1];
    let description = match[2];

    // Push the extracted name and description as an object into the matches array
    matches.push({ name, description });
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
