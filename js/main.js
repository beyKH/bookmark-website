var elFaqOpenButton = document.querySelectorAll('.faq__box');
var elAnswer = document.querySelector('.faq__box__response');


elFaqOpenButton.forEach(function (button) {
  button.addEventListener('click',function () {
    elAnswer.classList.toggle('faq__box__response__block');
  })


})
