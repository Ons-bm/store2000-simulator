import { SMTPClient } from "emailjs";

export default function handler(req, res) {
  const { email, result } = req.body;

  const client = new SMTPClient({
    user: "onesbm7@gmail.com",
    password: "52684942",
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    client.send({
      text: result,
      from: "onesbm7@gmail.com",
      to: email,
      subject: "Devis volet roulant",
    });
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }));
    return;
  }

  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
