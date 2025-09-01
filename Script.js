/*****DONATION POPUP*****/
const openBtn = document.getElementById("openDonate");
const popup = document.getElementById("donatePopup");
const closeBtn = document.getElementById("closePopup");
const donateForm = document.getElementById("donateForm");
const thankYouMsg = document.getElementById("thankYouMsg");

// Open popup
openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  thankYouMsg.style.display = "none"; 
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// Handle form submit
donateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;

  // Show thank you message under form
  thankYouMsg.innerText = `Thank you, ${name}, for donating $${amount}! ❤️`;
  thankYouMsg.style.display = "block";
  donateForm.reset();
});

/****MOBILE MENU****/
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/***TESTIMONIALS***/
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

setInterval(() => {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
}, 4000);

/***CONTACT FORM VALIDATION***/
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if(name === "" || email === "" || message === ""){
    formMessage.style.display = "block";
    formMessage.style.color = "red";
    formMessage.textContent = "✅ Message sent successfully!";
    this.reset();
      setTimeout(() => {
            formMessage.style.display = "none";
        }, 3000);
    return;
  }

  formMessage.style.display = "block";
  formMessage.style.color = "green";
  formMessage.textContent = "✅ Message sent successfully!";
  this.reset();
  formMessage.style.display = "none";
  formMessage.textContent = "";
});
/***HERO BACKGROUND SLIDESHOW***/
const slides = [
  {
    img: "https://cbx-prod.b-cdn.net/COLOURBOX63983074.jpg?width=800&height=800&quality=70",
    title: "Together We Can Make a Difference",
    desc: "Join our mission to help those in need and create a better future for everyone."
  },
  {
    img: "https://cdn2.hubspot.net/hubfs/29051/iStock-813128966.jpg",
    title: "Your Kindness Matters",
    desc: "Every contribution brings hope and support to communities in need."
  },
  {
    img: "https://i.pinimg.com/736x/b5/94/f5/b594f5ea0868b08024c16de7e80670c8.jpg",
    title: "Be the Change",
    desc: "Small actions today can create a big difference tomorrow."
  },
  {
    img: "https://t4.ftcdn.net/jpg/03/20/40/93/360_F_320409321_niyM6DAO166WLJuEX8EOXCMvWwKSWDfA.jpg",
    title: "Support Our Mission",
    desc: "Join hands with us to make the world a better place for all."
  }
];

let currentSlide = 0;
const heroImg = document.getElementById("heroImg");
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");

// Function to update slide
function showSlide(index) {
  heroImg.classList.remove("active"); // fade out
  setTimeout(() => {
    heroImg.src = slides[index].img;
    heroTitle.textContent = slides[index].title;
    heroDesc.textContent = slides[index].desc;
    heroImg.classList.add("active"); // fade in
  }, 300);
}

// Initial load
showSlide(currentSlide);

// Next button
document.getElementById("nextBtn").addEventListener("click", () => {
  nextSlide();
});

// Prev button
document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Next slide function
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto play every 3 seconds
setInterval(nextSlide, 3000);

/***VOLUNTEER FORM***/
document.getElementById("volunteerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("vName").value.trim();
  const email = document.getElementById("vEmail").value.trim();
  const skills = document.getElementById("vSkills").value.trim();
  const message = document.getElementById("vMessage").value.trim();

  if (name === "" || email === "" || skills === "" || message === "") {
    alert("Please fill in all volunteer form fields.");
    return;
  }

  alert("Thank you for signing up as a volunteer! We'll be in touch soon.");
  this.reset();
});

/***ABOUT SECTION TESTIMONIAL SWITCHER***/
const buttons = document.querySelectorAll(".customer-btn");
const testimonialText = document.getElementById("testimonial-text");
const testimonialName = document.getElementById("testimonial-name");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    // Remove active class from all
    buttons.forEach(b => b.classList.remove("active"));
    // Add active to hovered
    btn.classList.add("active");
    // Update testimonial text & name
    testimonialText.textContent = btn.getAttribute("data-text");
    testimonialName.textContent = btn.getAttribute("data-name");
  });
});

// Set first button active by default
buttons[0].classList.add("active");

/***STATS COUNTER***/
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 100; // smaller = faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Trigger animation when section is visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.querySelector("#about"));
});
