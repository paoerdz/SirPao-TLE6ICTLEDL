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
// Auto-register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg.scope))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}

// PWA install prompt handler
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBanner = document.createElement('div');
  installBanner.innerHTML = `
    <div style="position: fixed; bottom: 20px; left: 10px; right: 10px; background: #fff; border: 1px solid #ccc; padding: 15px; text-align: center; box-shadow: 0 0 10px rgba(0,0,0,0.2); font-family: inherit; z-index: 9999;">
      <p style="margin: 0 0 10px;">Do you want to install this app?</p>
      <button id="installBtn" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px;">Install</button>
    </div>
  `;
  document.body.appendChild(installBanner);

  document.getElementById('installBtn').addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(choice => {
        if (choice.outcome === 'accepted') {
          console.log('User accepted install');
        } else {
          console.log('User dismissed install');
        }
        deferredPrompt = null;
        installBanner.remove();
      });
    }
  });
});
});

