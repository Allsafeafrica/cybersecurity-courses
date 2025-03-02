document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".enroll-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Open the enrollment page in a new tab
            window.open("https://surveyheart.com/form/67c474e503fd501dd127b775", "_blank");
        });
    });
});