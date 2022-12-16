const scrollR = ScrollReveal({
	opacity: 0,
	distance: "20px",
	duration: 1000,
});

scrollR.reveal(`.agent-card`, {
	origin: "top",
	interval: 300,
	delay: 300,
	easing: "ease-out",
});
