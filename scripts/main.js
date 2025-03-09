document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll(".calendar-grid button");

	console.log("hello"); 
	updateButtons(buttons, 2025, 2);
	setInterval(updateTime, 1000);
    updateTime();
});

function updateButtons(buttons, year, month) {
	const startingDay = new Date(year, month, 1).getDay(); 
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	buttons.forEach((button, index) => {
		const day = index - startingDay + 1;
		console.log(day); 
		if (day > 0 && day <= daysInMonth) {
			button.textContent = day;
			button.id = day - 1;
		} else {
			button.textContent = "";
			button.id = "";
			button.disabled = true;
		}
	});
}

function updateTime() {
	const now = new Date(); 

	const hours = String(now.getHours()).padStart(2, "0"); // Military time (24-hour format)
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");

	document.getElementById("current-time").textContent = `${hours} : ${minutes} : ${seconds}`;
}

/*
// Load saved events when the page loads
document.addEventListener("DOMContentLoaded", loadEvents);

// Form submission to add a new event
document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const eventDate = document.getElementById("eventDate").value;
  const eventDescription = document.getElementById("eventDescription").value;

  if (eventDate && eventDescription) {
    saveEvent({ date: eventDate, description: eventDescription });
    document.getElementById("eventForm").reset();
  }
});

// Function to save an event
function saveEvent(event) {
  chrome.storage.sync.get({ events: [] }, function (data) {
    const events = data.events;
    events.push(event);
    chrome.storage.sync.set({ events: events }, function () {
      loadEvents(); // Refresh the events list
    });
  });
}

// Function to load and display events
function loadEvents() {
  chrome.storage.sync.get({ events: [] }, function (data) {
    const eventsList = document.getElementById("eventsList");
    eventsList.innerHTML = ""; // Clear the list

    data.events.forEach((event, index) => {
      const eventDiv = document.createElement("div");
      eventDiv.className = "event";
      eventDiv.innerHTML = `
        <strong>${event.date}</strong>: ${event.description}
        <button onclick="deleteEvent(${index})">Delete</button>
      `;
      eventsList.appendChild(eventDiv);
    });
  });
}

// Function to delete an event
window.deleteEvent = function (index) {
  chrome.storage.sync.get({ events: [] }, function (data) {
    const events = data.events;
    events.splice(index, 1); // Remove the event at the specified index
    chrome.storage.sync.set({ events: events }, function () {
      loadEvents(); // Refresh the events list
    });
  });
};
*/


