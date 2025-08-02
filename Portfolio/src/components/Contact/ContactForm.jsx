import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_dorhwpe", "template_uq13uit", form.current, {
        publicKey: "VQ7pm6NtJnE7Kwti4",
      })
      .then(
        () => {
          setLoading(false);
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("✅ Message sent successfully!");

          // Clear message after 5 seconds
          setTimeout(() => setSuccess(""), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setLoading(false);
          setSuccess("❌ Failed to send message. Please try again.");
          setTimeout(() => setSuccess(""), 5000);
        }
      );
  };

  return (
    <div>
      {success && (
        <p className="text-center text-sm mb-4 text-cyan font-medium">
          {success}
        </p>
      )}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl transition-all duration-500 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "hover:bg-darkCyan bg-cyan"
          }`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
