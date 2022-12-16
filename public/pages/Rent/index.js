const toggle = document.getElementById("toggle");
const hidden = document.getElementById("hidden");
let showItem = false;

function toggleFilter() {
	hidden.classList.toggle("hidden");
}

toggle.addEventListener("click", toggleFilter);

const scrollR = ScrollReveal({
	opacity: 0,
	distance: "20px",
	duration: 1000,
});

scrollR.reveal(`.rent-item-card`, {
	origin: "top",
	interval: 300,
	delay: 300,
	easing: "ease-out",
});
