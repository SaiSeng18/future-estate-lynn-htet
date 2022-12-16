const template = document.createElement("template");
template.innerHTML = `
	<style>
	
	@import url("../../css/styles.css");
	</style>
	<div class="w-full bg-blue-100 py-10">
		<div class="max-w-7xl px-2 mx-auto p-2">
			<div class="w-full mx-auto gap-5 grid grid-cols-2 md:grid-cols-4">
				<div>
					<p class="text-xl text-blue-900 font-bold">Direct Links</p>
					<ul class="mt-5 flex flex-col gap-2">
						<li><a href="" class="text-gray-500 hover:text-blue-500">Find Property</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Sell Property</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Get Agent</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Listing</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Category</a></li>
					</ul>
				</div>
				<div>
					<p class="text-xl text-blue-900 font-bold">About</p>
					<ul class="mt-5 flex flex-col gap-2">
						<li><a href="" class="text-gray-500 hover:text-blue-500">About Us</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">How It Works</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Contact Us</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Listing</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Blog</a></li>
					</ul>
				</div>
				<div>
					<p class="text-xl text-blue-900 font-bold">Terms</p>
					<ul class="mt-5 flex flex-col gap-2">
						<li><a href="" class="text-gray-500 hover:text-blue-500">Privacy Policy</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Terms & Conditions</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Copyright Policy</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Security</a></li>
						<li><a href="" class="text-gray-500 hover:text-blue-500">Fees and Charge</a></li>
					</ul>
				</div>
				<div class="max-w-md">
					<p class="text-xl text-blue-900 font-bold">Contact</p>
					<ul class="mt-5 flex flex-col gap-2">
						<li class="text-gray-500">No. 420/69, South Okkalapa Township, Yangon, Myanmar</li>
						<li class="text-gray-500 break-words">futureresidency.ltd@email.com</li>
						<li class="text-gray-500">+959 123 456 789</li>
					</ul>
				</div>
			</div>

			<div class="h-px w-full bg-gray-500 divider mt-10"></div>
			<div class="w-full py-10">
				<div class="flex justify-between px-2 mx-auto">
					<div>Future Residency Limited</div>
					<div class="flex gap-5">
						<a href=""><img src="/public/assets/icons/Facebook.png" alt="" /></a>
						<a href=""><img src="/public/assets/icons/instagram.png" alt="" /></a>
						<a href=""><img src="/public/assets/icons/linkedin.png" alt="" /></a>
						<a href=""><img src="/public/assets/icons/twitter.png" alt="" /></a>
					</div>
				</div>
			</div>
			
		</div>
	</div>


	
`;

class Footer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
export default Footer;
