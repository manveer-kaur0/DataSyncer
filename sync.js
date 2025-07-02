const form = document.getElementById('dataForm');
const entryList = document.getElementById('entryList');
const syncBtn = document.getElementById('syncBtn');
const statusBox = document.getElementById('status');

let entries = JSON.parse(localStorage.getItem('entries')) || [];

function updateUI() {
  entryList.innerHTML = '';
  entries.forEach((entry) => {
    const div = document.createElement('div');
    div.classList.add('entry');
    div.innerHTML = `
      <p><strong>Name:</strong> ${entry.name}</p>
      <p><strong>Age:</strong> ${entry.age}</p>
      <p><strong>Village:</strong> ${entry.village}</p>
      <p><strong>Symptoms:</strong> ${entry.symptoms}</p>
    `;
    entryList.appendChild(div);
  });
}

function showStatus(message) {
  statusBox.textContent = message;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const entry = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    village: document.getElementById('village').value,
    symptoms: document.getElementById('symptoms').value
  };
  entries.push(entry);
  localStorage.setItem('entries', JSON.stringify(entries));
  updateUI();
  form.reset();
  showStatus('✅ Entry saved locally!');
});

syncBtn.addEventListener('click', () => {
  if (entries.length === 0) {
    showStatus('⚠️ No entries to sync.');
    return;
  }

  entries.forEach((entry, index) => {
    fetch('https://api.sheetbest.com/sheets/c54d5fae-2957-4369-8ebb-8f49d783f2fa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry)
    })
    .then(response => response.json())
    .then(data => {
      showStatus(`✅ Synced entry #${index + 1}`);
      if (index === entries.length - 1) {
        entries = [];
        localStorage.removeItem('entries');
        updateUI();
        showStatus('☁️ All entries synced and cleared!');
      }
    })
    .catch(error => {
      showStatus('❌ Sync failed. Try again later.');
      console.error('Sync Error:', error);
    });
  });
});

updateUI();
