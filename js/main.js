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



var elsTabLinks = document.querySelectorAll('.tab__link');
var elsTabItems = document.querySelectorAll('.tab__item');
var elsPannels =  document.querySelectorAll('.panel');

elsTabLinks.forEach(function (tabLink) {
  tabLink.addEventListener('click',function (e) {
    e.preventDefault()


    elsTabItems.forEach(function (tabItem) {
      tabItem.classList.remove('tab__item--active');
    })

    tabLink.parentElement.classList.add('tab__item--active');

    elsPannels.forEach(function (panel) {
      panel.classList.remove('pannels__item--active');
    })

    document.querySelector(tabLink.getAttribute('href')).classList.add('pannels__item--active');


  })
})
