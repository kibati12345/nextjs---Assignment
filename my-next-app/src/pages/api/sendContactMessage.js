export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Simulate saving the message (e.g., save to a database or send an email)
      console.log('Received message:', { name, email, message });

      // Respond with success
      return res.status(200).json({ success: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error processing contact message:', error);
      return res.status(500).json({ error: 'Failed to send message.' });
    }
  } else {
    // Only allow POST requests
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
