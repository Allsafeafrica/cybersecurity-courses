document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".enroll-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Open the enrollment page in a new tab
            window.open("https://form.jotform.com/251027363941555", "_blank");
        });
    });
});
