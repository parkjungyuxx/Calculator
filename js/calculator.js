// 모든 버튼 요소들을 가져옵니다
const inputKeys = document.querySelectorAll(".input-keys");
const resultDisplay = document.getElementById("result-display");

// 처음 버튼을 눌렀는지 여부를 확인하는 플래그 변수
let isFirstInput = true;

// 계산을 위해 입력된 모든 값을 문자열로 저장
let currentExpression = "";

function saveInputKeys(event) {
  const clickedButton = event.target.textContent;

  // "AC" 버튼을 눌렀을 때 동작
  if (clickedButton === "AC") {
    // 로컬 저장소에서 "inputArray" 데이터를 삭제하고 화면을 초기화
    localStorage.removeItem("inputArray");
    resultDisplay.textContent = 0; // 화면을 0으로 초기화
    isFirstInput = true; // 초기화 후 다시 첫 입력 상태로 변경
    currentExpression = ""; // 계산식 초기화
    console.log("로컬 저장소 초기화됨");
    return; // 함수 종료
  }

  // "Enter" 버튼을 눌렀을 때 결과 계산
  if (clickedButton === "Enter") {
    try {
      // eval() 함수로 문자열로 표현된 수식을 계산
      const result = eval(currentExpression);

      // 계산된 결과를 result-display에 표시
      resultDisplay.textContent = result;

      // 계산된 결과를 콘솔에 출력 (테스트용)
      console.log("계산 결과:", result);

      // 계산이 끝났으므로 다시 첫 입력 상태로 변경
      currentExpression = result.toString(); // 결과값으로 초기화
      isFirstInput = true;
    } catch (error) {
      alert("잘못된 수식입니다.");
    }
  } else {
    // 첫 번째 입력인 경우, 화면의 "0"을 지움
    if (isFirstInput) {
      resultDisplay.textContent = ""; // "0"을 지움
      isFirstInput = false; // 첫 입력 후 false로 변경
    }

    // 입력된 버튼 값을 문자열로 추가
    currentExpression += clickedButton;

    // 실시간으로 화면에 현재 입력된 값을 표시
    resultDisplay.textContent += clickedButton;

    // 입력된 값을 콘솔에 출력 (테스트용)
    console.log("현재 수식:", currentExpression);
  }
}

// 각 버튼에 클릭 이벤트 리스너를 추가합니다
inputKeys.forEach((button) => {
  button.addEventListener("click", saveInputKeys);
});
