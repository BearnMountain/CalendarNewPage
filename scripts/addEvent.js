export function addEvent(calendarGrid, dayIndex, startTime, endTime, description) {
  const event = document.createElement("div");
  event.classList.add("event");
  event.textContent = `${description} ${startTime} - ${endTime}`;
  const targetDay = calendarGrid.children[dayIndex];
  targetDay.appendChild(event);
}
