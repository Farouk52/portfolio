document.getElementById("nav-toggle").addEventListener("click", function() {
    var sideNav = document.getElementById("side-nav");
    sideNav.classList.toggle("active");
});
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on ${card.querySelector('h5').textContent} skill!`);
    });
});

