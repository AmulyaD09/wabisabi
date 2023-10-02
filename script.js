
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const galleryImgs = document.querySelectorAll(".gallery-img");
// let currentlySelected = 0;


// prevBtn.addEventListener("click", function() {
//     galleryImgs[currentlySelected].classList.remove("active");
//     currentlySelected--;
//     galleryImgs[currentlySelected].classList.add("active");
//     nextBtn.disabled = false;

//     if (currentlySelected === 0 ) {
//         prevBtn.disabled = true;
//     }

// });

// nextBtn.addEventListener("click", function() {
//     galleryImgs[currentlySelected].classList.remove("active");
//     currentlySelected++;
//     galleryImgs[currentlySelected].classList.add("active");
//     prevBtn.disabled = false;

//     if (galleryImgs.length === currentlySelected + 1 ) {
//         nextBtn.disabled = true;
//     }

// });

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const gallery = document.querySelector(".image-gallery");
    const slider = document.querySelector(".image-slider");
    const galleryImages = document.querySelectorAll(".gallery-img");
  
    let currentIndex = 0;
  
    nextButton.addEventListener("click", function () {
      if (currentIndex < galleryImages.length - 1) {
        currentIndex++;
        updateSlider();
      }
    });
  
    prevButton.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  
    function updateSlider() {
      const translateX = -currentIndex * (galleryImages[0].clientWidth + 10); // 10px for margin
      slider.style.transform = `translateX(${translateX}px)`;
      updateButtonState();
    }
  
    function updateButtonState() {
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === galleryImages.length - 1;
    }
  
    updateButtonState();
  });
  
  
    
function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        email_sender: document.getElementById("emailSender").value,
        subject_sender: document.getElementById("subjectSender").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_cp0cx0c','template_l64wtni',tempParams)
     .then(function(res){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mail Sent Successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
     });
}

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: [" simple, imperfect, and impermanent :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
        
    });
    var typed = new Typed(".typing-2",{
        strings: [" an Amateur Artist.","  and a Budding writer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

     // Scroll to top button script
      const btnScrollToTop = document.querySelector("#btnScrollToTop");

      btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
