import React from 'react'

const page = () => {
	return (
		<div>
			<section className="bg-white py-16 ">
				<div className="max-w-5xl mx-auto px-6 text-center">
					{/* Hero */}
					<h1 className="text-4xl font-bold text-gray-800 mb-6">
						About <span className="text-indigo-600">ChopLink</span>
					</h1>
					<p className="text-gray-600 max-w-2xl mx-auto mb-12">
						ChopLink is a simple and powerful URL shortener that helps you share links
						effortlessly. Whether you are a student, developer, or business, ChopLink
						makes your long links short, clean, and trackable.
					</p>

					{/* Mission */}
					<div className="bg-gray-50 p-8 rounded-2xl shadow mb-12">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
						<p className="text-gray-600">
							We believe sharing links should be fast, reliable, and accessible to everyone.
							Our goal is to make ChopLink the simplest way to shorten and manage URLs.
						</p>
					</div>

					{/* How it Works */}
					<h2 className="text-2xl font-semibold text-gray-800 mb-8">How ChopLink Works</h2>
					<div className="grid md:grid-cols-3 gap-8 mb-16">
						<div className="bg-indigo-50 p-6 rounded-xl">
							<span className="text-4xl">1️⃣</span>
							<h3 className="font-semibold text-lg mt-4">Paste your URL</h3>
							<p className="text-gray-600 text-sm mt-2">Enter any long link you want to shorten.</p>
						</div>
						<div className="bg-indigo-50 p-6 rounded-xl">
							<span className="text-4xl">2️⃣</span>
							<h3 className="font-semibold text-lg mt-4">Click Shorten</h3>
							<p className="text-gray-600 text-sm mt-2">Our system instantly generates a clean, short link.</p>
						</div>
						<div className="bg-indigo-50 p-6 rounded-xl">
							<span className="text-4xl">3️⃣</span>
							<h3 className="font-semibold text-lg mt-4">Share Anywhere</h3>
							<p className="text-gray-600 text-sm mt-2">Use your new link on social media, emails, or websites.</p>
						</div>
					</div>

					
				</div>
			</section>

		</div>
	)
}

export default page
