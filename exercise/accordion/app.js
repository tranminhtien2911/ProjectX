const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContent = document.querySelectorAll(".accordion-content");
[...accordionHeaders].forEach(item => item.addEventListener("click", handleAccordionClick));
const activeStr = "is-active"
function handleAccordionClick(event) {
    const content = event.target.nextElementSibling;
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle(activeStr);
    if(!content.classList.contains("is-active")){
        content.style.height = "0px";
    }
   
    const icon = event.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
}