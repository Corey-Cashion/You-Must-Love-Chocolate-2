function chocolateLover() {
    let answer;
    do {
      answer = prompt("Do you like chocolate? (yes/no)").toLowerCase();
    } while (answer !== "yes" && answer !== "y");
  
    if (answer === "yes" || answer === "y") {
      let responseContainer = document.getElementById("response-container");
      let response = document.createElement("div");
      response.className = "response";
      response.textContent = "You must love chocolate! 😊";
      responseContainer.appendChild(response);
    }
  }