var suggestions = [
  "Create a web server in flask with some usefull routes",
  "Create a Discord bot in JavaScript with commands and events organized into separate files and folders, and provide a clear folder-file structure.",
  "Develop a task management application using React.js with features like adding tasks, marking tasks as completed, and filtering tasks based on status and provide a beautiful file-folder structure",
  "Build a Beautiful Landing Page in html, css and js also use best colors and styles to make the UI beautiful ",
  "Write a blog post more than 100 words about AI usages and advantages in real life use markdown to style the post and give the markdown code in a snippet",
  "Design and code a mobile-first landing page for a fictional product using Tailwind CSS.",
  "Create a web server in Flask with CRUD (Create, Read, Update, Delete) operations for a simple database.",
  "Develop a basic weather app that fetches weather data based on user input (city or ZIP code) using an API like OpenWeatherMap.",
  "Build a simple calculator with basic arithmetic operations using HTML, CSS, and JavaScript.",
  "Develop a chat application using sockets to enable real-time messaging between multiple clients connected to a central server in nodeJs.",
  "Build a quiz game with multiple-choice questions, scoring system, and leaderboard."
  ];
let randomSuggestion = "";
function shuffleSuggestion(){
randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
textInp.placeholder = randomSuggestion + " \n\n𝙋𝙧𝙚𝙨𝙨 🅴🅽🆃🅴🆁 𝙠𝙚𝙮 𝙩𝙤 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝙨𝙪𝙜𝙜𝙚𝙨𝙩𝙞𝙤𝙣 \n𝙋𝙧𝙚𝙨𝙨 BackSpace 𝙠𝙚𝙮 𝙩𝙤 𝙨𝙝𝙪𝙛𝙛𝙡𝙚";
}
var textInp = document.querySelector("#prmpt");
textInp.addEventListener("focus", () => {
shuffleSuggestion()});

// 𝙒𝙧𝙞𝙩𝙚 𝙒𝙝𝙖𝙩 𝙔𝙤𝙪 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙂𝙚𝙣𝙚𝙧𝙖𝙩𝙚
textInp.addEventListener("blur", () => {
textInp.placeholder = "𝙒𝙧𝙞𝙩𝙚 𝙒𝙝𝙖𝙩 𝙔𝙤𝙪 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙂𝙚𝙣𝙚𝙧𝙖𝙩𝙚 \n\n𝘾𝙡𝙞𝙘𝙠 𝙏𝙤 𝙂𝙚𝙩 𝙎𝙤𝙢𝙚 𝙎𝙪𝙜𝙜𝙚𝙨𝙩𝙞𝙤𝙣";
});

textInp.addEventListener("keydown", (event) => {
if(event.keyCode === 13 && textInp.value === ""){
textInp.value = randomSuggestion ?? "";
}else if(event.keyCode === 8 && textInp.value === ""){
shuffleSuggestion()
}
});
