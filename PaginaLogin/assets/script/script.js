document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const togglePasswordButton = document.getElementById("toggle-password");
    const loginForm = document.getElementById("login-form");

    togglePasswordButton.addEventListener("click", function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePasswordButton.innerHTML = '<i class="bi bi-eye-slash"></i>';
            
        } else {
            passwordInput.type = "password";
            togglePasswordButton.innerHTML = '<i class="bi bi-eye"></i>';
        }
    });
  
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        window.location.href = "pagina_principal.html";
    });
});


