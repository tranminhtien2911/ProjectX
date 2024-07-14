const button = document.querySelector(".button");
const modalClose = document.querySelector(".modal-close");
const template = `<div class="modal">
    <div class="modal-content">
      <i class="fa fa-times modal-close"></i>
    </div>
  </div>`;
button.addEventListener("click", function(){
    document.body.insertAdjacentHTML("beforeend", template);
});
document.body.addEventListener("click", function(event){
    if(event.target.matches(".modal-close")){
        //handle modal here
        const modal = event.target.parentNode.parentNode; //Modal
        modal.parentNode.removeChild(modal); //modal.parentNode is tag Body

    }else if(event.target.matches(".modal")){
        event.target.parentNode.removeChild(event.target);
    }

});
// modalClose.addEventListener("click", handleCloseModal);

// function handleCloseModal(event){

// }