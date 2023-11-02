

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
    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        if (i >= index && i < index + 3) {
          testimonial.style.display = "inline-block";
        } else {
          testimonial.style.display = "none";
        }
      });
  
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index / 3);
      });
    }
  
    function nextTestimonial() {
      currentIndex = (currentIndex + 3) % testimonials.length;
      showTestimonial(currentIndex);
    }
  
    function prevTestimonial() {
      currentIndex = (currentIndex - 3 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showTestimonial(index * 3);
        currentIndex = index * 3;
      });
    });
  
    setInterval(nextTestimonial, 5000); // Auto-scroll every 5 seconds
    showTestimonial(currentIndex);
  });
  
