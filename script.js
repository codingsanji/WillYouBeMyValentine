document.getElementById('open-letter-btn').addEventListener('click', function () {
    const letter = document.getElementById('letter');
    const note = document.getElementById('note');
    const closeBtn = document.getElementById('close-btn');
    const wrapper = document.getElementById('wrapper');
  
    // Add the hover-like animation to the envelope
    wrapper.classList.add('active'); 
  
    // Delay to let the animation finish before revealing the letter
    setTimeout(function() {
      // Show letter and note after animation
      letter.classList.add('show');
      note.classList.remove('hidden');
      closeBtn.classList.remove('hidden');
    }, 500); // Same as the animation time for smoothness
  });
  
  document.getElementById('close-btn').addEventListener('click', function () {
    const letter = document.getElementById('letter');
    const note = document.getElementById('note');
    const closeBtn = document.getElementById('close-btn');
    const wrapper = document.getElementById('wrapper');
  
    // Hide letter and note and return envelope to normal state
    letter.classList.remove('show');
    note.classList.add('hidden');
    closeBtn.classList.add('hidden');
    wrapper.classList.remove('active'); 
  });