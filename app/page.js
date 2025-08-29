import Link from "next/link";

export default function Home() {
	return (
		<main>
			<section className="text-gray-600 body-font">
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

							<Link href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
								<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">GitHub
								</button>
							</Link>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img className="object-cover object-center rounded" alt="hero" src="/Hero.svg" />

					</div>
				</div>
			</section>
		</main>
	);
}
