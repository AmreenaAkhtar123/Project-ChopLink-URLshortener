import React from 'react'
import Link from 'next/link'

const Navbar = () => {
	return (
		<header className="body-font bg-blue-950 text-white">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link href="/" className="ml-3 text-xl font-bold">ChopLink</Link>

				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<Link href="/" className="mr-5 hover:text-gray-500">Home</Link>
					<Link href="/about" className="mr-5 hover:text-gray-500">About</Link>
				</nav>
				<Link href="/shorten" ><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">Try Now
				</button></Link>

				<Link href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
					<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ml-6 mt-4 md:mt-0 text-black">GitHub
					</button>
				</Link>
			</div>
		</header>
	)
}

export default Navbar

