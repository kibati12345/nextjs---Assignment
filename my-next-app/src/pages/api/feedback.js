export default async function handler(req, res) {
    if (req.method === "POST") {
      const { name, email, feedback } = req.body;
  
      if (!name || !email || !feedback) {
        return res.status(400).json({ error: "All fields are required." });
      }
  
      // Log feedback (or save to database, if desired)
      console.log("Feedback received:", { name, email, feedback });
  
      // Simulate successful submission
      return res.status(200).json({ message: "Feedback submitted successfully!" });
    } else {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  