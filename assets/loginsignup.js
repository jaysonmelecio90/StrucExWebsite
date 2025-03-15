    document.addEventListener("DOMContentLoaded", function () {
        const loginForm = document.querySelector("#login form");
        const signupForm = document.querySelector("#signup form");

        function showError(input, message) {
            const formGroup = input.closest(".mb-3");
            let error = formGroup.querySelector(".text-danger");
            if (!error) {
                error = document.createElement("div");
                error.className = "text-danger mt-1";
                formGroup.appendChild(error);
            }
            error.textContent = message;
            input.classList.add("is-invalid");
        }

        function clearError(input) {
            input.classList.remove("is-invalid");
            const formGroup = input.closest(".mb-3");
            const error = formGroup.querySelector(".text-danger");
            if (error) {
                formGroup.removeChild(error);
            }
        }

        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        loginForm.addEventListener("submit", function (event) {
            let valid = true;
            const email = document.querySelector("#loginEmail");
            const password = document.querySelector("#loginPassword");

            clearError(email);
            clearError(password);

            if (!validateEmail(email.value)) {
                showError(email, "Invalid email format.");
                valid = false;
            }
            if (password.value.trim() === "") {
                showError(password, "Password cannot be empty.");
                valid = false;
            }

            if (!valid) event.preventDefault();
        });

        signupForm.addEventListener("submit", function (event) {
            let valid = true;
            const name = document.querySelector("#signupName");
            const email = document.querySelector("#signupEmail");
            const password = document.querySelector("#signupPassword");

            clearError(name);
            clearError(email);
            clearError(password);

            if (name.value.trim() === "") {
                showError(name, "Name cannot be empty.");
                valid = false;
            }
            if (!validateEmail(email.value)) {
                showError(email, "Invalid email format.");
                valid = false;
            }
            if (password.value.length < 6) {
                showError(password, "Password must be at least 6 characters long.");
                valid = false;
            }

            if (!valid) event.preventDefault();
        });
    });

        document.addEventListener("DOMContentLoaded", function () {
            const imageElement = document.querySelector(".dynamic-image");
            const loginTab = document.querySelector("a[href='#login']");
            const signupTab = document.querySelector("a[href='#signup']");

            function updateImage(tab) {
                if (tab === "login") {
                    imageElement.src = "/assets/images/boy.png"; // Login image
                } else {
                    imageElement.src = "/assets/images/adhd.png"; // Sign up image
                }
            }

            loginTab.addEventListener("click", () => updateImage("login"));
            signupTab.addEventListener("click", () => updateImage("signup"));
        });


        // Cache login username
        const loginUsername = document.getElementById("loginUsername");
        loginUsername.value = localStorage.getItem("username") || "";

        document.getElementById("loginForm").addEventListener("submit", function() {
            localStorage.setItem("username", loginUsername.value);
        });