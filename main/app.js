const weekDropdown = document.getElementById('weekDropdown');
const lessonContainer = document.getElementById('lessonContainer');
const lessonTitle = document.getElementById('lessonTitle');
const thumbnail = document.getElementById('thumbnail');
const downloadBtn = document.getElementById('downloadBtn');
const cancelBtn = document.getElementById('cancelBtn');

const weekInfo = {
  week1: { title: 'Introduction to ICT', pdf: 'pdf/week1.pdf' },
  week2: { title: 'Computer Hardware Components', pdf: 'pdf/week2.pdf' },
  week3: { title: 'Computer Software Basics', pdf: 'pdf/week3.pdf' },
  week4: { title: 'Internet Safety and Digital Citizenship', pdf: 'pdf/week4.pdf' },
  week5: { title: 'Word Processing Fundamentals', pdf: 'pdf/week5.pdf' },
  week6: { title: 'Presentation Software Basics', pdf: 'pdf/week6.pdf' },
  week7: { title: 'Spreadsheet Introduction', pdf: 'pdf/week7.pdf' },
  week8: { title: 'Digital Communication Tools', pdf: 'pdf/week8.pdf' }
};

weekDropdown.addEventListener('change', () => {
  const selected = weekDropdown.value;
  if (selected && weekInfo[selected]) {
    lessonContainer.classList.remove('hidden');
    lessonTitle.textContent = weekInfo[selected].title;
    thumbnail.src = 'images/sirpao_header.png'; // Or another thumbnail if you prefer
    downloadBtn.href = weekInfo[selected].pdf;
  }
});

cancelBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});

