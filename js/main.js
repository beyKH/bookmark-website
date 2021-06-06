var elsQaItem = document.querySelectorAll('.faq__item');
var elsButton = document.querySelectorAll('.qa__togler');

elsButton.forEach(function (button) {
  button.addEventListener('click',function () {

      // elsQaItem.forEach(function (qa) {
      //   qa.classList.remove('qa--active');
      // })

      button.closest('.qa').classList.toggle('qa--active');
  })
})



var elFeaturesItem = document.querySelectorAll('.features__item');

elFeaturesItem.forEach(function (featureItem) {
  featureItem.addEventListener('click',function() {
    featureItem.classList.add('features__item--active');
  })
})
