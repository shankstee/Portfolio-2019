const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    // Toggle navbar
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active")
        // Animate Links
        navLinks.forEach((link, index) => {
            // any future link will be animated correctly
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            console.log(index / 7)
        })

        // Burger animation
        burger.classList.toggle("burgerAnim")
    });

};

function sendEmail() {
    let userEmail = document.getElementById("emailInput").value;
    let comments = document.getElementById("textArea").value;
    let name = document.getElementById("nameInput").value;

    Email.send({
        Host: 'smtp.elasticemail.com',  // for testing
        Username: 'shanks.trae@gmail.com',  // from user input, do we need it?
        Password: '64e883c9-dfe3-4084-9506-4586468bb8b3',  // probably not needed for our purpose
        To: 'shanks.trae@yahoo.com',    // for testing
        From: "shanks.trae@gmail.com",  //user input
        Subject: 'From Portfolio',    // first words of comment or static?
        Body: `${name} sent you a message and would love a reply; the message is: ${comments} Email: ${userEmail}`   // will come from comment form
    }).then(message => {
            alert("Thank you for the message, I will contact you shortly!")
            
    })
}

document.getElementById("sendButton").addEventListener("click", function(e){
    e.preventDefault();
    sendEmail();
  });




navSlide();