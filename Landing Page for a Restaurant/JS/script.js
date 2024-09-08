document.addEventListener('DOMContentLoaded', function () {
    fetch('partials/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    fetch('partials/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
    // Change navbar background color on scroll
    const isSignupPage = document.body.classList.contains('signup-page');
    window.addEventListener('scroll', function () {
      const nav = document.querySelector('nav');
      const navLinks = document.querySelectorAll('nav ul li a');
      const burgerIcon = document.querySelector('.chackbtn i');
        
      if (window.scrollY > 50) {  
          nav.style.backgroundColor = 'white';
          navLinks.forEach(link => {
              link.style.color = 'black';
          });
          burgerIcon.style.color = 'black'; 
      } else {
        nav.style.backgroundColor = 'transparent'; 
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
        burgerIcon.style.color = 'white';
      }
    });
});
    
// JavaScript to handle the background and text changes
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        '/Assets/image/Bg1.png',
        '/Assets/image/Bg2.png',
        '/Assets/image/Bg3.png'
    ];

    const messages = [
        'Welcome To Dhaba Indian Restaurant',
        'Our Menu: See what\'s new today',
        'Get Ready to Join Us'
    ];

    let currentIndex = 0;

    const imageContainer = document.getElementById('image-container');
    const messageText = document.getElementById('message-text');

    // Set initial background and message
    imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    messageText.textContent = messages[currentIndex];

    // Add event listeners to arrows
    document.getElementById('left-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateBackgroundAndMessage();
    });

    document.getElementById('right-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateBackgroundAndMessage();
    });

    // Function to update background and message
    function updateBackgroundAndMessage() {
        imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;
        messageText.textContent = messages[currentIndex];
    }
});


function goMenu() {
    window.location.href = 'Menu.html';  // Replace with the actual URL or path of your second page
}

document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault(); // Prevent form submission
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.offers-slider');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let slideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.offer-item');
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function () {
        slideIndex--;
        showSlide(slideIndex);
    });

    nextButton.addEventListener('click', function () {
        slideIndex++;
        showSlide(slideIndex);
    });

    // Initialize slider
    showSlide(slideIndex);
});
