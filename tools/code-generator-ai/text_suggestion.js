//create a web server in flask with some usefull routes 
//Create a Discord bot in JavaScript with commands and events organized into separate files and folders, and provide a clear folder-file structure.
var suggestions = [
  "Create a web server in flask with some usefull routes",
  "Create a Discord bot in JavaScript with commands and events organized into separate files and folders, and provide a clear folder-file structure."
  ];
var textInp = document.querySelector("#prmpt");
textInp.addEventListener("focus", () => {
var randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
textInp.placeholder = randomSuggestion + " \n\n𝙋𝙧𝙚𝙨𝙨 🆃🅰🅱 𝙠𝙚𝙮 𝙩𝙤 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝙨𝙪𝙜𝙜𝙚𝙨𝙩𝙞𝙤𝙣  ";
});

// 𝙒𝙧𝙞𝙩𝙚 𝙒𝙝𝙖𝙩 𝙔𝙤𝙪 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙂𝙚𝙣𝙚𝙧𝙖𝙩𝙚
textInp.addEventListener("blur", () => {
textInp.placeholder = "𝙒𝙧𝙞𝙩𝙚 𝙒𝙝𝙖𝙩 𝙔𝙤𝙪 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙂𝙚𝙣𝙚𝙧𝙖𝙩𝙚";
});
