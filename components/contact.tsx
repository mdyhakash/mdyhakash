"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Send, Mail, Github, Linkedin, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const iconMap = { Github, Linkedin, X, Mail };

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success(
            "Message sent successfully! I'll get back to you soon.",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Email send error:", error);
          toast.error(
            error.text || "Failed to send message. Please try again.",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            <span className="text-accent font-mono text-xl sm:text-2xl">
              06.
            </span>{" "}
            Get In Touch
          </h2>

          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-5 sm:space-y-6">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 sm:py-3.5 bg-card border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent text-foreground text-base min-h-[44px]"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 sm:py-3.5 bg-card border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent text-foreground text-base min-h-[44px]"
                  placeholder="your.email@gmail.com"
                  required
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 sm:py-3.5 bg-card border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent text-foreground resize-none text-base"
                  placeholder="Your message..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded font-mono hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </motion.form>
          <motion.div
            className="text-center text-xs sm:text-sm text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <p>Designed & Built by mdyhakash</p>
            <p className="mt-2">© 2025 All rights reserved</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
