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