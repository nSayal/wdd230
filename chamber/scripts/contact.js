document.addEventListener("DOMContentLoaded", function () {
      const contactForm = document.getElementById('contactForm');
      const responseMessage = document.getElementById('responseMessage');
  
      contactForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const formData = new FormData(contactForm);
  
          // Simulate form submission (you can replace this with actual submission logic)
          setTimeout(() => {
              responseMessage.textContent = "Thank you for your message, " + formData.get('name') + "! We'll get back to you soon.";
              contactForm.reset();
          }, 1000);
      });
  });
  