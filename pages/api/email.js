import { SMTPClient } from "emailjs";

export default function handler(req, res) {
  const { email, emailMsg } = req.body;
  const client = new SMTPClient({
    user: "onesbm7@gmail.com",
    password: "52684942",
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    client.send({
      text: emailMsg + "\n" + "TOTAL TTC LIVRE : 267.05€",
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
