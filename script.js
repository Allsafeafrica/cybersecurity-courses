document.addEventListener("DOMContentLoaded", function () {
    const enrollButtons = document.querySelectorAll(".enroll-btn");
    const modal = document.getElementById("registration-form");
    const closeModal = document.querySelector(".close-btn");
    const selectedCourse = document.getElementById("selected-course");
    const courseNameInput = document.getElementById("course-name");
    const enrollmentForm = document.getElementById("enrollment-form");

    // Function to open modal
    function openModal(course) {
        selectedCourse.innerText = course;
        courseNameInput.value = course;
        modal.classList.add("show"); // Add "show" class to make it visible
    }

    // Attach event listener to all enroll buttons
    enrollButtons.forEach(button => {
        button.addEventListener("click", function () {
            const course = this.getAttribute("data-course");
            openModal(course);
        });
    });

    // Function to close modal
    function closeModalFunc() {
        modal.classList.remove("show"); // Remove "show" class to hide it
    }

    // Close modal when clicking "X" button
    closeModal.addEventListener("click", closeModalFunc);

    // Close modal when clicking outside modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });

    // Handle form submission
    enrollmentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const course = courseNameInput.value;

        // Send email using mailto link
        window.location.href = mailto:allsafeafrica@gmail.com?subject=Enrollment Request for ${course}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ACourse: ${course};
    });
});