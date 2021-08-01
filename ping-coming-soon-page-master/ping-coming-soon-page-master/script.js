const form = document.getElementsByTagName("form")[0];
console.log(form);

form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    alert("This form only checks for a valid email.")
    form.reset();

});
