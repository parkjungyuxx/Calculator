const inputKeys = document.querySelectorAll(".input-keys");
const resultDisplay = document.getElementById("result-display");
let isFirstInput = true;
let currentExpression = "";

function saveInputKeys(event) {
  const clickedButton = event.target.textContent;
    if (clickedButton === "AC") {
    localStorage.removeItem("inputArray");
    resultDisplay.textContent = 0; 
    isFirstInput = true; 
    currentExpression = ""; 
    return; 
  }

 
  if (clickedButton === "Enter") {
    try {
      const result = eval(currentExpression);
      resultDisplay.textContent = result;
      currentExpression = result.toString(); 
      isFirstInput = true;
    } catch (error) {
      alert("잘못된 수식입니다.");
    }
  } else {
    if (isFirstInput) {
      resultDisplay.textContent = ""; 
      isFirstInput = false; 
    }
    
    currentExpression += clickedButton;
    resultDisplay.textContent += clickedButton;
  }
}

inputKeys.forEach((button) => {
  button.addEventListener("click", saveInputKeys);
});
