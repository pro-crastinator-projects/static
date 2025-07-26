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

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
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
    document.getElementById('username').addEventListener('input', reverseUsername);
    document.getElementById('share-button').addEventListener('click', shareOnX);
});