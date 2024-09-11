// Data with ministries, percentages from your CSV file
const ministriesData = [
    { ministry: "Health", percentage: 16.796858 },
    { ministry: "Education", percentage: 13.199832 },
    { ministry: "National Development", percentage: 8.065570 },
    { ministry: "Social and Family Development", percentage: 4.192056 },
    { ministry: "Sustainability and the Environment", percentage: 3.043155 },
    { ministry: "Culture, Community and Youth", percentage: 2.190428 },
    { ministry: "Manpower", percentage: 1.689349 },
    { ministry: "Communications and Information", percentage: 0.988735 },
    { ministry: "Defence", percentage: 18.119346 },
    { ministry: "Home Affairs", percentage: 7.400746 },
    { ministry: "Foreign Affairs", percentage: 0.493025 },
    { ministry: "Transport", percentage: 12.740808 },
    { ministry: "Trade and Industry", percentage: 5.342746 },
    { ministry: "Manpower (Second)", percentage: 1.164112 },
    { ministry: "Communications and Information (Economic Development)", percentage: 0.781145 },
    { ministry: "Finance", percentage: 1.206167 },
    { ministry: "Organs of State", percentage: 0.730143 },
    { ministry: "Communications and Information (Government Admin)", percentage: 0.650507 },
    { ministry: "Prime Minister's Office", percentage: 0.609347 },
    { ministry: "Law", percentage: 0.595925 }
];

// Function to calculate the allocation of taxes
function calculateAllocation() {
    // Get the input value
    const taxPaid = parseFloat(document.getElementById("taxInput").value);
    
    // Get the result table and body
    const resultTable = document.getElementById("resultTable");
    const resultBody = document.getElementById("resultBody");

    // Clear previous results
    resultBody.innerHTML = "";

    if (isNaN(taxPaid) || taxPaid <= 0) {
        alert("Please enter a valid tax amount.");
        return;
    }

    // Iterate through the ministries data and calculate the allocated amount
    ministriesData.forEach(ministry => {
        const allocatedAmount = (ministry.percentage / 100) * taxPaid;
        
        // Create a new row in the table
        const row = document.createElement("tr");
        
        const ministryCell = document.createElement("td");
        ministryCell.textContent = ministry.ministry;
        
        const percentageCell = document.createElement("td");
        percentageCell.textContent = ministry.percentage.toFixed(2) + "%";
        
        const amountCell = document.createElement("td");
        amountCell.textContent = allocatedAmount.toFixed(2) + " SGD";

        // Append cells to the row
        row.appendChild(ministryCell);
        row.appendChild(percentageCell);
        row.appendChild(amountCell);

        // Append the row to the table body
        resultBody.appendChild(row);
    });

    // Show the table after calculation
    resultTable.style.display = "table";
}

