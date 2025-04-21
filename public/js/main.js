document.querySelectorAll('.form-list-item-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

document.querySelectorAll('.trade-item-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});
