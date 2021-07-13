window.addEventListener("load", () => {
    var i = 0;
    let contents = document.querySelectorAll('.before');
    window.addEventListener('scroll', () => {
        if (i < contents.length) {
            var content = contents[i];
        }
        if(content){
            let contentPosition = content.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.5;
            if (contentPosition < screenPosition) {
                content.classList.add('active');
                if (i < contents.length - 1) {
                    i++;
                }
            } else {
                content.classList.remove('active');
                if (i > 0) {
                    i--;
                }
            }
        }
    })
    myElement = document.getElementById("call-to-scroll");
    setInterval(() => {
        myElement.classList.add("scroll");
    }, 1000);
    setTimeout(() => {
        setInterval(() => {
            myElement.classList.remove("scroll");
        }, 1000);
    }, 500);
})
