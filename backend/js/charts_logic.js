/**
 * DeskTime Intelligence - Charts Logic
 * Handles Productivity Donut and Activity Timeline
 */

document.addEventListener('DOMContentLoaded', function () {
    // --- 1. PRODUCTIVITY BREAKDOWN (DONUT CHART) ---
    const prodCtx = document.getElementById('productivityChart');
    if (prodCtx) {
        // Data backend se HTML hidden inputs ya global variables ke through aayega
        const prodData = JSON.parse(document.getElementById('chart-data-prod').value || '[0, 0, 100]');
        
        new Chart(prodCtx, {
            type: 'doughnut',
            data: {
                labels: ['Productive', 'Unproductive', 'Neutral'],
                datasets: [{
                    data: prodData,
                    backgroundColor: [
                        '#00d4aa', // Teal
                        '#ff6b6b', // Red
                        '#cbd5e1'  // Grey (Neutral)
                    ],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                cutout: '75%',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // Humne custom legend banaya hai HTML mein
                    },
                    tooltip: {
                        backgroundColor: '#1a1d29',
                        titleFont: { family: 'Outfit', size: 14 },
                        bodyFont: { family: 'Outfit', size: 13 },
                        padding: 12,
                        cornerRadius: 10,
                        displayColors: true
                    }
                }
            }
        });
    }

    // --- 2. ACTIVITY TIMELINE (LINE CHART) ---
    const activityCtx = document.getElementById('activityChart');
    if (activityCtx) {
        const labels = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
        const dataValues = [20, 45, 30, 55, 40, 60, 45, 30, 20]; // Ye dummy hai, backend se dynamically aayega

        new Chart(activityCtx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Active Pulse',
                    data: dataValues,
                    borderColor: '#00d4aa',
                    backgroundColor: 'rgba(0, 212, 170, 0.05)',
                    fill: true,
                    tension: 0.4, // Isse line smooth (curvy) banti hai
                    pointRadius: 4,
                    pointBackgroundColor: '#00d4aa',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0,0,0,0.03)' },
                        ticks: { font: { family: 'Outfit' } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { family: 'Outfit' } }
                    }
                }
            }
        });
    }
});