// LINE CHART – Tourist Growth
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [{
      label: "Number of Tourists",
      data: [120000, 40000, 65000, 95000, 135000, 170000],
      borderColor: "#3498db",
      tension: 0.4,
      fill: false
    }]
  },
  options: {
    responsive: true
  }
});

// BAR CHART – Top Destinations
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Forts", "Temples", "Beaches", "Hill Stations", "Museums"],
    datasets: [{
      label: "Visitors",
      data: [50000, 70000, 90000, 60000, 40000],
      backgroundColor: "#2ecc71"
    }]
  },
  options: {
    responsive: true
  }
});

// PIE CHART – Tourist Type
new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["Domestic", "International", "Local"],
    datasets: [{
      data: [65, 25, 10],
      backgroundColor: ["#1abc9c", "#f39c12", "#e74c3c"]
    }]
  },
  options: {
    responsive: true
  }
});

// DOUGHNUT CHART – Revenue Sources
new Chart(document.getElementById("doughnutChart"), {
  type: "doughnut",
  data: {
    labels: ["Hotels", "Transport", "Tickets", "Food & Shopping"],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ["#9b59b6", "#3498db", "#f1c40f", "#e67e22"]
    }]
  },
  options: {
    responsive: true
  }
});
