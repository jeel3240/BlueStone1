// Keep only the chat functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const chatButton = document.getElementById('chatButton');
    const closeButton = document.getElementById('closeButton');
    const chatPopup = document.getElementById('chatPopup');
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');

    // Open chat
    chatButton.onclick = function() {
        chatPopup.style.display = 'flex';
        // Add welcome message if chat is empty
        if (chatMessages.children.length === 0) {
            addBotMessage("Hello! How can I help you with Bluestone-1?");
        }
    };

    // Close chat
    closeButton.onclick = function() {
        chatPopup.style.display = 'none';
    };

    // Send message when Send button is clicked
    sendButton.onclick = function() {
        sendMessage();
    };

    // Send message when Enter key is pressed
    messageInput.onkeypress = function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    // Function to add a user message
    function addUserMessage(text) {
        const div = document.createElement('div');
        div.className = 'message user-message';
        div.textContent = text;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to add a bot message
    function addBotMessage(text) {
        const div = document.createElement('div');
        div.className = 'message bot-message';
        div.textContent = text;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to get bot response
    function getBotResponse(text) {
        text = text.toLowerCase();
        if (text.includes('hello') || text.includes('hi')) {
            return "Hello! How may I assist you today?";
        } else if (text.includes('amenities')) {
            return "We offer premium amenities including Underground Parking, Garden, Gym, Pool, and more!";
        } else if (text.includes('location')) {
            return "We are located in a prime area of Surat with excellent connectivity.";
        } else if (text.includes('price')) {
            return "For pricing information, please contact our sales team.";
        } else {
            return "Thank you for your message. How else can I help you?";
        }
    }

    // Function to handle sending messages
    function sendMessage() {
        const text = messageInput.value.trim();
        if (text) {
            // Add user message
            addUserMessage(text);
            
            // Clear input
            messageInput.value = '';
            
            // Add bot response after a short delay
            setTimeout(function() {
                const response = getBotResponse(text);
                addBotMessage(response);
            }, 500);
        }
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navWrapper = document.querySelector('.nav-wrapper');
const navLinks = document.querySelectorAll('.nav-links a');

mobileMenuBtn.addEventListener('click', () => {
    navWrapper.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navWrapper.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navWrapper.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navWrapper.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Prevent scroll when menu is open
navWrapper.addEventListener('touchmove', (e) => {
    if (navWrapper.classList.contains('active')) {
        e.preventDefault();
    }
}, { passive: false }); 