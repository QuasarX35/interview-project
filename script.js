var eventTable = document.getElementById("event-table");

document.getElementById("create-event").addEventListener("click", () => {
  var x = document.getElementById("event-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

async function getData() {
  const url = "http://localhost:8080/api/events";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    json.forEach((element) => {
      eventTable.innerHTML += `<tr><td>${element.name}</td><td>${element.date}</td><td>${element.venue}</td><td>${element.ticketPrice}</td><td>${element.availableTickets}</td>`;
    });
  } catch (error) {
    console.error(error.message);
  }
}

getData();

async function createEvent(name, date, venue, availableTickets, ticketPrice) {
  const url = "http://localhost:8080/api/events";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        "name": name,
        "date": date,
        "venue": venue,
        "availableTickets": availableTickets,
        "ticketPrice": ticketPrice,
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

document
  .getElementById("event-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const form = document.getElementById("event-form");
    const formData = new FormData(form);

    console.log(Object.fromEntries(formData));

    const name = formData.get("name");
    const date = formData.get("date");
    const venue = formData.get("venue");
    const availableTickets = formData.get("availableTickets");
    const ticketPrice = formData.get("ticketPrice");

    console.log(name);
    console.log(date);
    console.log(venue);
    console.log(availableTickets);
    console.log(ticketPrice);

    createEvent(name, date, venue, availableTickets, ticketPrice);
  });
