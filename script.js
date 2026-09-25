// EduGenie - Interactive Features

document.addEventListener('DOMContentLoaded', () => {
    console.log('EduGenie loaded successfully!');

    // Dynamic greeting based on time of day
    const updateGreeting = () => {
        const headerText = document.querySelector('header p');
        if (!headerText) return;

        const hour = new Date().getHours();
        let greeting = "Welcome to EduGenie!";

        if (hour < 12) {
            greeting = "Good morning! Ready to learn with EduGenie?";
        } else if (hour < 18) {
            greeting = "Good afternoon! Keep up the great work with EduGenie.";
        } else {
            greeting = "Good evening! Wrapping up today's study session?";
        }

        headerText.textContent = greeting;
    };

    // Card click interaction
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            alert(`You clicked on module #${index + 1}!`);
        });
    });

    // Action button functionality
    const actionButtons = document.querySelectorAll('button');
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents card click event from triggering
            alert('Action initiated! Feature coming soon.');
        });
    });

    updateGreeting();
});
