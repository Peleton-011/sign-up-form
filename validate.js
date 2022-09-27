const inputs = document.querySelectorAll("input");

// Patterns
const patterns = {
    phone_number: /^\d{9}$|^\+\d{11}$/,
    first_name: /^[a-z\d]{1,20}$/i,
    last_name: /^[a-z\d]{1,20}$/i,
    password: /^[\d\w@-]{8,20}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    //           yourname @ domain     . com          ( .uk )
};

// Validation function
function validate(field, regex) {
    if (regex == null) {
        // No regex found when expected
        if (field.attributes.id.value !== "password-confirm") {
            console.log("Error, expected RegEx not found");
            return;
        }
        // Password confirmation
        field.className =
            field.value === document.getElementById("password").value
                ? "valid"
                : "invalid";
        return;
    }
    field.className = regex.test(field.value) ? "valid" : "invalid";
}

// Keyup events call the validate() func
inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});
