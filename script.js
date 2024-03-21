
const dialogueMessages = [
    "Hi! I am Clara",
    "Welcome to the website!",
    "How can I assist you today?",
    "Feel free to explore our services!",
    "Need help? Just ask!"
  ];
  
  function getRandomDialogue() {
    return dialogueMessages[Math.floor(Math.random() * dialogueMessages.length)];
  }
  

  document.addEventListener("DOMContentLoaded", function() {
    const dialogueElement = document.getElementById("dialogue");
    dialogueElement.textContent = getRandomDialogue();
  });
  

  document.addEventListener("click", function() {
    const dialogueElement = document.getElementById("dialogue");
    dialogueElement.textContent = getRandomDialogue();
  });
  function search_num() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("num");
  
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "list-item";
      }
    }
  }
  