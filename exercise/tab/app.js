const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
// [...array/object/string] được gọi là  Spread Operator (toán tử trải rộng) 
// cho phép trải rộng các phần tử của một đối tượng iterable 
// (chẳng hạn như một mảng hoặc chuỗi) vào trong một ngữ cảnh nơi các phần tử đơn lẻ được mong đợi
[...tabItems].forEach(item => item.addEventListener("click", handleTabClick));

function handleTabClick(event){
    // Xóa hết tất cả class active ở các tab-item
    [...tabItems].forEach(item => item.classList.remove("active"));
    // Sau đó add class active vào tab-item hiện tại
    event.target.classList.add("active");


    const tabNumber = parseInt(event.target.dataset.tab);
    // Chỉ áp dụng được nếu để ĐÚNG THỨ TỰ
    // [...tabContent].forEach(item => item.classList.remove("active"));
    // [...tabContent][tabNumber - 1].classList.add("active");
    [...tabContent].forEach((item) => {
        item.classList.remove("active");
        if(parseInt(item.getAttribute("data-tab")) === tabNumber){
            item.classList.add("active");
        }
    })

}