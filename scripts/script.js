
function sendEmail() {
    let subject= document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=salvatore.butera1998@gmail.com&su=${subject}&body=${message}`);
    document.getElementById("contact").reset();
}