/**
 *  <div class="lightbox">
        <div class="lightbox-content">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80"
                alt="" class="lightbox-image" />
        </div>
    </div>
*/
const images = document.querySelectorAll(".content img");
images.forEach(item => item.addEventListener("click", handleZoomImage));
function handleZoomImage(event){
    //console.log(event.target);
    const image = event.target.getAttribute("src");

    const template = 
    `<div class="lightbox">
        
        <div class="lightbox-content">
            <i class="fa fa-angle-left lightbox-prev"></i>
            <img src="${image}"
                alt="" class="lightbox-image" />
            <i class="fa fa-angle-right lightbox-next"></i>
        </div>
        
    </div>`;
    document.body.insertAdjacentHTML("beforeend",template);
}
document.body.addEventListener("click", function(event){
    if(event.target.matches(".lightbox")){
        // remove lightbox out of dom
        event.target.parentNode.removeChild(event.target);
    }

});
