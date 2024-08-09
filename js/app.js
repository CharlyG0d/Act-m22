document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      links.forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
  //Funciones para swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
});


//modal img
document.addEventListener('DOMContentLoaded', () => {
  
  const modalBtns = document.querySelectorAll('.modal-btn');
  const modalImgs = document.querySelectorAll('.modal-img');
  const closeBtns = document.querySelectorAll('.close');
  const modals = document.querySelectorAll('.modal');
  const audio = document.getElementById("modalAudio");

  modalImgs.forEach(img => {
    img.addEventListener('click', () => {
      const modalId = img.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
      audio.play();
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.style.display = 'none';
      audio.pause();
      audio.currentTime = 0;
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      modals.forEach(modal => modal.style.display = 'none');
      audio.pause();
         audio.currentTime = 0;
    }
  });
  //modal boton
  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.dataset.modal);
      modal.style.display = 'block';
      
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.dataset.modal);
      modal.style.display = 'none';
      
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      modals.forEach(modal => modal.style.display = 'none');
      
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
 //Funcion para enviar un alert despues de colocar el nombre y email
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Gracias. Nos pondremos en contacto contigo pronto.');
});

//funcion para restablecer los valores de los forms
document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault(); 
  event.target.reset();
});
const emailVerify = ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
const email = "example@email.com"
console.log(emailVerify.test(email));


});

