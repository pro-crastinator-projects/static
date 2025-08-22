// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the mobile menu
    function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.classList.toggle('active');
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add event listener for menu toggle if element exists
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Username reverser functionality
    function reverseUsername() {
        const username = document.getElementById('username').value.trim();
        const reversedSpan = document.getElementById('reversed-username');
        
        if (username) {
            const reversed = username.split('').reverse().join('');
            reversedSpan.textContent = reversed;
        } else {
            reversedSpan.textContent = '';
        }
    }

    // Share on X functionality
    function shareOnX() {
        const username = document.getElementById('username').value.trim();
        const reversed = document.getElementById('reversed-username').textContent;
        
        if (username && reversed) {
            const tweetText = `Hey! My X username spelled backwards is "${reversed}"! Come procrastinate with me.`;
            const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
            window.open(tweetUrl, '_blank', 'width=600,height=300');
        }
    }

    // Event listeners for the reverser tool
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
        usernameInput.addEventListener('input', reverseUsername);
    }

    const shareButton = document.getElementById('share-button');
    if (shareButton) {
        shareButton.addEventListener('click', shareOnX);
    }

    // Fade-in elements when they enter the viewport
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
