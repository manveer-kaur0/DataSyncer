// ✅ Your Sheet.best API endpoint
const SHEET_API = "https://api.sheetbest.com/sheets/c54d5fae-2957-4369-8ebb-8f49d783f2fa";

// ✅ Form submission handler
document.getElementById("dataForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  // Grab values from form
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const village = document.getElementById("village").value.trim();
  const symptoms = document.getElementById("symptoms").value.trim();

  // Show "sending" message
  const statusBox = document.getElementById("status");
  statusBox.innerText = "📡 Sending...";

  // Prepare JSON object
  const data = {
    Name: name,
    Age: age,
    Village: village,
    Symptoms: symptoms
  };

  try {
    // Send data to Google Sheet via Sheet.best
    const response = await fetch(SHEET_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      statusBox.innerText = "✅ Data saved successfully!";
      document.getElementById("dataForm").reset();
      loadEntries(); // Refresh list
    } else {
      statusBox.innerText = "❌ Failed to save data. Please try again.";
    }
  } catch (error) {
    console.error("Error:", error);
    statusBox.innerText = "⚠️ Network or server error.";
  }
});

// ✅ Function to load and show saved entries
async function loadEntries() {
  try {
    const response = await fetch(SHEET_API);
    const entries = await response.json();

    const entryList = document.getElementById("entryList");
    entryList.innerHTML = "";

    entries.forEach(entry => {
      const div = document.createElement("div");
      div.className = "entry";
      div.innerHTML = `
        <strong>👤 ${entry.Name}</strong><br>
        🎂 Age: ${entry.Age} | 🏡 Village: ${entry.Village}<br>
        🤒 Symptoms: ${entry.Symptoms || "N/A"}
        <hr>
      `;
      entryList.appendChild(div);
    });
  } catch (err) {
    console.error("Error fetching entries:", err);
    document.getElementById("entryList").innerText = "⚠️ Failed to load entries.";
  }
}

// ✅ Load entries on page load
window.onload = loadEntries;
