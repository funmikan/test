// This file contains the JavaScript code for the homepage. 
// It may include functionality such as event listeners, DOM manipulation, 
// and any interactive features for the website.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Homepage loaded successfully!');

    // Example of adding an event listener to a button
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});