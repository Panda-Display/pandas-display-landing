// Example: Vercel serverless function (api/sendForm.js)
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const formId = process.env.ACCESS_KEY; // safe on server side
  const formspreeUrl = `https://formspree.io/f/${formId}`;

  try {
    const response = await fetch(formspreeUrl, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: req.body,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to submit form" });
  }
}
