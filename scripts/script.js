window.addEventListener("load", () => {
    let goUp = document.querySelector(".go-up");
    window.addEventListener("scroll",()=>{
        if(window.scrollY>250){
            goUp.style.opacity = "100%";
        }
        else{
            goUp.style.opacity = "0%";
        }

    })

});