/**
 * DeskTime Main Frontend Logic
 * Handles Sidebar, Real-time status, and UI Interactivity
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 DeskTime Dashboard Core Initialized");

    // 1. ACTIVE LINK HIGHLIGHTING
    // Ye check karta hai ki current URL kya hai aur sidebar me wahi link highlight karta hai
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. LIVE STATUS BLINKER
    // Agar server online hai toh dashboard par "System Online" green dot blink karega
    const statusDot = document.querySelector('.status-dot');
    if (statusDot) {
        setInterval(() => {
            statusDot.style.opacity = (statusDot.style.opacity == '0.3' ? '1' : '0.3');
        }, 800);
    }

    // 3. AUTO-REFRESH LOGIC (Optional)
    // Har 30 seconds me dashboard auto-refresh hoga taaki naye logs dikhte rahein
    // Agar aapko manual refresh chahiye toh is part ko comment kar sakte hain
    /*
    setInterval(() => {
        if (currentPath === '/' || currentPath === '/dashboard') {
            window.location.reload();
        }
    }, 30000); 
    */

    // 4. LOGOUT CONFIRMATION
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            if (!confirm("Are you sure you want to secure logout?")) {
                e.preventDefault();
            }
        });
    }

    // 5. DATA COUNTER ANIMATION
    // Dashboard numbers ko 0 se value tak animate karne ke liye
    const animateValue = (id, start, end, duration) => {
        const obj = document.getElementById(id);
        if (!obj) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Example trigger: Dashboard load par users count animate karein
    // animateValue("active-users-count", 0, 10, 1500);
});