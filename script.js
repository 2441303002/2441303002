let targetNumber = Math.floor(Math.random() * 100) + 1; // 生成1到100之间的随机数  
let guesses = 0; // 记录猜测次数  
  
function checkGuess() {  
    const userGuess = parseInt(document.getElementById('guessInput').value, 10);  
    const feedbackElement = document.getElementById('feedback');  
  
    if (isNaN(userGuess)) {  
        feedbackElement.textContent = '请输入一个有效的数字！';  
        return;  
    }  
  
    guesses++;  
  
    if (userGuess < targetNumber) {  
        feedbackElement.textContent = '太小了！再试试看？';  
    } else if (userGuess > targetNumber) {  
        feedbackElement.textContent = '太大了！再试试看？';  
    } else {  
        // 猜对了  
        feedbackElement.textContent = `恭喜你，猜对了！数字就是${targetNumber}。你总共猜了${guesses}次。`;  
  
        // 重置游戏  
        targetNumber = Math.floor(Math.random() * 100) + 1; // 重新生成目标数字  
        guesses = 0; // 重置猜测次数  
        document.getElementById('guessInput').value = ''; // 清空输入框  
  
        // 可以在这里添加更多重置逻辑，比如更新页面上的其他元素  
    }  
}