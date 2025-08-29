"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const page = () => {
	const [url, seturl] = useState("")
	const [shorturl, setshorturl] = useState("")

	const [generated, setGenerated] = useState("")

	const generate = () => {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
			"url": url,
			"shorturl": shorturl
		});

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("/api/generate", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
				seturl("")
				setshorturl("")
				console.log(result)
				alert(result.message)

			})
			.catch((error) => console.error(error));

	}


	return (
		<div className='mx-auto max-w-lg mt-25 bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
			<h1 className='text-2xl font-bold'>Generate Your short URL</h1>
			<div className='flex flex-col gap-5'>
				<input type="text"
					value={url}
					placeholder="Enter your long URL here"
					onChange={e => { seturl(e.target.value) }}
					className='border border-gray-300 px-4 py-2 rounded'
				/>


				<input type="text"
					value={shorturl}
					onChange={e => { setshorturl(e.target.value) }}
					placeholder="Enter your preferred short URL text here"
					className='border border-gray-300 px-4 py-2 rounded'
				/>

				<button className="px-5 inline-flex w-40 text-white bg-[#162556] border-0 py-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
					onClick={generate}>
					Generate URL
				</button>
			</div>

			{generated &&
				<>
					<span className='font-bold text-lg'>Your Link: </span>
					<code>
						<Link target="_blank" href={generated}>{generated}</Link>
					</code>
				</>
			}
		</div>
	)
}

export default page
