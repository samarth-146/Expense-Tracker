// Function to update the expense chart
function updateExpenseChart() {
    const categories = expenseItems.map(item => item.description);
    const expenseAmounts = expenseItems.map(item => item.amount);

    const chartCanvas = document.getElementById('expense-chart');

    if (chartCanvas) {
        const chartContext = chartCanvas.getContext('2d');

        if (window.expenseChart) {
            window.expenseChart.destroy();
        }

        window.expenseChart = new Chart(chartContext, {
            type: 'bar',
            data: {
                labels: categories,
                datasets: [{
                    label: 'Expenses',
                    data: expenseAmounts,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Load data from local storage if available
if (localStorage.getItem('expenseTrackerData')) {
    const data = JSON.parse(localStorage.getItem('expenseTrackerData'));
    currentIncome = data.currentIncome;
    totalExpenses = data.totalExpenses;
    expenseItems = data.expenseItems;
    updateExpenseChart();
}
