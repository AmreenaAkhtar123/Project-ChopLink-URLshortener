import Link from "next/link";

export default function Home() {
	return (
		<main>
			<section className="text-gray-600 body-font mt-20">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Shorten your links.
							<br className="hidden lg:inline-block" /> Simplify your web.
						</h1>
						<p className="mb-8 leading-relaxed">ChopLink makes long, messy URLs short and shareable in seconds.
							Track clicks, manage links, and keep your online presence neat — all with one tool.</p>
						<div className="flex justify-center">
							<Link href="/shorten" ><button className="inline-flex text-white bg-[#162556] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Try Now
							</button></Link>

							
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img className="object-cover object-center rounded" alt="hero" src="/Hero.svg" />

					</div>
				</div>
			</section>

			<section className="bg-white py-16 mb-30">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-12">
						Why Choose <span className="text-indigo-600">ChopLink?</span>
					</h2>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{/* Card 1 */}
						<div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
							<div className="text-indigo-600 mb-4 text-4xl">🔗</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Instant Shortening
							</h3>
							<p className="text-gray-600 text-sm">
								Turn long, messy URLs into short, shareable links in seconds.
							</p>
						</div>

						{/* Card 2 */}
						<div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
							<div className="text-indigo-600 mb-4 text-4xl">📊</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Track Analytics
							</h3>
							<p className="text-gray-600 text-sm">
								Monitor clicks, performance, and link engagement easily.
							</p>
						</div>

						{/* Card 3 */}
						<div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
							<div className="text-indigo-600 mb-4 text-4xl">🛡</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Secure & Reliable
							</h3>
							<p className="text-gray-600 text-sm">
								Your links stay safe, fast, and accessible at all times.
							</p>
						</div>

						{/* Card 4 */}
						<div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
							<div className="text-indigo-600 mb-4 text-4xl">⚡</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Easy to Use
							</h3>
							<p className="text-gray-600 text-sm">
								No sign-up required — paste your link and shorten instantly.
							</p>
						</div>
					</div>
				</div>
			</section>



			<section className="bg-gray-50 py-16 pb-40">
				<div className="max-w-4xl mx-auto px-6">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
						Frequently Asked <span className="text-indigo-600">Questions</span>
					</h2>

					<div className="space-y-6">
						{/* FAQ Item 1 */}
						<div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Is ChopLink free?
							</h3>
							<p className="text-gray-600 text-sm">
								Yes, ChopLink is completely free to use. You can shorten unlimited links without any hidden charges.
							</p>
						</div>

						{/* FAQ Item 2 */}
						<div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Do shortened links expire?
							</h3>
							<p className="text-gray-600 text-sm">
								No, your shortened links never expire. They stay active as long as you need them.
							</p>
						</div>

						

						{/* FAQ Item 3 */}
						<div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Do I need to create an account?
							</h3>
							<p className="text-gray-600 text-sm">
								No, you can use ChopLink instantly without signing up. Just paste your URL, shorten it, and share.
							</p>
						</div>
					</div>
				</div>
			</section>



		</main>
	);
}
