const btnMinus = document.querySelector(".counter-descrease");
const btnPlus = document.querySelector(".counter-increase");
const counterNum = document.querySelector(".counter-number");
let counterValue =  parseInt(counterNum.textContent);

btnPlus.addEventListener("click", function(){
    // Cách 1
    counterValue++;
    counterNum.textContent = counterValue;
    // Cách 2
    // counterValue = counterValue + 1;
    // Cách 3
    // counterValue += counterValue;
});
btnMinus.addEventListener("click", function(){
    // Cách 1
    // Cách 1-a
    // if(counterValue > 0){
    //     counterValue--;
    //     counterNum.textContent = counterValue;
    // }
    // Cách 1-b
    if (counterValue <= 0) return 0;
    counterValue--;
    counterNum.textContent = counterValue;
    // Cách 2
    // counterValue = counterValue - 1;
    // Cách 3
    // counterValue -= counterValue;
});




