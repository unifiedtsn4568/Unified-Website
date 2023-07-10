function toggleAnswer(index) {
    var answer = document.getElementsByClassName('answer')[index - 1];
    var plusIcon = document.getElementsByClassName('plus-icon')[index - 1];
    
    if (answer.style.maxHeight) {
      // Answer is visible, hide it
      answer.style.maxHeight = null;
      plusIcon.innerHTML = '<i class="fas fa-plus"></i>';
    } else {
      // Answer is hidden, show it
      answer.style.maxHeight = answer.scrollHeight + 'px';
      plusIcon.innerHTML = '<i class="fas fa-minus"></i>';
      
      // Hide other answers
      var allAnswers = document.getElementsByClassName('answer');
      var allPlusIcons = document.getElementsByClassName('plus-icon');
      
      for (var i = 0; i < allAnswers.length; i++) {
        if (i !== index - 1) {
          allAnswers[i].style.maxHeight = null;
          allPlusIcons[i].innerHTML = '<i class="fas fa-plus"></i>';
        }
      }
    }
}

// Check if the device is mobile
function isMobileDevice() {
    return /Mobi/i.test(navigator.userAgent);
}
  
function initSwipe() {
    if (isMobileDevice()) {
      var paragraphContainer = document.querySelector('.paragraph-container');
      var hammertime = new Hammer(paragraphContainer);
  
      var currentIndex = 0;
      var maxIndex = document.querySelectorAll('.paragraph-item').length - 1;
  
      hammertime.on('swipeleft', function() {
        if (currentIndex < maxIndex) {
          currentIndex++;
          scrollToParagraph(currentIndex);
        }
      });
  
      hammertime.on('swiperight', function() {
        if (currentIndex > 0) {
          currentIndex--;
          scrollToParagraph(currentIndex);
        }
      });
    }
}
  
window.addEventListener('DOMContentLoaded', function() {
    initSwipe();
});  
  
// Scroll to the selected paragraph
function scrollToParagraph(index) {
    var paragraphContainer = document.querySelector('.paragraph-container');
    var paragraphItems = document.querySelectorAll('.paragraph-item');
    
    var scrollTo = paragraphItems[index].offsetLeft - paragraphContainer.offsetLeft;
    
    paragraphContainer.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
}
  
// Call the initSwipe function on page load
window.addEventListener('load', initSwipe);  