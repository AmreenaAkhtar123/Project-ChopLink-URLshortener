"use client"
import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (!url || !shorturl) {
      setMessage("⚠️ Please enter both fields!");
      return;
    }

    setLoading(true);
    setMessage("");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    fetch("/api/generate", {
      method: "POST",
      headers: myHeaders,
      body: raw,
    })
      .then((res) => res.json())
      .then((result) => {
        setGenerated(`${window.location.origin}/${shorturl}`);
        setUrl("");
        setShorturl("");
        setMessage(result.message || "✅ Short URL generated!");
      })
      .catch(() => {
        setMessage("❌ Something went wrong. Please try again!");
      })
      .finally(() => setLoading(false));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="mx-auto max-w-lg mt-25 bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-4 shadow-lg">
      <h1 className="text-2xl font-bold text-center">Generate Your Short URL</h1>

      <div className="flex flex-col gap-5">
        <input
          type="text"
          value={url}
          placeholder="Enter your long URL here"
          onChange={(e) => setUrl(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
        />

        <input
          type="text"
          value={shorturl}
          onChange={(e) => setShorturl(e.target.value)}
          placeholder="Enter your preferred short URL text here"
          className="border border-gray-300 px-4 py-2 rounded"
        />

        <button
          className="px-5 inline-flex justify-center w-40 text-white bg-[#162556] border-0 py-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={generate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate URL"}
        </button>
      </div>

      {message && (
        <p className="text-center font-medium text-gray-700">{message}</p>
      )}

      {generated && (
        <div className="mt-4 p-4 bg-white border rounded flex flex-col items-center gap-3">
          <span className="font-bold text-lg">Your Link:</span>
          <code className="text-blue-600">
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
          >
            {copied ? "✅ Copied!" : "📋 Copy Link"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
