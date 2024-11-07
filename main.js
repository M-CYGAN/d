const table = document.getElementById("table");
const tableWrapper = document.getElementById("divTable");
const btn = document.getElementById("btn");


function generateTable() {
    const headers = ["l.p", "imię nazwisko", "użytkownik", "Email", "Numer Telefonu", "Strona Internetowa"];
    const headerRow = document.createElement("tr");

    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);


    users.forEach(user => {
        const row = document.createElement("tr");

        user.forEach(data => {
            const cell = document.createElement("td");
            cell.textContent = data;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
}


btn.addEventListener("click", () => {
    if (tableWrapper.style.display === "none") {
        tableWrapper.style.display = "block";
        btn.textContent = "Usuń tabelę";
        btn.style.backgroundColor = "red"
    } else {
        btn.style.backgroundColor = "blue"
        tableWrapper.style.display = "none";
        btn.textContent = "Generuj tabelę";
    }
});


generateTable();