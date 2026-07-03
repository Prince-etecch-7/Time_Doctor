/**
 * DeskTime Live Dashboard Updates
 */

function updateLiveDashboard() {
    fetch('/api/dashboard_stats')
        .then(response => {
            if (!response.ok) throw new Error("Not logged in or server error");
            return response.json();
        })
        .then(data => {
            // 1. Text values update (Class names must match your HTML)
            const timeElem = document.querySelector('.stat-value-time');
            const effElem = document.querySelector('.stat-value-efficiency');
            const userElem = document.querySelector('.stat-value-users');

            if (timeElem) timeElem.innerText = data.total_time;
            if (effElem) effElem.innerText = data.active_pct + '%';
            if (userElem) userElem.innerText = data.active_users;
            
            // 2. Chart live move update
            // Note: Ensure your chart instance is global or attached to window
            if (window.myProdChart) {
                window.myProdChart.data.datasets[0].data = [
                    data.prod_count, 
                    data.unprod_count, 
                    data.neutral_count
                ];
                window.myProdChart.update('none'); // 'none' prevent animations from flickering
            }
        })
        .catch(err => console.error("Live Update Error:", err));
}

// Update every 10 seconds
setInterval(updateLiveDashboard, 10000);