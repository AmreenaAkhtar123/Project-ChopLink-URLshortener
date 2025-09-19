import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("choplink")
    const collection = db.collection("urls")

    // Check if short url exists
    const doc = await collection.findOne({ shorturl: body.shorturl })
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "URL already exists!"
      })
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    })

    return Response.json({
      success: true,
      error: false,
      message: "URL Generated Successfully"
    })
  } catch (error) {
  console.error("API Error:", error.message, error.stack);
  return new Response(
    JSON.stringify({
      success: false,
      error: true,
      message: "Internal Server Error: " + error.message
    }),
    { status: 500, headers: { "Content-Type": "application/json" } }
  );
}
}
