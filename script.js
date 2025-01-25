document.getElementById('open-letter-btn').addEventListener('click', function () {
  const letter = document.getElementById('letter');
  const note = document.getElementById('note');
  const closeBtn = document.getElementById('close-btn');
  const wrapper = document.getElementById('wrapper');
  const openLetterBtn = document.getElementById('open-letter-btn');

  wrapper.classList.add('shifted-down');
  openLetterBtn.classList.add('hidden');

  setTimeout(function () {
    wrapper.classList.add('active');
    setTimeout(function () {
      letter.classList.add('show');
      note.classList.remove('hidden');
      closeBtn.classList.remove('hidden');
    }, 500);
  }, 250);
});

document.getElementById('close-btn').addEventListener('click', function () {
  const letter = document.getElementById('letter');
  const note = document.getElementById('note');
  const closeBtn = document.getElementById('close-btn');
  const wrapper = document.getElementById('wrapper');
  const openLetterBtn = document.getElementById('open-letter-btn');

  letter.classList.remove('show');
  note.classList.add('hidden');
  closeBtn.classList.add('hidden');
  wrapper.classList.remove('active');

  setTimeout(function () {
    wrapper.classList.remove('shifted-down');
  }, 500);

  openLetterBtn.classList.remove('hidden');
});
