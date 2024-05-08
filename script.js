// Add a simple validation to the form
const form = document.getElementById('mc-embedded-subscribe-form');
const emailInput = document.querySelector('input[type="email"]');

form.addEventListener('submit', (e) => {
	if (emailInput.value.trim() === '') {
		e.preventDefault();
		alert('Please enter a valid email address');
	}
});