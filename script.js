

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              behavior: 'smooth',
              top: targetElement.offsetTop
          });
      }
  });
});


// Form submission handling
const enquiryForm = document.getElementById('enquiry-form');
enquiryForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = enquiryForm.querySelector('input[name="name"]').value;
  const email = enquiryForm.querySelector('input[name="email"]').value;
  const message = enquiryForm.querySelector('textarea[name="message"]').value;

  // You can send this data to a server or Google Sheets using AJAX or other methods.
  // Example: Fetch API or XMLHttpRequest
});

// Image gallery with lightbox
const galleryImages = document.querySelectorAll('.image-gallery img');
galleryImages.forEach(image => {
  image.addEventListener('click', function () {
      // Open the lightbox or modal with the clicked image.
      // You may want to use a third-party library for this functionality.
  });
});

// JavaScript for Horizontal Image Scrolling in Gallery
const galleryContainer = document.querySelector('.gallery-container');
const galleryDots = document.querySelector('.gallery-dots');

galleryContainer.addEventListener('scroll', updateDots);

function updateDots() {
    const container = galleryContainer;
    const images = container.querySelectorAll('img');
    const dotContainer = galleryDots;

    dotContainer.innerHTML = '';

    images.forEach((image, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            scrollToImage(index);
        });
        dotContainer.appendChild(dot);
    });
}

function scrollToImage(index) {
    const container = galleryContainer;
    const images = container.querySelectorAll('img');
    if (index >= 0 && index < images.length) {
        container.scrollLeft = images[index].offsetLeft - (container.offsetWidth - images[index].offsetWidth) / 2;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex = 0;
  
    function showImage(index) {
      if (index < 0) {
        index = imageContainers.length - 1;
      } else if (index >= imageContainers.length) {
        index = 0;
      }
  
      imageContainers.forEach((container, i) => {
        if (i === index) {
          container.style.display = "block";
        } else {
          container.style.display = "none";
        }
      });
  
      currentIndex = index;
    }
  
    prevButton.addEventListener("click", () => {
      showImage(currentIndex - 1);
    });
  
    nextButton.addEventListener("click", () => {
      showImage(currentIndex + 1);
    });
  
    showImage(currentIndex);
  });
  
  // Enquiry form submission handling
  document.addEventListener("DOMContentLoaded", function () {
    const enquiryForm = document.getElementById("enquiry-form");
    const sendButton = document.getElementById("send-button");
  
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = enquiryForm.querySelector('input[name="name"]').value;
      const email = enquiryForm.querySelector('input[name="email"]').value;
      const message = enquiryForm.querySelector('textarea[name="message"]').value;
  
      // Prepare the data for sending
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
  
      // Send the data to the server (you need to implement 'sendmail.php' on the server)
      fetch("sendmail.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Message sent successfully!");
            // Reset the form
            enquiryForm.reset();
          } else {
            alert("Message failed to send. Please try again later.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
  const scrollButton = document.getElementById("scroll-to-top");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
 