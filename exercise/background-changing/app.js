const wrap = document.querySelector(".wrap");
const button = document.querySelector(".change");
const colors = [
    "#ffa400",
    "#00aefd",
    "#ff6bcb",
    "#07a787",
    "#2979ff",
    "#e74c3c",
    "#3D6EF7",
  ];

button.addEventListener("click", handleChangeColor);

function handleChangeColor(e){
    // Cách 1
    // document.body.setAttribute("style", "background-color: red");
    // Cách 2
    // document.body.style.backgroundColor = "red";
    // Lấy Random từ mảng Colors
    // floor là làm tròn xuống
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;

}