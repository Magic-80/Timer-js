document.addEventListener('DOMContentLoaded', function () {
  const svg = document.getElementById('particle-svg');
  const dateParticles = 200;
  const screenHeight = window.innerHeight; 

  let box = document.querySelectorAll('.box');

  function createParticle() {
    let circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );

    let size = Math.random() * 3 + 1; 
    let x = Math.random() * window.innerWidth; 
    let y = -size; 

    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', size);
    circle.setAttribute('fill', '#46485B');

    svg.appendChild(circle);


    gsap.to(circle, {
      duration: Math.random() * 10 + 2, 
      y: screenHeight + size,
      ease: 'linear',
      onComplete: function () {
        svg.removeChild(circle);
        createParticle();
      },
    });
  }

  gsap.from(box, {
    duration: 1.5,
    y: 'random(-300, 300, 2)',
    y: 'random(-500, 500, 0)',
    opacity: 0,
    stagger: {
      each: 0.35,
      from: 'random',
      ease: 'power4.inOut',
    },
  });


  for (let i = 0; i < dateParticles; i++) {
    setTimeout(createParticle, Math.random() * 9000);
  }
});

const padZero = (date) => {
  return date < 10 ? `0${date}` : date;
};

const updateTimer = () => {
  const date = new Date();

  document.querySelector('#date').textContent = padZero(date.getDate());
  document.querySelector('#hours').textContent = padZero(date.getHours());
  document.querySelector('#minutes').textContent = padZero(date.getMinutes());
  document.querySelector('#seconds').textContent = padZero(date.getSeconds());
};

updateTimer();

setInterval(updateTimer, 1000);
