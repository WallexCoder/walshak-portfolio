"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const FORMSPREE_ID = "mnjkogra";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 md:px-[8vw] py-20 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl text-center text-[#C4B5FD] mb-4"
        style={{ fontFamily: "'Rubik Wet Paint', cursive" }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-[#6D28D9] max-w-xl mx-auto mb-8 leading-relaxed"
      >
        I'm currently open to new opportunities. Whether you have a question,
        a project idea, or just want to say hi — my inbox is always open!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        
         <a href="mailto:patrickwalshak1.com"
          className="flex items-center gap-2 font-mono text-sm text-[#C4B5FD] border border-[#6D28D9]/40 rounded-full px-4 py-2 hover:border-[#C4B5FD]/70 transition-colors"
        >
          <Mail size={16} /> patrickwalshak1@gmail.com
        </a>
        
          <a href="https://wa.me/2348136070069"
          className="flex items-center gap-2 font-mono text-sm text-[#C4B5FD] border border-[#6D28D9]/40 rounded-full px-4 py-2 hover:border-[#C4B5FD]/70 transition-colors"
        >
          <MessageCircle size={16} /> +234 8136070069
        </a>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-xl mx-auto space-y-5"
      >
        <div>
          <label className="block font-mono text-sm text-[#6D28D9] mb-1.5">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full bg-[#1E1440]/60 border border-[#6D28D9]/35 rounded-lg px-4 py-3
                       text-[#C4B5FD] placeholder:text-[#6D28D9] outline-none
                       focus:border-[#C4B5FD]/70 transition-colors"
          />
        </div>

        <div>
          <label className="block font-mono text-sm text-[#6D28D9] mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full bg-[#1E1440]/60 border border-[#6D28D9]/35 rounded-lg px-4 py-3
                       text-[#C4B5FD] placeholder:text-[#6D28D9] outline-none
                       focus:border-[#C4B5FD]/70 transition-colors"
          />
        </div>

        <div>
          <label className="block font-mono text-sm text-[#6D28D9] mb-1.5">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full bg-[#1E1440]/60 border border-[#6D28D9]/35 rounded-lg px-4 py-3
                       text-[#C4B5FD] placeholder:text-[#6D28D9] outline-none resize-none
                       focus:border-[#C4B5FD]/70 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full border border-[#C4B5FD]/50 text-[#C4B5FD] font-mono text-sm font-semibold
                     rounded-lg py-3 hover:bg-[#C4B5FD]/10 transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-center text-sm text-green-400">
            Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            Something went wrong — try again, or email me directly.
          </p>
        )}
      </motion.form>
    </section>
  );
}