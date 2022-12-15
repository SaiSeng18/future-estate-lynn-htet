const template = document.createElement("template");
template.innerHTML = `
	<style>
	
	@import url("../../css/styles.css");
	</style>
    <div class="max-w-7xl mx-auto flex justify-between items-center p-5">
        <img src="/public/assets/images/logo.svg" class= "h-5 w-auto" />
			<ul class="gap-10 hidden md:flex">
				<li><a href="/public/pages/Home/index.html" class="text-slate-600 text-md font-semibold hover:text-blue-500">Home</a></li>
				<li><a href="" class="text-slate-600 text-md font-semibold hover:text-blue-500">Buy</a></li>
				<li><a href="" class="text-slate-600 text-md font-semibold hover:text-blue-500">Rent</a></li>
				<li><a href="/public/pages/Blog/index.html" class="text-slate-600 text-md font-semibold hover:text-blue-500">Hire Agent</a></li>
				<li><a href="/public/pages/Contact/index.html" class="text-slate-600 text-md font-semibold hover:text-blue-500">Contact</a></li>
			</ul>

			<ul id="animation" class="gap-10 flex fixed z-30 flex-col right-0 top-0 w-80 bg-white md:w-96 h-full p-5 ease-in-out duration-300 shadow-md translate-x-full overflow-auto">
				<div id="sm-toggle" class="block">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
				</div>
				<li><a href="/public/pages/Home/index.html" class="text-slate-600 text-md font-semibold hover:text-blue-500">Home</a></li>
				<li><a href="" class="text-slate-600 text-md font-semibold hover:text-blue-500">Buy</a></li>
				<li><a href="" class="text-slate-600 text-md font-semibold hover:text-blue-500">Rent</a></li>
				<li><a href="/public/pages/Blog/index.html" class="text-slate-600 text-md font-semibold hover:text-blue-500">Hire Agent</a></li>
				<li><a href="/public/pages/Contact/index.html" class="text-slate-600 text-md font-semibold hover:text-blue-500">Contact</a></li>
			</ul>

		
		<div class="flex gap-5 items-center relative">
			<a href="/public/pages/SignUp/index.html" class="py-2 px-5 flex justify-center items-center bg-blue-500 rounded-sm text-white active:text-gray-200 active:bg-blue-700">Sign Up</a>	
			<a href="/public/pages/Login/index.html" class="text-blue-500 md:block hidden">Login</a>
			<div id="toggle" class="md:hidden block" onclick="openNav()">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
			</div>
			
		</div>
		
		
    </div>
`;

class Header extends HTMLElement {
	constructor() {
		super();
		this.showInfo = false;
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	openNav = () => {
		this.shadowRoot
			.getElementById("animation")
			.classList.replace("translate-x-full", "translate-x-0");
	};

	closeNav = () => {
		this.shadowRoot
			.getElementById("animation")
			.classList.replace("translate-x-0", "translate-x-full");
	};

	connectedCallback() {
		this.shadowRoot
			.querySelector("#toggle")
			.addEventListener("click", this.openNav);
		this.shadowRoot
			.querySelector("#sm-toggle")
			.addEventListener("click", this.closeNav);
	}
}
export default Header;
