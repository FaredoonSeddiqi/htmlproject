const collapsible = document.querySelectorAll(".collapsaible");
collapsible.forEach((item)=>{
    item.addEventListener("click", function(){
            this.classList.toggle("collapsaible--expended")
    })
});