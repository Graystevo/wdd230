document.addEventListener("DOMContentLoaded", () => {
  const url = "./data/rentals.json";
  const mainContainer = document.querySelector("main");

  async function getRentalData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayRentalData(data.pricing.max_rental_pricing.reservation);
    } catch (error) {
      console.error("Error fetching rental data:", error);
    }
  }

  function displayRentalData(rentals) {
    const table = document.createElement("table");
    table.setAttribute("border", "1");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = [
      "Rental Type",
      "Max Persons",
      "Half Day (Reservation)",
      "Full Day (Reservation)",
    ];
    headers.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      th.style.padding = "8px";
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (let rentalType in rentals) {
      const rental = rentals[rentalType];
      const row = document.createElement("tr");

      const cellName = document.createElement("td");
      cellName.textContent = rentalType;
      cellName.style.padding = "8px";
      row.appendChild(cellName);

      const cellMaxPersons = document.createElement("td");
      cellMaxPersons.textContent = rental.max_persons;
      cellMaxPersons.style.padding = "8px";
      row.appendChild(cellMaxPersons);

      const cellHalfDay = document.createElement("td");
      cellHalfDay.textContent = `$${rental.half_day}`;
      cellHalfDay.style.padding = "8px";
      row.appendChild(cellHalfDay);

      const cellFullDay = document.createElement("td");
      cellFullDay.textContent = `$${rental.full_day}`;
      cellFullDay.style.padding = "8px";
      row.appendChild(cellFullDay);

      tbody.appendChild(row);
    }

    table.appendChild(tbody);
    mainContainer.appendChild(table);
  }

  getRentalData();
});
