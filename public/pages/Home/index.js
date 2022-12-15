const scrollR = ScrollReveal({
	opacity: 0,
	distance: "20px",
	duration: 1000,
});

scrollR.reveal(`.feature`, {
	origin: "left",
	interval: 300,
	delay: 300,
	reset: true,
	easing: "ease-out",
});
