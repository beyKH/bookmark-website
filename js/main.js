var elsQaItem = document.querySelectorAll('.faq__item');
var elsButton = document.querySelectorAll('.qa__togler');

elsButton.forEach(function (button) {
  button.addEventListener('click',function () {

      elsQaItem.forEach(function (qa) {
        qa.classList.remove('qa--active');
      })

      button.closest('.qa').classList.add('qa--active');
  })
})

