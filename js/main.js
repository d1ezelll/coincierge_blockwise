document.getElementById('contact-us_form-button').addEventListener('click', function() {
    document.getElementById('contact-form').reset();
  }
);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
        document.querySelector(".intro-top_title").classList.toggle("hidden");
    })
    
})

window.addEventListener('click', (e) => {
    const header = document.querySelector("header");
    const isClickInsideHeader = header.contains(e.target);
    const isClickOnContactButton = e.target === burger;

    if (!isClickInsideHeader && !isClickOnContactButton) {
        header.classList.remove('open');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".our-clients_slider_item");
    const prevButton = document.querySelector(".our-clients_slider_prev");
    const nextButton = document.querySelector(".our-clients_slider_next");

    let currentSlide = 0;

    
    function showSlide(index) {
        
        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        
        for (let i = 0; i < 3; i++) {
            const slideIndex = (index + i) % slides.length;
            slides[slideIndex].style.display = "block";
        }
    }

    
    showSlide(currentSlide);

    
    prevButton.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    
    nextButton.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
});