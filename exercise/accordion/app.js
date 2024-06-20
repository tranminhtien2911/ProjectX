// const accordionHeaders = document.querySelectorAll(".accordion-header");
// const accordionContent = document.querySelectorAll(".accordion-content");
// [...accordionHeaders].forEach(item => item.addEventListener("click", handleAccordionClick));
// const activeStr = "is-active"
// function handleAccordionClick(event) {
//     const content = event.target.nextElementSibling;
//     content.style.height = `${content.scrollHeight}px`;
//     content.classList.toggle(activeStr);
//     if(!content.classList.contains("is-active")){
//         content.style.height = "0px";
//     }
   
//     const icon = event.target.querySelector(".icon");
//     icon.classList.toggle("fa-angle-down");
//     icon.classList.toggle("fa-angle-up");
// }

const accordionHeaders = document.querySelectorAll(".accordion-header");
const activeStr = "is-active";

[...accordionHeaders].forEach(item => item.addEventListener("click", handleAccordionClick));

function handleAccordionClick(event) {
    const targetHeader = event.target.closest(".accordion-header");
    const content = targetHeader.nextElementSibling;
    const isActive = targetHeader.classList.contains(activeStr);

    // Remove is-active class from all headers and content, and reset height
    [...accordionHeaders].forEach((header) => {
        header.classList.remove(activeStr);
        header.nextElementSibling.classList.remove(activeStr);
        header.nextElementSibling.style.height = "0px";
        const icon = header.querySelector(".icon");
        if (icon) {
            icon.classList.remove("fa-angle-up");
            icon.classList.add("fa-angle-down");
        }
    });

    // If the clicked header was not active, activate it and its content
    if (!isActive) {
        targetHeader.classList.add(activeStr);
        content.style.height = `${content.scrollHeight}px`;
        content.classList.add(activeStr);
        const icon = targetHeader.querySelector(".icon");
        if (icon) {
            icon.classList.remove("fa-angle-down");
            icon.classList.add("fa-angle-up");
        }
    }
}
