const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    form.reset();
    alert("This form only checks for email validation.");
    

});
