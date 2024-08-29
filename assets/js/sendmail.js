document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-btn").addEventListener("click", function () {
            // Collect form data
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var phone = document.querySelector('input[name="phone"]').value;
    var subject = document.querySelector('input[name="subject"]').value;
    var message = document.querySelector('textarea[name="message"]').value;
  
    // Validate form fields
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Create email parameters
    var templateParams = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };
  
    // Send email using EmailJS
    emailjs.send("service_wwmrqry", "template_l2m4oix", templateParams).then(
      function (response) {
        alert("Email sent successfully!");
        document.getElementById("php-email-form").reset();
      },
      function (error) {
        alert("Failed to send email. Please try again later.");
      }
    );
    });
  });

  